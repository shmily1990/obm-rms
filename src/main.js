import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from '@/components/echarts'
import Plotly from 'plotly.js/lib/core'
import Antd, { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as utils from '@/libs/utils'
import $http from '@/plugins/request'
// import Plotly from 'plotly'
// 注册伪彩图插件
Plotly.register([require('plotly.js/lib/heatmap')])
Plotly.register([require('plotly.js/lib/contour')])
Vue.prototype.$Plotly = Plotly
Vue.prototype.$message = message
Vue.prototype.$utils = utils
Vue.prototype.$http = $http
//
Vue.config.productionTip = false
Vue.component('echarts', echarts)
Vue.use(Antd)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
