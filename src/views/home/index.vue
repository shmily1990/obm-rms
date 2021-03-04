<template>
	<div class="home">
		<div class="header">
			<div class="header-left">LOGO | OBM模型</div>
			<div class="header-right">
				<a-icon type="user" />:
				<a-dropdown>
					<a class="ant-dropdown-link" @click="e => e.preventDefault()">
						{{ $store.state.userInfo.remarkName }} <a-icon type="down" />
					</a>
					<a-menu slot="overlay">
						<a-menu-item>
							<div @click="loginOut">退出登录</div>
						</a-menu-item>
					</a-menu>
				</a-dropdown>
			</div>
		</div>
		<div class="content">
			<div class="step">
				<a-steps :current="current">
					<a-step v-for="item in steps" :key="item.title" :title="item.title" />
				</a-steps>
				<div class="steps-content">
					{{ steps[current].content }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { removeToken } from '@/libs/utils'
export default {
	name: 'home',
	data() {
		return {
			current: 0,
			steps: [
				{
					title: 'First',
					content: 'First-content'
				},
				{
					title: 'Second',
					content: 'Second-content'
				},
				{
					title: 'Last',
					content: 'Last-content'
				}
			]
		}
	},
	methods: {
		loginOut() {
			removeToken('UserInfo')
			this.$router.push('/')
		}
	},
	mounted() {
		console.log(this.$store.state)
	}
}
</script>
<style lang="scss" scoped>
.home {
	background: #f0f0f0;
	width: 100%;
	height: 100%;
	.header {
		height: 60px;
		background: #ffffff;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		line-height: 60px;
		padding: 0 20px;
	}
}
</style>
