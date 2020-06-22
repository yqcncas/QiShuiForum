<template>
	<view class="FindDetail">
		<view class="FindDetail-header">
			<view class="FindDetail-header-top">活动名称</view>
			<view class="FindDetail-header-bottom">活动时间：2020.02.02-2020.06.02</view>
		</view>
		<view class="FindDetail-main">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="FindDetail-center">
			<scroll-view scroll-y="true" style="height: 700rpx;">
				<view class="FindDetail-center-text">来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！
				
				</view>
			</scroll-view>
		</view>
		<view class="join-button" @click="goToApply">立即参加</view>
	</view>
</template>

<script>
	export default {
		onNavigationBarButtonTap () {
			console.log('分享按钮')
		},
		methods: {
			goToApply () {
				uni.navigateTo({
					url: './Apply'
				})
			}
		}
	}
</script>

<style lang="less">
	.FindDetail{
		padding-top: 32rpx;
		padding-left: 36rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		.FindDetail-header{
			.FindDetail-header-top{
				width: 640rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
				text-align: justify;
				font-weight: bold;
			}
			.FindDetail-header-bottom{
				font-family: PingFangSC-Regular;
				font-size: 10px;
				color: #686868;
				letter-spacing: -0.24px;
			}
		}
		.FindDetail-main{
			padding-top: 14rpx;
			padding-bottom: 14rpx;
			box-sizing: border-box;
			image{
				width: 684rpx;
				height: 374rpx;
			}
		}
		.FindDetail-center{
			.FindDetail-center-text{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
		}
		.join-button{
			width: 604rpx;
			height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			overflow: hidden;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			line-height: 102rpx;
			margin: 0 auto;
			margin-top: 30rpx;
			box-sizing: border-box;
		}
	}
</style>
