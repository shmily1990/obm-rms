<template>
	<div class="home">
		<div class="header">
			<div class="logo"><span>LOGO</span> | OBM模型</div>
			<ul class="nav">
				<li class="active"><span>官网首页</span></li>
				<li><span>解决方案</span></li>
				<li><span>成功案例</span></li>
				<li><span>科略新闻</span></li>
				<li><span>招贤纳士</span></li>
				<li><span>关于我们</span></li>
			</ul>
			<div class="sigin">
				<a-button type="primary" class="sign-up" @click="signUp">免费注册</a-button>
				<a-button @click="showLogin">立即登录</a-button>
			</div>
		</div>
		<div class="content"></div>
		<login :isShow.sync="loginShow" v-if="loginShow == 1"></login>
		<sigup :isShow.sync="loginShow" v-if="loginShow == 2"></sigup>
	</div>
</template>
<script>
import login from '@/views/login/Login.vue'
import sigup from '@/views/login/Sigup.vue'
export default {
	name: 'home',
	components: {
		login,
		sigup
	},
	data() {
		return {
			loginShow: 0
		}
	},
	methods: {
		signUp() {
			this.loginShow = 2
		},
		showLogin() {
			this.loginShow = 1
		}
	},
	mounted() {}
}
</script>
<style lang="scss" scoped>
.home {
	height: 100%;
	background: #f0f0f0;
	.header {
		height: 50px;
		background: #ffffff;
		display: flex;
		padding: 0 50px;
		justify-content: space-between;
		line-height: 50px;
		.logo {
			font-size: 16px;
			span {
				color: blue;
				font-weight: bold;
				font-size: 20px;
				vertical-align: bottom;
			}
		}
		.nav {
			display: flex;
			li {
				width: 80px;
				text-align: center;
			}
			.active {
				color: blue;
			}
		}
		.sigin {
			.sign-up {
				margin-right: 10px;
			}
		}
	}
}
</style>
