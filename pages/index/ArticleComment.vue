<template>
	<view class="ArticleComment">
		<view class="ArticleComment-header">
			<view class="ArticleComment-header-left">
				<image src="../../static/logo.png" mode="aspectFill" class="avatar"></image>
			</view>
			
			<view class="ArticleComment-header-right">
				<view class="ArticleComment-header-right-user">
					<view class="user-name">黑胡椒</view>
					<view class="user-level">Lv.1</view>
					<view class="user-bozhu">房产板块版主</view>
				</view>
				<view class="ArticleComment-header-right-timer">2020年05月28日 00:07</view>
				<view class="ArticleComment-header-right-main">置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分</view>
			</view>
		</view>
		<view class="ArticleComment-center">
			<view class="ArticleComment-center-title">最新回复</view>
			<view class="ArticleComment-center-main">
				<view class="ArticleComment-center-main-item" v-for="(item, index) in 10" :key = "index">
					<view class="ArticleComment-header-left">
						<image src="../../static/logo.png" mode="aspectFill" class="avatar"></image>
					</view>
					
					<view class="ArticleComment-header-right">
						<view class="ArticleComment-header-right-user">
							<view class="user-name">黑胡椒</view>
							<view class="user-level">Lv.1</view>
						</view>
						<view class="ArticleComment-header-right-timer">2020年05月28日 00:07</view>
						<view class="ArticleComment-header-right-main">置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分</view>
					</view>
				</view>
			
			</view>
		</view>
		<view class="ArticleComment-submit">
			<view class="ArticleComment-submit-left">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="ArticleComment-submit-right">
				<input type="text"  placeholder="请输入回复内容" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A9A9A9;letter-spacing: -0.34px;"/>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.ArticleComment{
		.ArticleComment-header{
			width: 100%;
			padding-top: 24rpx;
			padding-right: 34rpx;
			padding-bottom: 24rpx;
			padding-left: 32rpx;
			box-sizing: border-box;
			display: flex;
			border-bottom: 16rpx solid #f4f4f4;
			box-sizing: border-box;
			.ArticleComment-header-left{
				.avatar{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
			}
			
			.ArticleComment-header-right{
				padding-left: 32rpx;
				box-sizing: border-box;
				.ArticleComment-header-right-user{
					display: flex;
					align-items: center;
					.user-name{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
					}
					.user-level{
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #FF7B30;
						letter-spacing: -0.24px;
						background: #FFFFFF;
						border: 1px solid #FF7B30;
						border-radius: 1px;
						padding: 0 6rpx;
					
						margin: 0 16rpx;
						box-sizing: border-box;
					}
					.user-bozhu{
						font-family: PingFangSC-Medium;
						font-size: 8px;
						color: #FFFFFF;
						letter-spacing: -0.19px;
						padding: 0 10rpx;
						background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
						border-radius: 1px;
						box-sizing: border-box;
					}
				}
				.ArticleComment-header-right-timer{
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #686868;
					letter-spacing: -0.24px;
					padding-top: 8rpx;
					padding-bottom: 4rpx;
					box-sizing: border-box;
				}
				.ArticleComment-header-right-main{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
			}
		
		}
		.ArticleComment-center{
			padding-bottom: 120rpx;
			.ArticleComment-center-title{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #3F3F3F;
				letter-spacing: -0.39px;
				padding-top: 24rpx;
				padding-left: 32rpx;
				font-weight: bold;
				box-sizing: border-box;
			}
			.ArticleComment-center-main{
				.ArticleComment-center-main-item{
					padding: 20rpx 32rpx;
					box-sizing: border-box;
					border-bottom: 6rpx solid #f4f4f4;
					display: flex;
					&:last-child{
						border: none;
					}
					.ArticleComment-header-left{
						.avatar{
							width: 92rpx;
							height: 92rpx;
							border-radius: 50%;
						}
					}
					
					.ArticleComment-header-right{
						padding-left: 32rpx;
						box-sizing: border-box;
						.ArticleComment-header-right-user{
							display: flex;
							align-items: center;
							.user-name{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #141414;
								letter-spacing: -0.34px;
							}
							.user-level{
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #FF7B30;
								letter-spacing: -0.24px;
								background: #FFFFFF;
								border: 1px solid #FF7B30;
								border-radius: 1px;
								padding: 0 6rpx;
							
								margin: 0 16rpx;
								box-sizing: border-box;
							}
							.user-bozhu{
								font-family: PingFangSC-Medium;
								font-size: 8px;
								color: #FFFFFF;
								letter-spacing: -0.19px;
								padding: 0 10rpx;
								background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
								border-radius: 1px;
								box-sizing: border-box;
							}
						}
						.ArticleComment-header-right-timer{
							font-family: PingFangSC-Regular;
							font-size: 10px;
							color: #686868;
							letter-spacing: -0.24px;
							padding-top: 8rpx;
							padding-bottom: 4rpx;
							box-sizing: border-box;
						}
						.ArticleComment-header-right-main{
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
						}
					}
							
				}
			}
		}
		.ArticleComment-submit{
			width: 100%;
			height: 108rpx;
			display: flex;
			align-items: center;
			padding-left: 32rpx;
			padding-right: 34rpx;
			background-color: #fff;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			z-index: 999;
			.ArticleComment-submit-left{
				padding-right: 12rpx;
				box-sizing: border-box;
				image{
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
				}
			}
			.ArticleComment-submit-right{
				flex: 1;
				padding: 12rpx 32rpx;
				box-sizing: border-box;
				background: #EFEFEF;
				border-radius: 17px;
			}
		}
	}

</style>
