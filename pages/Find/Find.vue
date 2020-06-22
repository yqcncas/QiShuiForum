<template>
	<view class="find">
		<view class="find-header">
			<image src="../../static/logo.png" mode="aspectFill"></image>
			<view class="find-header-bottom" @click="goToHistory">
				<view class="find-header-bottom-left">
					<image src="../../static/image/ych/my/24.png" mode=""></image>
					<view>推荐活动</view>
				</view>
				<view class="find-header-bottom-right" >
					<view>全部</view>
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	
		<view class="find-main">
			<view class="find-main-item" v-for="(item, index) in 6" :key = "index" @click="goToFindDetail">
				<view class="line-3"></view>
				<view class="find-main-item-header">
					<view class="find-main-item-header-top">活动名称</view>
					<view class="find-main-item-header-bottom">活动时间：2020.02.02-2020.06.02</view>
				</view>
				<view class="find-main-item-center">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="find-main-item-bottom">
					<view class="find-main-item-bottom-left">
						<view class="find-main-item-bottom-left-hot">火热进行中</view>
						<view class="find-main-item-bottom-left-num">555人感兴趣</view>
					</view>
					<view class="find-main-item-bottom-right">立即参加</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
		},
		data() {
			return {
			
			}
		},
		methods: {
			// 详情
			goToFindDetail () {
				uni.navigateTo({
					url: './FindDetail'
				})
			},
			// 全部活动
			goToHistory () {
				uni.navigateTo({
					url: './historyFind'
				})
			}
		}
	}
</script>

<style lang="less" >
	page::after{
		display: none;
	}
.find{
	padding-bottom: 30rpx;
	.find-header{
		image{
			width: 100%;
			height: 320rpx;
		}
		.find-header-bottom{
			height: 86rpx;
			padding-left: 38rpx;
			padding-right: 32rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.find-header-bottom-left{
				display: flex;
				align-items: center;
				image{
					width: 28rpx;
					height: 28rpx;
				}
				view{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					text-align: justify;
					font-weight: bold;
					padding-left: 10rpx;
					box-sizing: border-box;
				}
			}
			.find-header-bottom-right{
				display: flex;
				align-items: center;
				view{
					font-family: PingFangSC-Medium;
					font-size: 12px;
					color: #545454;
					letter-spacing: -0.29px;
					text-align: justify;
					padding-right: 20rpx;
					box-sizing: border-box;
				}
				image{
					width: 16rpx;
					height: 28rpx;
				}
			}
		}
	}
	.find-main{
		.find-main-item{
			// padding-top: 10rpx;
			// padding-bottom: 16rpx;
			// padding: 10rpx 30rpx 16rpx 36rpx;
			box-sizing: border-box;
			.find-main-item-header{
				padding-top: 10rpx;
				padding-left:  36rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				.find-main-item-header-top{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					text-align: justify;
					font-weight: bold;
				}
				.find-main-item-header-bottom{
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #686868;
					letter-spacing: -0.24px;
					text-align: justify;
				}
			}
			.find-main-item-center{
				padding-left:  36rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				image{
					width: 684rpx;
					height: 374rpx;
				}
			}
			.find-main-item-bottom{
				padding-left:  36rpx;
				padding-right: 30rpx;
				padding-bottom: 16rpx;
				box-sizing: border-box;
				width: 100%;
				height: 92rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.find-main-item-bottom-left{
					display: flex;
					align-items: center;
					.find-main-item-bottom-left-hot{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #FE1818;
						letter-spacing: -0.29px;
					}
					.find-main-item-bottom-left-num{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #232323;
						letter-spacing: -0.29px;
						text-align: justify;
						padding-left: 14rpx;
						box-sizing: border-box;
						font-weight: bold;
					}
				}
				.find-main-item-bottom-right{
					width: 230rpx;
					height: 62rpx;
					line-height: 62rpx;
					text-align: center;
					font-family: PingFangSC-Medium;
					font-size: 12px;
					color: #FFFFFF;
					letter-spacing: -0.29px;
					background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
					border-radius: 4px;
				}
			}
		}
	}
}
</style>