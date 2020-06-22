<template>
	<view class="comment">
		<view class="comment-item" v-for="(item, index) in 4" :key = "index">
			<view class="avatar">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			
			<view class="comment-item-right">
				<view class="comment-item-right-top">
					<view class="comment-item-right-top-left">
						<view class="comment-item-right-top-left-t">
							<view class="comment-item-right-top-left-t-name">黑胡椒</view>
							<view class="comment-item-right-top-left-t-level">Lv.1</view>
						</view>
						<view class="comment-item-right-top-left-b">2020年05月28日 00:07</view>
					</view>
					<view class="comment-item-right-top-right">
						<image src="../../static/image/ych/index/delete.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="comment-item-right-center">置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发</view>
				<view class="comment-item-right-footer">2020年旅游业该何去何从</view>
					
				
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.comment{
		padding-bottom: 30rpx;
		box-sizing: border-box;
		.comment-item{
			display: flex;
			// align-items: center;
			justify-content: space-between;
			padding: 28rpx 34rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #F4F4F4;
			&:last-child{
				border-bottom: 0;
			}
			.avatar{
				
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
			}
			.comment-item-right{
				padding-left: 32rpx;
				box-sizing: border-box;
				.comment-item-right-top{
					display: flex;
					justify-content: space-between;
					// align-items: center;
					.comment-item-right-top-left{
						.comment-item-right-top-left-t{
							display: flex;
							align-items: center;
							.comment-item-right-top-left-t-name{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #141414;
								letter-spacing: -0.34px;
							}
							.comment-item-right-top-left-t-level{
								margin-left: 16rpx;
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #FF7B30;
								letter-spacing: -0.24px;
								background: #FFFFFF;
								border: 1px solid #FF7B30;
								border-radius: 1px;
								padding: 0 4rpx;
								box-sizing: border-box;
							}
						}
						.comment-item-right-top-left-b{
							font-family: PingFangSC-Regular;
							font-size: 10px;
							color: #686868;
							letter-spacing: -0.24px;
						}
					}
					.comment-item-right-top-right{
						image{
							width: 32rpx;
							height: 32rpx;
						}
					}
				
				
				}
				.comment-item-right-center{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
				.comment-item-right-footer{
					// width: 560rpx;
					// height: 80rpx;
					background: #EFEFEF;
					border-radius: 5px;
					overflow: hidden;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding: 18rpx 22rpx;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
