import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
import RequestQueue from './queue'
import RequestCache from './cache'
import { message } from 'ant-design-vue'
import api from '@/api/index'
import globalConfig from '@/config/sys'
import { getToken } from '@/libs/utils'
// import store from '../../store'

const axiosInstance = axios.create({
	baseURL: 'http://10.5.10.50:8000',
	timeout: globalConfig.requestTimeout
})
axiosInstance.interceptors.request.use(
	config => {
		console.log(config)
		config.headers.sinm = getToken('UserInfo') ? JSON.parse(getToken('UserInfo')).sinm : globalConfig.sinm
		config.headers.Authorization = getToken('UserInfo')
			? JSON.parse(getToken('UserInfo')).sinm
			: globalConfig.sinm
		if (['post', 'put', 'delete'].includes(config.method.toLowerCase())) {
			if (config.type === 'json') {
				config.headers['Content-Type'] = 'application/json;charset=UTF-8'
				config.headers['Content-Disposition'] = 'attachment'
				config.data = JSON.stringify(config.data)
			} else if (config.type === 'form-data') {
				config.headers['Content-Type'] = 'multipart/form-data'
			} else {
				config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
				config.headers.Authorization = 'Basic YzEyMzQ1NjpzMTIzNDU2'
				config.data = qs.stringify(config.data)
			}
		}
		// console.log(config)
		return config
	},
	err => {
		return Promise.reject(err)
	}
)

const requestWithData = ['post', 'put', 'patch']
const requestWithOutData = ['get', 'option', 'delete']
const allowMethods = [...requestWithData, ...requestWithOutData]

const $http = (function() {
	const queue = new RequestQueue()
	const cache = new RequestCache()
	return {
		cancel(requestId, method) {
			requestId = md5(requestId)
			return Promise.all([this.cancelRequest(requestId, method), this.cancelCache(requestId)])
		},
		cancelCache(requestId) {
			requestId = md5(requestId)
			return cache.delete(requestId)
		},
		getCache(requestId) {
			requestId = md5(requestId)
			return cache.get(requestId)
		},
		setCache(requestId, promise, time) {
			requestId = md5(requestId)
			cache.set(requestId, promise, time)
		},
		cancelRequest(requestId, method = 'get') {
			requestId = md5(method.toLowerCase() + requestId)
			return queue.cancel(requestId)
		},
		setQueue(request) {
			queue.set(request)
		},
		delQueue(requestId) {
			requestId = md5(requestId)
			queue.delete(requestId)
		}
	}
})()

allowMethods.forEach(method => {
	Object.defineProperty($http, method, {
		get() {
			if (requestWithData.includes(method.toLowerCase())) {
				return (serviceName, data, config) => getPromiseRequest(method, serviceName, data, config)
			} else {
				return (serviceName, config) => getPromiseRequest(method, serviceName, null, config)
			}
		}
	})
})

async function getPromiseRequest(method, serviceName, data, userConfig) {
	const url = api[serviceName]
	if (!url) {
		throw new Error('服务名不存在')
	}

	const config = initConfig(userConfig)
	const requestIdBeforeMD5 = method + url
	let promise
	if (config.cancelPrevious) {
		await $http.cancel(requestIdBeforeMD5, method)
	}
	if (config.clearCache) {
		await $http.cancelCache(requestIdBeforeMD5)
	}
	if (config.fromCache) {
		promise = $http.getCache(requestIdBeforeMD5)
		if (promise) return promise
	}
	promise = new Promise((resolve, reject) => {
		const axiosRequest = requestWithData.includes(method)
			? axiosInstance[method](url, data, config)
			: axiosInstance[method](url, config)

		axiosRequest
			.then(response => {
				const responseData = response.data
				return resolve(
					config.originalResponse ? response : config.transformData ? responseData.data : responseData
				)
			})
			.catch(err => {
				return reject(err)
			})
	})
		.catch(err => {
			if (axios.isCancel(err)) {
				return Promise.reject(err)
			}

			// 异常不缓存
			if (config.fromCache) {
				$http.cancelCache(requestIdBeforeMD5)
			}

			if (err.response) {
				const { status } = err.response
				const nextError = { message: err.message, status }
				if (status == 400) {
					nextError.message = '请求参数错误'
				} else if (status == 404) {
					nextError.message = '接口地址不存在'
				} else if (status == 403) {
					nextError.message = '无权限访问'
				} else if (status == 500) {
					nextError.message = '接口出错'
				} else if (status == 501) {
					// store.dispatch('loginOut', '登录失效，已回到游客模式')
					nextError.message = 'token过期'
				}
				config.globalError && message.error(nextError.message)
				return Promise.reject(nextError)
			} else {
				// store.dispatch('loginOut', '登录失效，已回到游客模式')
				config.globalError && message.error(err.message || '系统异常')
			}

			return Promise.reject(err)
		})
		.finally(() => {
			$http.delQueue(requestIdBeforeMD5)
		})

	if (config.fromCache) {
		$http.setCache(requestIdBeforeMD5, promise, config.cacheTime)
	}
	$http.setQueue({ ...config, requestId: md5(requestIdBeforeMD5) })
	return promise
}

function initConfig(userConfig) {
	const defaultConfig = {
		type: 'json',
		fromCache: false,
		// 缓存时间, 默认10分钟 (毫秒)
		cacheTime: globalConfig.cacheTime,
		// 是否清除缓存
		clearCache: false,
		// 是否取消上条请求
		cancelPrevious: false,
		// 是否返回原始响应
		originalResponse: false,
		// 仅返回data对象
		transformData: true,
		// 全局提示异常
		globalError: false,
		// 取消请求的token
		...getCancelToken()
	}
	if (userConfig && userConfig.isMock) {
		userConfig.baseURL = globalConfig.mockUrl
	}

	if (userConfig && userConfig.download) {
		userConfig.responseType = 'blob'
	}
	return Object.assign({}, defaultConfig, userConfig)
}

function getCancelToken() {
	let cancelExcutor
	const cancelToken = new axios.CancelToken(excutor => {
		cancelExcutor = excutor
	})
	return {
		cancelToken,
		cancelExcutor
	}
}

export default $http
