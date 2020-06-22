<template>
	<view class="apply">
		<view class="apply-header">
			<view class="apply-header-top">活动名称</view>
			<view class="apply-header-bottom">活动时间：2020.02.02-2020.06.02</view>
		</view>
		<view class="line-3"></view>
		<view class="apply-form">
			<view class="apply-form-top">
				<view class="apply-form-top-left">姓名*</view>
				<view class="apply-form-top-right">
					<input type="text" v-model="userName" placeholder="请输入您的姓名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;letter-spacing: -0.34px;" />
				</view>
			</view>
			<view class="apply-form-bottom">
				<view class="apply-form-top-left">联系电话*</view>
				<view class="apply-form-top-right">
					<input type="number" maxlength="11"  v-model="userPhone" placeholder="请输入您的姓名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;letter-spacing: -0.34px;" />
				</view>
			</view>
			<view class="line-3"></view>
		</view>
		<view class="submit-button" @click="submitForm">提交</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				userName: '',
				userPhone: '',
			}
		},
		methods: {
			submitForm () {
				if (!this.$u.test.mobile(this.userPhone)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查手机号是否正确'
					})
				}
				
				if (!this.$u.test.chinese(this.userName)) {
					return uni.showToast({
						icon: 'none',
						title: '姓名请填写汉字'
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.apply{
		.apply-header{
			padding-top: 32rpx;
			padding-left: 34rpx;
			padding-bottom: 28rpx;
			box-sizing: border-box;
			.apply-header-top{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
				font-weight: bold;
			}
			.apply-header-bottom{
				font-family: PingFangSC-Regular;
				font-size: 10px;
				color: #686868;
				letter-spacing: -0.24px;
			}
		}
		.apply-form{
			padding-top: 22rpx;
			box-sizing: border-box;
			.apply-form-top, .apply-form-bottom{
				
				display: flex;
				align-items: center;
				padding-left: 36rpx;
				box-sizing: border-box;
				.apply-form-top-right{
					padding-left: 42rpx;
					box-sizing: border-box;
					flex: 1;
				}
				.apply-form-top-left{
					width: 130rpx;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
			}
			.apply-form-bottom{
				padding-top: 56rpx;
				padding-bottom: 22rpx;
				box-sizing: border-box;
			}
		}
		.submit-button{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
