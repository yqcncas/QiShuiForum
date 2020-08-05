<template>
	<view class="Register">
		<view class="Register-title">填写用户信息</view>
		<view class="Register-item">
			<view class="Register-item-left">用户名*</view>
			<view class="Register-item-right">
				<input type="text" v-model = "userName" placeholder="请输入姓名" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
			</view>
		</view>
		<view class="Register-item">
			<view class="Register-item-left">密码*</view>
			<view class="Register-item-right">
				<input type="password" v-model = "userPwd" placeholder="请输入密码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
			</view>
		</view>
		<view class="Register-item">
			<picker  :range="sexList" @change="selectedSex">
				<view class="Register-item-box">
					<view class="Register-item-left">性别</view>
					<view class="Register-item-right">
						<input type="text" disabled v-model="showSex" placeholder="请选择性别" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
					</view>
				</view>
				
			</picker>
			
		</view>
		<view class="Register-item">
			<picker mode="date" @change="selectedDate">
				<view class="Register-item-box">
					<view class="Register-item-left">生日</view>
					<view class="Register-item-right">
						<input type="text" disabled v-model="birthday" placeholder="请选择日期" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
					
					</view>
				</view>
			</picker>
			
		</view>
		<view class="Register-item">
			<view class="Register-item-left">手机号*</view>
			<view class="Register-item-right">
				<input type="number" v-model="phone" maxlength="11" placeholder="请输入手机号" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
			</view>
		</view>
		<view class="Register-item">
			<view class="Register-item-left" >手机验证码*</view>
			<view class="Register-item-right">
				<input type="text" v-model="yzm" :class="{active: getYzmTimer}" placeholder="请输入验证码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
				<view class="getYzm" @click="getYzm" :class="{active: getYzmTimer}">{{getYzmFlag ? '短信验证码' : getYzmTimer + '秒后重新获取' }}</view>
			</view>
		</view>
		<view class="save" @click="submitForm">注册</view>
	</view> 	
</template>

<script>
	const dcRichAlert = uni.requireNativePlugin('ZWM-BJXMapView');
	import jsencrypt from '@/js_sdk/jsencrypt-Rsa/jsencrypt/jsencrypt.vue';
	export default {
		onLoad(options) {
			this.cid = plus.push.getClientInfo().clientid
			console.log(options.openId)
			if (options.openId) {
				this.openId = options.openId
			}
			if (options.loginType) {
				this.loginType = options.loginType
			}
			
		},
		data () {
			return {
				sexList: ['男', '女'],
				getYzmTimer: 0,
				getYzmFlag: true,
				timer: null,
				yzm: '',
				phone: '',
				userName: '',
				userPwd: '',
				birthday: '',
				sex: '',
				showSex: '',
				cid: '',
				loginType: 0,
				openId: ''
			}
		},
		methods: {
			selectedSex (e) {
				console.log(e)
				this.sex = e.detail.value
				this.showSex = this.sexList[e.detail.value]
			},
			selectedDate (e) {
				console.log(e)
				this.birthday = e.detail.value
			},
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
				
				let res = await this.$fetch(this.$api.mobilecode, {mobile: pubblicData}, "POST", 'FORM')
				console.log(res)
				
			},
			//　提交
			async submitForm () {
				if (this.userName.trim() == '' || this.userPwd.trim() == '' || this.yzm.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请检查必填写是否填写完整'
					})
				}
				let res = await this.$fetch(this.$api.register, {birthday: this.birthday, checkCode: this.yzm, cid: this.cid, id: this.openId, inviteCode: '', loginType: this.loginType, mobile: this.phone, nickName: this.userName, password: this.userPwd, sex: this.sex}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					let res
					if (this.openId) {
						console.log(this.loginType)
						res = await this.$fetch(this.$api.login, {loginName: this.openId ,loginType: this.loginType}, "POST", 'FORM')
					} else {
						res = await this.$fetch(this.$api.login, {loginName: this.phone, checkCode: this.userPwd, loginType: this.loginType}, "POST", 'FORM')
					}
					console.log(res)
					uni.setStorageSync('token', res.data.token)
					uni.setStorageSync('userId', res.data.userId)
					uni.setStorageSync('loginUserAccount', this.phone)
					
					let result = await this.$fetch(this.$api.im_register, {token: res.data.token}, "POST", 'FORM')
					
					let ImMsg =  JSON.parse(result.msg)
					
					let imUserName = ImMsg[0].username
												
					dcRichAlert.logIn({username: imUserName,password: imUserName}, result => {console.log(result)});
					
					
					setTimeout(() => {
						uni.switchTab({
							url: '../index/index'
						})
					}, 500)
					
				}
			}
		}
	}
</script>

<style lang="less">
	.Register{
		padding: 0 32rpx;
		box-sizing: border-box;
		.Register-title{
			font-family: PingFangSC-Medium;
			font-size: 18px;
			color: #212121;
			letter-spacing: 0.07px;
			padding-top: 50rpx;
			box-sizing: border-box;
		}
		.Register-item{
			padding-top: 50rpx;
			display: flex;
			align-items: center;
			&:nth-child(7){
				.Register-item-right{
					input{
						// transform: translateX(18rpx);
						// padding-right: 40rpx;
						box-sizing: border-box;
						&.active{
							// transform: translateX(32rpx);
						}
					}
				}
			}
			.Register-item-box{
				display: flex;
				align-items: center;
			}
			&:nth-child(1){
				padding-top: 30rpx;
			}
			&:nth-child(2){
				padding-top: 40rpx;
			}
			&:nth-child(5){
				padding-top: 40rpx;
			}
		
			.Register-item-left{
				width: 220rpx;
				
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #171717;
				letter-spacing: 0.06px;
			}
			.Register-item-right{
				display: flex;
				align-items: center;
				input{
					flex: 1;
					// width: 300rpx;
					position: relative;
				}
				.getYzm{
					display: inline-block;
					padding: 0 10rpx;
					border: 1px solid #FF7B30;
					border-radius: 3px;
					box-sizing: border-box;
					color: #FF7B30;
					position: absolute;
					right: 32rpx;
					z-index: 99;
					&.active{
						color: #C8C9CC;
					}
				}
			}
		}
		.save{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 30rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
		}
	}
</style>
