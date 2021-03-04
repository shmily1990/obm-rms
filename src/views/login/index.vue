<template>
	<div class="login">
		<div class="logo">OBM模型-CMS</div>
		<a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
			<a-form-model-item label="用户名：">
				<a-input v-model="form.username" />
			</a-form-model-item>
			<a-form-model-item label="密码：">
				<a-input v-model="form.password" type="password" />
			</a-form-model-item>
			<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
				<a-button type="primary" @click="onSubmit">
					登录
				</a-button>
			</a-form-model-item>
		</a-form-model>
	</div>
</template>
<script>
import { setToken } from '@/libs/utils'
export default {
	name: 'login',
	data() {
		return {
			form: {
				username: '',
				password: ''
			},
			labelCol: { span: 4 },
			wrapperCol: { span: 14 }
		}
	},
	methods: {
		onSubmit() {
			const { username, password } = this.form
			const params = {
				username,
				password,
				responseBodyType: 20,
				needLoginOld: true
			}
			return this.$http
				.post('signIn', params, {
					isMock: false,
					transformData: false,
					type: 'form'
				})
				.then(data => {
					if (data.userId) {
						const { username, userId, tenantName, tenantId, tenantcode, accessToken, userOld } = data
						const userInfo = {
							userName: username,
							userId: userId,
							remarkName: tenantName,
							tenantId: tenantId,
							tenantCode: tenantcode,
							sinm: 'Bearer' + ' ' + accessToken
						}
						setToken('UserInfo', userInfo)
						this.$store.commit('setUserInfo', userInfo)
						this.$router.push('/home')
					}
				})
				.catch(error => {
					console.log(error)
					this.$message.error('登录失败')
				})
		}
	},
	mounted() {}
}
</script>
<style lang="scss" scoped>
.login {
	width: 500px;
	height: 300px;
	margin: 40px auto 0;
	.logo {
		font-size: 20px;
		line-height: 75px;
	}
	::v-deep .ant-form-item {
		margin-left: 47px;
	}
}
</style>
