<template>
	<view class="login">
		<view class="login-header">账号密码登录</view>
		<view class="user-account">
			<input type="text"  v-model="phone" placeholder="请输入账号" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
		</view>
		<view class="user-password">
			<input type="password" v-model="password" placeholder="请输入密码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
		</view>
		<view class="phone-login" @click="usePhoneLogin">手机验证码登录</view>
		<view class="login-button" @click="submitInfo">登 录</view>
		<view class="login-text">
			<view class="login-text-left" @click="goToRegister">立即注册</view>
			<view class="login-text-right" @click="goToForgetPwd">忘记密码</view>
		</view>
		<view class="login-xieyi">
			<u-radio-group v-model="xieyiFlag">
				<u-radio shape="circle" name = "xieyi" @change="radioChange" >登录即同意<span class = "xieyiMain" @click.stop = "goToRichText(17)">《用户协议》</span>和<span class = "xieyiMain"  @click.stop = "goToRichText(18)">《隐私政策》</span></u-radio>
			</u-radio-group>
		</view>
		<view class="else-login">
			<view class="else-login-top"  v-if="phonePlatform == 'android'">使用第三方登录</view>
			<view class="else-login-bottom"  v-if="phonePlatform == 'android'">
				<!-- <image src="../../static/image/ych/Login/1.png" mode="aspectFill"></image> -->
				<image src="../../static/image/ych/Login/2.png" mode="aspectFill" @click="wxLogin"></image>
			</view>
		
		</view>
	</view>
</template>

<script>
	const dcRichAlert = uni.requireNativePlugin('ZWM-BJXMapView');
	export default {
		onLoad () {
			// console.log(uni.getSystemInfoSync().platform == 'android')
			this.phonePlatform = uni.getSystemInfoSync().platform
			if (uni.getStorageSync('setStorageSync')) {
				this.phone = uni.getStorageSync('setStorageSync')
			}
			this.cid = plus.push.getClientInfo().clientid
			
			this.timer = setInterval(() => {
				if (uni.getStorageSync('elseLogin')) {
					
					uni.removeStorageSync('elseLogin')
					clearInterval(this.timer)
					this.timer = null
					setTimeout(() => {
						uni.navigateTo({
							url: './Register?openId=' + this.openId + "&loginType=" + 1
						})
					}, 500)
			
				}
			}, 1000)
		},
		data () {
			return {
				phone: '',
				password: '',
				cid: '',
				timer: null,
				openId: '',
				phonePlatform: '',
				xieyiFlag: 'xieyi',
				clickCount: 0
			}
		},
		onBackPress() {
			uni.switchTab({
				url: '../index/index'
			})
			return true
		},
		methods: {
			
			radioChange(e) {
				
				if (this.clickCount % 2 == 0) {
					this.xieyiFlag = ''
				} else {
					this.xieyiFlag = 'xieyi'
				}
				this.clickCount += 1
			},
			// 去富文本
			goToRichText (id) {
				uni.navigateTo({
					url: '../RichText/RichText?id=' + id
				})
			},
			// 切换到手机验证码登录
			usePhoneLogin () {
				uni.navigateTo({
					url: './PhoneLogin'
				})
			},
			// 忘记密码
			goToForgetPwd () {
				uni.navigateTo({
					url: './ForgetPassWord'
				})
			},
			// 立即注册
			goToRegister () {
				uni.navigateTo({
					url: './Register?loginType=' + 0
				})
			},
			// 登录
			async submitInfo () {
				if (this.phone.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请输入账号'
					})
				}
				if (this.password.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请输入密码'
					})
				}
				if (this.xieyiFlag != 'xieyi') return uni.showToast({icon: 'none',title: '请仔细阅读用户协议'})
						
						
					
				let res = await this.$fetch(this.$api.login, {checkCode: this.password, loginName: this.phone, loginType: 0}, "POST", 'FORM')
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
					// console.log(msg)
					let result = await this.$fetch(this.$api.im_register, {token: res.data.token}, "POST", 'FORM')
					
					let ImMsg =  JSON.parse(result.msg)
					
					let imUserName = ImMsg[0].username
				
					
					dcRichAlert.logIn({username: imUserName,password: imUserName}, result => {console.log(result)});
					// dcRichAlert.logIn({username: 'bbbb',password: 'bbbb'}, result => {console.log(result)});
					
					
					setTimeout(() => {
						uni.switchTab({
							url: '../My/My'
						})
					}, 500)
					
				}
			},
			wxLogin () {
				uni.login({
				  provider: 'weixin',
				  success:  async (loginRes) => {
				    // console.log();
					this.openId =  loginRes.authResult.openid
					let res = await this.$fetch(this.$api.login, {loginName: loginRes.authResult.openid, loginType: 1}, "POST", 'FORM')
					console.log(res)
					
					if (res.code == 0) {
						uni.showToast({
							icon: 'none',
							title: res.msg
						})
						uni.setStorageSync('token', res.data.token)
						uni.setStorageSync('userId', res.data.userId)
		
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
				});
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
		}
		.phone-login{
			font-family: PingFangSC-Regular;
			font-size: 14px;
			color: #2C2C2C;
			letter-spacing: 0.04px;
			// padding-top: 42rpx;
			// padding-bottom: 96rpx;
			margin-top: 42rpx;
			margin-bottom: 96rpx;
			box-sizing: border-box;
		}
		.login-button{
			width: 600rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			margin: 0 auto;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.09px;
		}
		.login-text{
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding-top: 22rpx;
			// padding-bottom: 424rpx;
			box-sizing: border-box;
			view{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #2C2C2C;
				letter-spacing: 0.04px;
			}
		}
		.login-xieyi{
			width: 100%;
			text-align: center;
			margin:  0 auto;
			padding-top: 30rpx;
			span{ 
				color: #2979ff;
			}
		}
		.else-login{
			width: 100%;
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
			.else-login-top{
				font-family: PingFangSC-Regular;
				font-size: 10px;
				color: #2C2C2C;
				letter-spacing: 0.04px;
				text-align: center;
			}
			.else-login-bottom{
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				padding-top: 36rpx;
				box-sizing: border-box;
				image{
					width: 62rpx;
					height: 62rpx;
					&:nth-child(2){
						margin-left: 80rpx;
						box-sizing: border-box;
					}
				}
			}
		}
	}
</style>
