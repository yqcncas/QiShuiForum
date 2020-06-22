<template>
	<view class="message">
		<view class="message-top" @click="goToComment">
			<view class="message-top-left">
				<image src="../../static/image/ych/index/17.png" mode="aspectFill"></image>
				<view class="message-top-left-text">评论</view>
			</view>
			<image src="../../static/image/ych/right.png" mode=""></image>
		</view>
		<view class="message-top">
			<view class="message-top-left">
				<image src="../../static/image/ych/index/18.png" mode="aspectFill"></image>
				<view class="message-top-left-text">@我的</view>
			</view>
			<image src="../../static/image/ych/right.png" mode=""></image>
		</view>
		<view class="message-list">
			<view class="message-list-item">
				<image src="../../static/logo.png" mode=""></image>
				<view class="message-list-right">
					<view class="message-list-right-top">黑胡椒</view>
					<view class="message-list-right-bottom">我看到了篇好文章你看</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goToComment () {
				uni.navigateTo({
					url: './Comment'
				})
			}
		}
	}
</script>

<style lang="less">
	.message{
		padding: 0 36rpx;
		box-sizing: border-box;
		.message-top{
			width: 100%;
			height: 162rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #F4F4F4;
			box-sizing: border-box;
			.message-top-left{
				display: flex;
				align-items: center;
				image{
					width: 112rpx;
					height: 112rpx;
				}
				.message-top-left-text{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					padding-left: 26rpx;
					box-sizing: border-box;
				}
				
			}
			image{
				width: 16rpx;
				height: 28rpx;
			}
		}
		.message-list{
			
			.message-list-item{
				display: flex;
				width: 100%;
				height: 162rpx;
				display: flex;
				align-items: center;
				// justify-content: space-between;
				border-bottom: 1rpx solid #F4F4F4;
				box-sizing: border-box;
				&:last-child{
					border-bottom: 0;
				}
				image{
					width: 110rpx;
					height: 110rpx;
					border-radius: 50%;
				}
				.message-list-right{
					padding-left: 20rpx;
					box-sizing: border-box;
					.message-list-right-top{
						font-family: PingFangSC-Medium;
						font-size: 16px;
						color: #141414;
						letter-spacing: -0.39px;
						font-weight: bold;
					}
					.message-list-right-bottom{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #9F9F9F;
						letter-spacing: -0.34px;
					}
				}
			}
			
		}
	}
</style>
