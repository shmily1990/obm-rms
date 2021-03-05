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
				<div class="title">注册科略</div>
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
						<a-checkbox @change="remeberPassword"> 注册即表示同意科略<span>《使用条款》</span> </a-checkbox>
					</a-form-model-item>
					<a-form-model-item>
						<a-button type="primary" block @click="handleSubmit">
							注册
						</a-button>
					</a-form-model-item>
					<a-form-model-item>
						<div class="no-account">已经有帐号? <span @click="gotoLogin">去登录</span></div>
					</a-form-model-item>
				</a-form-model>
			</div>
		</a-modal>
	</div>
</template>
<script>
export default {
	name: 'Login',
	props: ['isShow'],
	data() {
		return {
			visible: true,
			closable: false,
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
		gotoLogin() {
			this.$emit('update:isShow', 1)
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
