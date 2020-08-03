<template>
	<view class="changePwd">
		<view class="changePwd-title">修改登录密码</view>
		<view class="changePwd-item">
			<view class="changePwd-item-left">原密码*</view>
			<input type="password" v-model="pwd" placeholder="请输入原密码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
		</view>
		<view class="changePwd-item">
			<view class="changePwd-item-left">新密码*</view>
			<input type="password" v-model="newPwd" placeholder="请输入新密码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
		</view>
		<view class="changePwd-item">
			<view class="changePwd-item-left">确认密码*</view>
			<input type="password" v-model="againPwd" placeholder="请再一次输入新密码" placeholder-style="font-family: PingFangSC-Regular;font-size: 16px;color: #C3C3C3;letter-spacing: 0.06px;" />
		</view>
		
		<view class="submit-button" @click="submitPwd">提交</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				pwd: '',
				newPwd: '',
				againPwd: ''
			}
		},
		methods: {
			async submitPwd () {
				if (this.pwd.trim() == '' || this.newPwd.trim() == '' || this.againPwd.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请检查信息是否填写完整'
					})
				}
				if (this.newPwd != this.againPwd) {
					return uni.showToast({
						icon: 'none',
						title: '两次输入的密码不一致'
					})
				}
				let res = await this.$fetch(this.$api.upd_pwd, {newPwd: this.newPwd, pwd: this.pwd}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
			}
		}
	}
</script>

<style lang="less">
	.changePwd{
		.changePwd-title{
			padding-top: 50rpx;
			padding-left: 30rpx;
			padding-bottom: 10rpx;
			box-sizing: border-box;
			font-family: PingFangSC-Medium;
			font-size: 18px;
			color: #212121;
			letter-spacing: 0.07px;
		}
		.changePwd-item{
			padding-top: 20rpx;
			padding-left: 32rpx;
			padding-right: 32rpx;
			padding-bottom: 18rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #f4f4f4;
			.changePwd-item-left{
				width: 182rpx;
				input{
					flex: 1;
				}
			}
		}
		.submit-button{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
