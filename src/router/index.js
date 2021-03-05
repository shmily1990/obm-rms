import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/libs/utils'
import home from '@/views/home'

Vue.use(VueRouter)

const routes = [
	{
		path: '/Home',
		name: 'Home',
		component: home
	},
	{
		path: '/',
		component: home
	}
	// {
	// 	path: '/',
	// 	name: 'login',
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/login')
	// },
	// {
	// 	path: '/home',
	// 	name: 'home',
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/home')
	// },
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	// const token = getToken('UserInfo')
	// if (token) {
	// 	next()
	// } else {
	// 	if (to.path !== '/') {
	// 		next({ path: '/' })
	// 	} else {
	// 		next()
	// 	}
	// }
	next()
})
export default router
