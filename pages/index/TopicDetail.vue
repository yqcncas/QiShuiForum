<template>
	<view class="topic-detail">
		<view class="topic-detail-header">
			<image src="../../static/logo.png" mode="aspectFill"></image>
			<view class="topic-detail-header-right">
				<view class="topic-detail-header-right-top">两会</view>
				<view class="topic-detail-header-right-bottom">8.8w条讨论</view>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="tiezi-item" v-for="(item, index) in 10" :key = "index">
			<view class="tiezi-item-header">
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<view class="tiezi-item-header-right">
					<view class="tiezi-item-header-right-top">黑胡椒</view>
					<view class="tiezi-item-header-right-bottom">2020年05月28日 00:07</view>
				</view>
			</view>
			<view class="tiezi-item-center">2020年旅游业该何去何从</view>
			<view class="tiezi-item-image-box">
				
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<image src="../../static/logo.png" mode="aspectFill"></image>
				
			</view>
			<view class="share-box">
				<view class="share-left">
					<image src="../../static/image/ych/my/23.png" mode=""></image>
					<view class="share-left-text">分享</view>
				</view>
				<view class="share-right">
					<image src="../../static/image/ych/my/6.png" mode=""></image>
					<view class="share-left-text">评论(3)</view>
				</view>
			</view>
			<!-- <view class="line-3" v-if="index != 10"></view> -->
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="less">
	.topic-detail{
		.topic-detail-header{
			// width: 100%;
			// height: 194rpx;
			padding: 0 32rpx;
			padding-top: 36rpx;
			padding-bottom: 14rpx;
			box-sizing: border-box;
			display: flex;
			// align-items: center;
			align-items: flex-end;
			image{
				width: 144rpx;
				height: 144rpx;
			}
			.topic-detail-header-right{
				height: 100%;
				padding-left: 28rpx;
				box-sizing: border-box;
				.topic-detail-header-right-top{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					font-weight: bold;
					padding-bottom: 14rpx;
					box-sizing: border-box;
				}
				.topic-detail-header-right-bottom{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #5B5B5B;
					letter-spacing: -0.34px;
				}
			}
		}
		.tiezi-item{
			padding-top: 14rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #F4F4F4;
			&:last-child{
				border-bottom: 0
			}
			.tiezi-item-header{
				padding-left: 32rpx;
				padding-right: 32rpx;
				display: flex;
				align-items: center;
				padding-bottom: 14rpx;
				box-sizing: border-box;
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
				.tiezi-item-header-right{
					padding-left: 32rpx;
					box-sizing: border-box;
					.tiezi-item-header-right-top{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
						text-align: justify;
						font-weight: bold;
					}
					.tiezi-item-header-right-bottom{
						font-family: PingFangSC-Regular;
						font-size: 10px;
						color: #686868;
						letter-spacing: -0.24px;
						text-align: justify;
					}
				}
			}
			.tiezi-item-center{
				padding-left: 32rpx;
				padding-right: 32rpx;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				text-align: justify;
			}
			.tiezi-item-image-box{
				padding-left: 32rpx;
				padding-right: 32rpx;
				padding-bottom: 34rpx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				// justify-content: space-between;
				image{
					width: 216rpx;
					height: 216rpx;
					margin-right: 16rpx;
					margin-top: 18rpx;
					box-sizing: border-box;
					&:nth-child(3n){
						margin-right: 0;
					}
				}
				
			}
			.share-box{
				width: 100%;
				height: 82rpx;
				background-color: #fff;
				display: flex;
				align-items: center;
				border-top: 1rpx solid #F4F4F4;
				.share-left, .share-right{
					width: 50%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					image{
						width: 32rpx;
						height: 32rpx;
						vertical-align: bottom;
					}
					.share-left-text{
						padding-left: 8rpx;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #3F3F3F;
						letter-spacing: -0.34px;
					}
				}
				.share-left{
					border-right: 1rpx solid #F4F4F4;
				}
			}
		}
				
	}
</style>
