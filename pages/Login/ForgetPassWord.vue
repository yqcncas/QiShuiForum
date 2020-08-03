<template>
	<view class="ForgetPassWord">
		<view class="ForgetPassWord-phone">
			<input type="text" v-model="phone" maxlength="11" placeholder="请输入手机号" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
		</view>
		<view class="ForgetPassWord-yzm">
			<view class="ForgetPassWord-yzm-box">
				<input type="number" v-model="yzm" placeholder="请输入验证码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
			</view>
			<view class="getYzm" @click="getYzm" :class="{active: getYzmTimer}">{{getYzmFlag ? '短信验证码' : getYzmTimer + '秒后重新获取' }}</view>
			
		</view>
		<view class="ForgetPassWord-newPwd">
			<input type="password" v-model="newPwd" placeholder="请输入新密码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #B7B7B7;letter-spacing: 0.06px;"/>
		</view>
		<view class="submit-button" @click="submitInfo">确 定</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				// 验证码
				getYzmTimer: 0,
				getYzmFlag: true,
				timer: null,
				// 表单数据
				phone: '',
				yzm: '',
				newPwd: '',
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
				
				let res = await this.$fetch(this.$api.mobilecode, {mobile: this.phone}, "POST", 'FORM')
				console.log(res)
			},
			// 提交
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
				if (this.newPwd.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请输入新密码'
					})
				}
				
				let res = await this.$fetch(this.$api.forget_pwd, {checkCode: this.yzm, mobile: this.phone, pwd: this.newPwd}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					setTimeout(() => {
						uni.navigateBack({
							delta: 1
						})
					}, 500)
				}
			}
		}
	}
</script>

<style lang="less">
	.ForgetPassWord{
		padding-top: 140rpx;
		padding-left: 74rpx;
		padding-right: 74rpx;
		.ForgetPassWord-phone{
			border-bottom: 1rpx solid #DDDDDD;
			padding-bottom: 28rpx;
			box-sizing: border-box;
		}
		.ForgetPassWord-yzm{
			width: 100%;
			padding-top: 42rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.ForgetPassWord-yzm-box{
				flex: 1;
				border-bottom: 1rpx solid #DDDDDD;
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
		.ForgetPassWord-newPwd{
			border-bottom: 1rpx solid #DDDDDD;
			padding-bottom: 28rpx;
			padding-top: 48rpx;
			box-sizing: border-box;
		}
		.submit-button{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			margin: 0 auto;
			margin-top: 174rpx;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			box-sizing: border-box;
		}
	}
</style>
