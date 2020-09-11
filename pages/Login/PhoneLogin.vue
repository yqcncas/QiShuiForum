<template>
	<view class="login">
		<view class="login-header">手机验证码登录</view>
		<view class="user-account">
			<input type="text" v-model="phone" placeholder="请输入账号" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
		</view>
		<view class="user-password">
			<input type="text" v-model="yzm" placeholder="请输入验证码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
			<view class="getYzm" @click="getYzm" :class="{active: getYzmTimer}">{{getYzmFlag ? '短信验证码' : getYzmTimer + '秒后重新获取' }}</view>
		</view>
		<view class="login-button" @click="submitInfo">登 录</view>
	</view>
</template>

<script>
	import jsencrypt from '@/js_sdk/jsencrypt-Rsa/jsencrypt/jsencrypt.vue';
	const dcRichAlert = uni.requireNativePlugin('ZWM-BJXMapView');
	export default {
		onLoad () {
			if (uni.getStorageSync('loginUserAccount')) {
				this.phone = uni.getStorageSync('loginUserAccount')
			}
			this.cid = plus.push.getClientInfo().clientid
		},
		data () {
			return {
				getYzmTimer: 0,
				getYzmFlag: true,
				timer: null,
				yzm: '',
				phone: '',
				cid: ''
			}
		},
		methods: {
			//　验证码
			async getYzm () {
				if (!this.$u.test.mobile(this.phone)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查手机号输入是否正确'
					})
				}
				if (!this.getYzmFlag) return
				this.getYzmFlag = false
				this.getYzmTimer = 60
				this.timer = setInterval(() => {
					if (this.getYzmTimer <= 0) {
						clearInterval(this.timer)
						this.timer = null
						this.getYzmFlag = true
					} else {
						this.getYzmTimer--
					}
				}, 1000)
				var pubblicData = jsencrypt.setEncrypt(this.$api.publiukey,this.phone);
				
				console.log(pubblicData);
				let res = await this.$fetch(this.$api.mobilecode, {mobile: pubblicData}, "POST", 'FORM')
				console.log(res)
			},
			async submitInfo () {
				if (!this.$u.test.mobile(this.phone)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查手机号输入是否正确'
					})
				}
				if (this.yzm.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请输入验证码'
					})
				}
				let res = await this.$fetch(this.$api.login, {checkCode: this.yzm, loginName: this.phone, loginType: 3}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					uni.setStorageSync('token', res.data.token)
					uni.setStorageSync('userId', res.data.userId)
					uni.setStorageSync('loginUserAccount', this.phone)
					let msg = await this.$fetch(this.$api.upd_user, {cid: this.cid}, "post", 'form')
					
					let result = await this.$fetch(this.$api.im_register, {token: res.data.token}, "POST", 'FORM')
					
					let ImMsg =  JSON.parse(result.msg)
					
					let imUserName = ImMsg[0].username
												
					dcRichAlert.logIn({username: imUserName,password: imUserName}, result => {console.log(result)});
					
					
					setTimeout(() => {
						uni.switchTab({
							url: '../My/My'
						})
					}, 500)
					
				}
			
				
			}
		}
	}
</script>

<style lang="less">
	.login{
		padding-top: 126rpx;
		padding-left: 76rpx;
		padding-right: 70rpx;
		box-sizing: border-box;
		.login-header{
			font-family: PingFangSC-Medium;
			font-size: 18px;
			color: #212121;
			letter-spacing: 0.07px;
			font-weight: bold;
			padding-bottom: 80rpx;
			box-sizing: border-box;
		}
		.user-account, .user-password{
			padding-bottom: 28rpx;
			box-sizing: border-box;
			border-bottom: 1px solid #DDDDDD;
			input{
				font-family: PingFangSC-Regular;
				font-size: 16px;
			}
		}
		.user-password{
			padding-top: 42rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0;
			input{
				flex: 1;
				border-bottom: 1px solid #DDDDDD;
				padding-bottom: 28rpx;
				
			}
			.getYzm{
				display: inline-block;
				padding: 0 10rpx;
				border: 1px solid #FF7B30;
				border-radius: 3px;
				box-sizing: border-box;
				color: #FF7B30;
				transform: translateY(-14rpx);
				&.active{
					color: #C8C9CC;
				}
			}
		}
		.login-button{
			width: 600rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			margin: 0 auto;
			margin-top: 160rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.09px;
		}
	}
</style>
