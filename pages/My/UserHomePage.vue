<template>
	<view class="userhome-page">
		<view class="userhome-page-header">
			<view class="user-avatar">
				<image src="../../static/logo.png" mode="aspectFill" class="avatar"></image>
				<image src="../../static/image/ych/my/22.png" mode="aspectFill" class="renzhen"></image>
			</view>
			<view class="user-info">
				<view class="user-info-name">王大锤</view>
				<view class="user-info-sex">
					<image src="../../static/image/ych/my/1.png" mode="aspectFill"></image>
					<!-- <image src="../../static/image/ych/my/2.png" mode="aspectFill"></image> -->
				</view>
				<view class="user-info-level">Lv.1</view>
			</view>
			<view class="count">
				<view class="count-left">
					<view class="count-left-name">关注</view>
					<view class="count-left-num">0</view>
				</view>
				<view class="count-left">
					<view class="count-left-name">粉丝</view>
					<view class="count-left-num">0</view>
				</view>
			</view>
			<view class="sign">还没有个性签名，快去编辑吧！</view>
		</view>
		<view class="userhome-page-center">
			<view class="userhome-page-center-title">全部帖子（25）</view>
			<view class="tiezi-item" v-for="(item, index) in 10" :key = "index">
				<view class="tiezi-item-header">
					<view class="tiezi-item-header-left">
						<image src="../../static/logo.png" mode="aspectFill"></image>
						<view class="tiezi-item-header-right">
							<view class="tiezi-item-header-right-top">黑胡椒</view>
							<view class="tiezi-item-header-right-bottom">2020年05月28日 00:07</view>
						</view>
					</view>
					<view class="tiezi-item-header-r">
						<image src="../../static/image/ych/index/delete.png" mode="aspectFill"></image>
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
		<view class="userhome-page-button">
			<view class="userhome-page-button-item">
				<image src="../../static/image/ych/index/22.png" mode="aspectFill"></image>
				<view class="userhome-page-button-item-text">关注</view>
			</view>
			<view class="userhome-page-button-item" @click="goToChat">
				<view class="userhome-page-button-item-right">私信</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			if (type == 0) {
				this.initMyArtilce()
			}
		},
		data () {
			return {
				type: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true
			}
		},
		methods: {
			// 去私信
			goToChat () {
				uni.navigateTo({
					url: '../Chat/Chat'
				})
			},
			// 我的帖子
			async initMyArtilce () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.myArticle, {pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				console.log(res)
			}
		}
	}
</script>

<style lang="less">
	.userhome-page{
		padding-bottom: 90rpx;
		.userhome-page-header{
			width: 100%;
			height: 456rpx;
			background-image: url(../../static/image/ych/my/28.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.user-avatar{
				position: relative;
				.avatar{
					width: 142rpx;
					height: 142rpx;
					border-radius: 50%;
				}
				.renzhen{
					width: 26rpx;
					height: 26rpx;
					position: absolute;
					right: 20rpx;
					bottom: 10rpx;
				}
			}
			.user-info{
				width: 100%;
				display: flex;
				// justify-content: center;
				padding-left: 336rpx;
				
				align-items: center;
				// padding-top: 18rpx;
				padding-bottom: 14rpx;
				box-sizing: border-box;
				.user-info-name{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #000000;
					letter-spacing: -0.34px;
					font-weight: bold;
				}
				.user-info-sex{
					margin: 0 6rpx;
					box-sizing: border-box;
					image{
						width: 32rpx;
						height: 32rpx;
						vertical-align: bottom;
					}
				}
				.user-info-level{
					font-family: PingFangSC-Medium;
					font-size: 10px;
					color: #FF7B30;
					letter-spacing: -0.24px;
					border: 1px solid #FF7B30;
					border-radius: 1px;
					padding: 0 2rpx;
					box-sizing: border-box;
				}
			}
			.count{
				width: 100%;
				padding-left: 270rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.count-left{
					display: flex;
					align-items: center;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #141414;
					letter-spacing: -0.29px;
					&:nth-child(2){
						padding-left: 72rpx;
						box-sizing: border-box;
					}
					.count-left-name{
						padding-right: 10rpx;
						box-sizing: border-box;
					}
				}
			}
			.sign{
				width: 100%;
				padding: 0 30rpx;
				font-family: PingFangSC-Regular;
				font-size: 12px;
				color: #6A6A6A;
				letter-spacing: -0.29px;
				padding-top: 14rpx;
				text-align: center;
				display: -webkit-box;    
				-webkit-box-orient: vertical;    
				-webkit-line-clamp: 1;    //控制行数
				overflow: hidden;
			}
		}
		.userhome-page-center{
			.userhome-page-center-title{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #3F3F3F;
				letter-spacing: -0.39px;
				height: 86rpx;
				line-height: 86rpx;
				padding-left: 32rpx;
				border-bottom: 1rpx solid #f4f4f4;
			}
			.tiezi-item{
				padding-top: 14rpx;
				box-sizing: border-box;
				border-bottom: 6rpx solid #f4f4f4;
				// &:last-child{
				// 	border: none;
				// }
				.tiezi-item-header{
					padding-left: 32rpx;
					padding-right: 32rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-bottom: 14rpx;
					box-sizing: border-box;
					image{
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}
					.tiezi-item-header-left{
						display: flex;
						align-items: center;
					}
					.tiezi-item-header-r{
						image{
							width: 32rpx;
							height: 32rpx;
						}
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
		.userhome-page-button{
			width: 100%;
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			background-color: #fff;
			.userhome-page-button-item{
				width: 50%;
				height: 86rpx;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 20rpx;
					height: 20rpx;
				}
				&:nth-child(1){
					border-right: 1rpx solid #f4f4f4;
				}
				.userhome-page-button-item-text{
					
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: -0.34px;
				}
				.userhome-page-button-item-right{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #3F3F3F;
					letter-spacing: -0.34px;
				}
			}
		}
	}
</style>
