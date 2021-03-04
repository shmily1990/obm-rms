import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: null
	},
	mutations: {
		setUserInfo(state, data) {
			console.log(data)
			state.userInfo = data
		}
	},
	actions: {},
	modules: {}
})
