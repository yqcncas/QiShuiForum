<template>
	<view class="SettledEnterprise">
		<view class="SettledEnterprise-header">
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">申请人姓名*</view>
				<input type="text" v-model="userName" placeholder="请输入您的姓名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">联系电话*</view>
				<input type="number" maxlength="11" v-model="userPhone" placeholder="请输入您的联系电话" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">商家名称*</view>
				<input type="text" v-model="shopName" placeholder="请填写商家名称" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">身份证号*</view>
				<input type="text" v-model="idCard" placeholder="请填写身份证号" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">联系地址*</view>
				<input type="text" v-model="address" placeholder="请填写联系地址" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
		</view>
		<view class="id-card">
			<view class="id-card-top">身份证正反面*</view>
			<view class="id-imgbox">
				<image src="../../static/image/ych/Advertising/1.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="zhizhao">
			<view class="zhizhao-top">营业执照*</view>
			<view class="zhizhao-imgbox">
				<image src="../../static/image/ych/Advertising/1.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="result">
			<view class="result-top">审核状态：<span>不通过</span></view>
			<view class="result-bottom">原因：信息有误</view>
		</view>
		<view class="submit-form" @click="submitForm">提交</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				userName: '',
				userPhone: '',
				shopName: '',
				idCard: '',
				address: ''
			}
		},
		methods: {
			submitForm () {
				if (!this.$u.test.mobile(this.userPhone)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查手机号输入是否正确'
					})
				}
				if (!this.$u.test.idCard(this.idCard)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查身份证号输入是否正确'
					})
				}
				if (this.userName.trim() == '' || this.shopName.trim() == '' || this.address.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请检查信息是否填写完整'
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.SettledEnterprise{
		padding-bottom: 30rpx;
		box-sizing: border-box;
		.SettledEnterprise-header{
			padding-bottom: 26rpx;
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.SettledEnterprise-item{
				width: 100%;
				padding: 0 36rpx;
				padding-top: 56rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				&:nth-child(1){
					padding-top: 26rpx;
				}
				.SettledEnterprise-item-left{
					width: 200rpx;
				}
				input{
					flex: 1;
					font-size: 14px;
				}
			}
		}
		.id-card{
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.id-card-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-top: 36rpx;
				padding-left: 36rpx;
				padding-right: 36rpx;
				padding-bottom: 24rpx;
				box-sizing: border-box;
			}
			.id-imgbox{
				padding-left: 36rpx;
				padding-bottom: 46rpx;
				padding-right: 72rpx;
				box-sizing: border-box;
				image{
					width: 178rpx;
					height: 222rpx;
				}
			}
		}
		.zhizhao{
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.zhizhao-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-top: 36rpx;
				padding-left: 36rpx;
				padding-right: 36rpx;
				padding-bottom: 24rpx;
				box-sizing: border-box;
			}
			.zhizhao-imgbox{
				padding-left: 36rpx;
				padding-bottom: 46rpx;
				padding-right: 72rpx;
				box-sizing: border-box;
				image{
					width: 178rpx;
					height: 222rpx;
				}
			}
		}
		.result{
			padding-top: 36rpx;
			padding-left: 24rpx;
			box-sizing: border-box;
			.result-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				span{
					color: #FF0000;
				}
			}
			.result-bottom{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
		}
		.submit-form{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			margin: 0 auto;
			margin-top: 68rpx;
		}
	}
</style>
