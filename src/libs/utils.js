import Cookies from 'js-cookie'
import Vue from 'vue'
import store from '../store'
// 获取aqi6参数的颜色范围
export function getAqiColorRange() {
	const arr = [
		{
			name: 'AQI',
			fullName: 'AQI',
			arr: [0, 50, 100, 150, 200, 300, 500],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: '-'
		},
		{
			name: 'PM25',
			fullName: 'PM₂.₅',
			sub1: 'PM',
			sub2: '₂.₅',
			arr: [0, 35, 75, 115, 150, 250, 500],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: 'µg/m³'
		},
		{
			name: 'PM10',
			fullName: 'PM₁₀',
			sub1: 'PM',
			sub2: '₁₀',
			arr: [0, 50, 150, 250, 350, 420, 600],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: 'µg/m³'
		},
		{
			name: 'SO2',
			fullName: 'SO₂',
			sub1: 'SO',
			sub2: '₂',
			arr: [0, 50, 150, 475, 800, 1600, 2620],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: 'µg/m³'
		},
		{
			name: 'NO2',
			fullName: 'NO₂',
			sub1: 'NO',
			sub2: '₂',
			arr: [0, 40, 80, 180, 280, 565, 940],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: 'µg/m³'
		},
		{
			name: 'O3',
			fullName: 'O₃',
			sub1: 'O',
			sub2: '₃',
			arr: [0, 160, 215, 265, 800, 1000],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: 'µg/m³'
		},
		{
			name: 'CO',
			fullName: 'CO',
			arr: [0, 5, 10, 35, 60, 90, 150],
			colorArr: ['优', '良', '轻度', '中度', '重度', '严重'],
			unit: 'mg/m³'
		}
	]
	return arr
}

// 获取aqi类型格式化名称
export function getFormaterIndicator(val) {
	const formaterIndicator = {
		PM25: 'PM₂.₅',
		pm25: 'PM₂.₅',
		PM10: 'PM₁₀',
		pm10: 'PM₁₀',
		SO2: 'SO₂',
		so2: 'SO₂',
		So2: 'SO₂',
		NO2: 'NO₂',
		no2: 'NO₂',
		O3: 'O₃',
		o3: 'O₃',
		CO: 'CO',
		co: 'CO',
		aqi: 'AQI',
		cos: '综合指数',
		// o3_8h: 'O₃_8h',
		'O₃_8H': 'O₃_8H',
		tvoc: 'TVOC'
	}
	return formaterIndicator[val] || val
}

export function getToken(key) {
	return Cookies.get(key)
}

export function setToken(key, token) {
	return Cookies.set(key, token)
}

export function removeToken(key) {
	return Cookies.remove(key)
}

export function fix(val, decimal = 2) {
	return parseFloat(val.toFixed(decimal))
}
// 递归查找
export function findRecursive(array, key, value, next = 'children') {
	const o = []
	array.forEach(function iter(item) {
		if (item[key] === value) {
			o.push(item)
		}

		return Array.isArray(item[next]) && item[next].forEach(iter)
	})

	return o
}

// 递归模糊查询
export function fuzzyFindRecursive(array, key, value, next = 'children') {
	const o = []
	array.forEach(function iter(item) {
		if (item[key].includes(value)) {
			o.push(item)
		}

		return Array.isArray(item[next]) && item[next].forEach(iter)
	})

	return o
}

// 根据指定模块, 生成可访问的动态路由
export function getAccessModuleRoutes(menus, arr) {
	const hasPermission = name => {
		if (!name) {
			return false
		}
		// return !!Vue.prototype.$_.find(menus, { menuCode: name })
		return menus.includes(name)
	}

	const getChild = arr => {
		const box = []
		arr.forEach(i => {
			const children = i.children || []
			const needAuth = Vue.prototype.$_.get(i, 'meta.needAuth', false)
			const authCode = Vue.prototype.$_.get(i, 'meta.authCode', '')
			const hasP = hasPermission(authCode)
			if (Vue.prototype.$_.isEmpty(i.children)) {
				if ((needAuth && hasP) || !needAuth) {
					box.push(i)
				}
			} else {
				if ((needAuth && hasP) || !needAuth) {
					/**
					设置默认可访问的redirect
					1. 无子集, 设置默认的redirect可访问
					2. 有子集 redirect = 子集[0] || 默认redirect
					 **/
					const havePermissionChildren = getChild(i.children)
					if (Vue.prototype.$_.isEmpty(havePermissionChildren)) {
						const index = i.children.findIndex(item => {
							return item.name == i.redirect.name
						})
						if (index != -1) {
							i.children[index].meta.needAuth = false
							havePermissionChildren[0] = i.children[index]
						}
					} else {
						const findRedirect = havePermissionChildren.find(item => {
							return item.name == i.redirect.name
						})
						if (!findRedirect) {
							i.redirect.name = havePermissionChildren[0].name
						}
					}

					box.push({ ...i, children: havePermissionChildren })
				}
			}
		})
		return box
	}

	return getChild(arr)
}

// 判断功能权限(非场景)
export function havePermissionNotScene(menu) {
	if (!menu) {
		return false
	}
	const userMenus = JSON.parse(localStorage.getItem('allAutoCode'))
	if (!userMenus) return false
	return userMenus.includes(menu)
}

// 判断功能权限(场景下)
export function havePermission(menu) {
	if (!menu) {
		return false
	}
	return (
		store.state.currentSceneObj && store.state.currentSceneObj[store.state.currentSceneForArea].includes(menu)
	)
}
