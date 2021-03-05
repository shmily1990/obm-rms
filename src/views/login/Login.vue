<template>
	<div>
		<a-modal
			title=""
			destroyOnClose
			:visible="visible"
			centered
			:closable="closable"
			:footer="null"
			:width="400"
			@cancel="cancel"
		>
			<div class="login-box">
				<div class="title">登录科略</div>
				<a-form-model :model="formInline" class="form-content">
					<a-form-model-item>
						<a-input v-model="formInline.username" placeholder="Username">
							<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
						</a-input>
					</a-form-model-item>
					<a-form-model-item>
						<a-input v-model="formInline.password" type="password" placeholder="Password">
							<a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
						</a-input>
					</a-form-model-item>
					<a-form-model-item>
						<a-checkbox @change="remeberPassword" :checked="isChecked">
							记住密码
						</a-checkbox>
						<span class="forget-password">忘记密码?</span>
					</a-form-model-item>
					<a-form-model-item>
						<a-button type="primary" block @click="handleSubmit">
							登录
						</a-button>
					</a-form-model-item>
					<a-form-model-item>
						<div class="no-account">还没有帐号? <span @click="gotoSigup">去注册</span></div>
					</a-form-model-item>
				</a-form-model>
			</div>
		</a-modal>
	</div>
</template>
<script>
import { setToken } from '@/libs/utils'
export default {
	name: 'Login',
	props: ['isShow'],
	data() {
		return {
			visible: true,
			closable: false,
			isChecked: true,
			formInline: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		cancel() {
			this.visible = false
			this.$emit('update:isShow', 0)
		},
		remeberPassword() {
			console.log(666)
		},
		gotoSigup() {
			this.$emit('update:isShow', 2)
		},
		handleSubmit() {
			const { username, password } = this.formInline
			if (username == '') {
				this.$message.info('用户名不能为空！')
				return false
			}
			if (password == '') {
				this.$message.info('密码不能为空！')
				return false
			}
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
						this.$emit('update:isShow', 0)
						this.visible = false
					}
				})
				.catch(error => {
					console.log(error)
					this.$message.error('登录失败')
				})
		}
	}
}
</script>
<style lang="scss" scoped>
.login-box {
	.title {
		text-align: center;
		line-height: 50px;
		font-size: 17px;
		font-weight: bold;
	}
	.form-content {
		padding: 0 10px;
		.forget-password {
			float: right;
			padding-right: 8px;
		}
		.no-account {
			text-align: center;
			span {
				color: blue;
				cursor: pointer;
			}
		}
	}
	::v-deep .ant-form-item {
		margin-bottom: 15px;
	}
}
</style>
