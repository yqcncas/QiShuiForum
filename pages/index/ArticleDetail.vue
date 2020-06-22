<template>
	<view class="ArticleDetail">
		<Status></Status>
		<view class="ArticleDetail-title">
			<view class="back-img" @click="goBack">
				<image src="../../static/image/ych/back.png" mode="aspectFill" class="back"></image>
			</view>
			
			<view class="ArticleDetail-title-center">正文</view>
			<image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like"></image>
			<!-- <image src="../../static/image/ych/index/21.png" mode="aspectFill" class="more"></image> -->
		</view>
		<view class="ArticleDetail-center">
			<view class="ArticleDetail-center-top">
				<view class="ArticleDetail-center-top-left">
					<image src="../../static/logo.png" mode="aspectFill"></image>
					<view class="userInfo">
						<view class="userInfo-top">
							<view class="userInfo-top-name">黑胡椒</view>
							<view class="userInfo-top-level">Lv.1</view>
							<view class="userInfo-top-bozhu">房产板块版主</view>
						</view>
						<view class="userInfo-bottom">2020年05月28日 00:07</view>
					</view>
				</view>
				<view class="ArticleDetail-center-top-right">
					<image src="../../static/image/ych/index/22.png" mode=""></image>
					<view class="ArticleDetail-center-top-right-text">关注</view>
				</view>
			</view>
			<view class="ArticleDetail-center-main">
				<view class="ArticleDetail-center-main-title">2020年旅游业该何去何从</view>
				<view class="ArticleDetail-center-main-center">2020年旅游业该何去何从</view>
				<view class="ArticleDetail-center-main-img-box">
					<image src="../../static/logo.png" mode="aspectFill"></image>
					<image src="../../static/logo.png" mode="aspectFill"></image>
					<image src="../../static/logo.png" mode="aspectFill"></image>
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="ArticleDetail-center-main-footer">8.8w阅读量</view>
			</view>
		</view>
		<view class="ArticleDetail-footer">
			<view class="ArticleDetail-footer-top" :class="{stick: stickFlag}">
				<view class="ArticleDetail-footer-top-item" :class="{active:tabIndex == 0}" @click="handleTabIndex(0)">最新回复</view>
				<view class="ArticleDetail-footer-top-item" :class="{active:tabIndex == 1}" @click="handleTabIndex(1)">热门评论</view>
			</view>
			<view class="ArticleDetail-footer-main">
				<view class="ArticleDetail-footer-main-item" v-for="(item, index) in 4" :key = "index" @click="goToArticleComment">
					<view class="ArticleDetail-footer-main-item-user">
						<view class="ArticleDetail-center-top">
							<view class="ArticleDetail-center-top-left">
								<image src="../../static/logo.png" mode="aspectFill"></image>
								<view class="userInfo">
									<view class="userInfo-top">
										<view class="userInfo-top-name">黑胡椒</view>
										<view class="userInfo-top-level">Lv.1</view>
										<view class="userInfo-top-bozhu">房产板块版主</view>
									</view>
									<view class="userInfo-bottom">2020年05月28日 00:07</view>
								</view>
							</view>
						</view>
						<view class="ArticleDetail-footer-main-center">
							置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享置顶沙发置顶沙发感谢分享
						</view>
						<view class="ArticleDetail-footer-main-footer">
							<view class="ArticleDetail-footer-main-footer-item">白胡椒：楼主说的好</view>
							<view class="ArticleDetail-footer-main-footer-item">白胡椒：楼主说的好</view>
							<view class="ArticleDetail-footer-main-footer-item-button">共10条回复></view>
						</view>
						<view class="chat-img">
							<image src="../../static/image/ych/index/23.png" mode=""></image>
						</view>
					</view>
					<view class="ArticleDetail-footer-main-item-advertising" v-if="index == 3">
						<view class="ArticleDetail-footer-main-item-advertising-top">
							<view class="ArticleDetail-footer-main-item-advertising-top-left">胡记核桃</view>
							<view class="ArticleDetail-footer-main-item-advertising-top-right">广告</view>
						</view>
						<view class="ArticleDetail-footer-main-item-advertising-center">
							<image src="../../static/logo.png" mode="aspectFill"></image>
							<image src="../../static/logo.png" mode="aspectFill"></image>
							<image src="../../static/logo.png" mode="aspectFill"></image>
							<image src="../../static/logo.png" mode="aspectFill"></image>
						</view>
						<view class="ArticleDetail-footer-main-item-advertising-footer">来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！</view>
						
					</view>
					
				
				</view>
			</view>
		
			
		</view>
		<view class="ArticleDetail-submit">
			<view class="ArticleDetail-submit-left">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="ArticleDetail-submit-center">
				<input type="text" placeholder="我来说两句" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A9A9A9;" />
			</view>
			<view class="ArticleDetail-submit-right-chat">
				<image src="../../static/image/ych/index/23.png" mode="aspectFill"></image>
				<view class="ArticleDetail-submit-right-chat-number">222</view>
			</view>
			<view class="ArticleDetail-submit-right-share">
				<image src="../../static/image/ych/my/23.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				tabIndex: 0,
				footTop: 0,
				stickFlag: false
			}
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.ArticleDetail-footer-top').boundingClientRect(data => {
			  console.log("得到布局位置信息" + JSON.stringify(data));
			  console.log("节点离页面顶部的距离为" + data.top);
			  this.footTop = data.top
			  
			}).exec();
		},
		onPageScroll (e) {
			// console.log(e)
			if (e.scrollTop >= this.footTop) {
				this.stickFlag = true
			} else {
				this.stickFlag = false
			}
		},
		methods: {
			handleTabIndex (index) {
				this.tabIndex = index
			},
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			goToArticleComment () {
				uni.navigateTo({
					url: './ArticleComment'
				})
			}
 		}
	}
</script>

<style lang="less">
	.ArticleDetail{
		width: 100%;
		.ArticleDetail-title{
			// height: 86rpx;
			width: 100%;
			padding-left: 40rpx;
			padding-right: 36rpx;
			box-sizing: border-box;
			padding-top: var(--status-bar-height);
			display: flex;
			align-items: center;
			.back-img{
				position: relative;
				&::after{
					position: absolute;
					content: '';
					left: -20rpx;
					top: -20rpx;
					right: -20rpx;
					bottom: -20rpx;
				}
				.back{
					width: 18rpx;
					height: 34rpx;
				}
			}
			
			.ArticleDetail-title-center{
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #242424;
				letter-spacing: 0.07px;
				padding-left: 280rpx;
				padding-right: 256rpx;
				box-sizing: border-box;
			}
			.like{
				width: 44rpx;
				height: 44rpx;
			}
	
		}
		.ArticleDetail-center{
			.ArticleDetail-center-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 16rpx;
				padding-right: 34rpx;
				padding-bottom: 18rpx;
				padding-left: 32rpx;
				box-sizing: border-box;
				.ArticleDetail-center-top-left{
					display: flex;
					align-items: center;
					image{
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}
					.userInfo{
						padding-left: 32rpx;
						box-sizing: border-box;
						.userInfo-top{
							display: flex;
							align-items: center;
							padding-bottom: 8rpx;
							box-sizing: border-box;
							.userInfo-top-name{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #141414;
								letter-spacing: -0.34px;
							}
							.userInfo-top-level{
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #FF7B30;
								letter-spacing: -0.24px;
								background: #FFFFFF;
								border: 1px solid #FF7B30;
								border-radius: 1px;
								padding: 0 6rpx;
								box-sizing: border-box;
								margin: 0 16rpx;
							}
							.userInfo-top-bozhu{
								padding: 0 10rpx;
								box-sizing: border-box;
								background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
								border-radius: 1px;
								font-family: PingFangSC-Medium;
								font-size: 8px;
								color: #FFFFFF;
								letter-spacing: -0.19px;
							}
						}
						.userInfo-bottom{
							font-family: PingFangSC-Regular;
							font-size: 10px;
							color: #686868;
							letter-spacing: -0.24px;
						}
					}
				}
				.ArticleDetail-center-top-right{
					height: 40rpx;
					padding: 0 14rpx;
					box-sizing: border-box;
					background: #FFFFFF;
					border: 1px solid #FF7B30;
					border-radius: 10px;
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
					}
					.ArticleDetail-center-top-right-text{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #FF7B30;
						letter-spacing: -0.34px;
						padding-left: 6rpx;
						box-sizing: border-box;
					}
				}
			}
			.ArticleDetail-center-main{
				padding-left: 36rpx;
				padding-right: 34rpx;
				padding-bottom: 30rpx;
				box-sizing: border-box;
				.ArticleDetail-center-main-title{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					font-weight: bold;
				}
				.ArticleDetail-center-main-center{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
				.ArticleDetail-center-main-img-box{
					padding-top: 10rpx;
					display: flex;
					flex-wrap: wrap;
					image{
						width: 216rpx;
						height: 216rpx;
						margin-right: 16rpx;
						margin-top: 10rpx;
						box-sizing: border-box;
						
						&:nth-child(3n){
							margin-right: 0;
						}
						&:nth-child(1){
							margin-top: 0;
						}
						&:nth-child(2){
							margin-top: 0;
						}
						&:nth-child(3){
							margin-top: 0;
						}
					}
				}
				.ArticleDetail-center-main-footer{
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #686868;
					letter-spacing: -0.24px;
					text-align: end;
				}
			}
		}
		.ArticleDetail-footer{
			padding-bottom: 120rpx;
			box-sizing: border-box;
			.ArticleDetail-footer-top{
				width: 100%;
				height: 82rpx;
				display: flex;
				align-items: center;
				border-top: 1rpx solid #F4F4F4;
				border-bottom: 10rpx solid #f4f4f4;
				box-sizing: border-box;
				background-color: #fff;
				transition: .3s;
				
				&.stick{
					position:sticky;
					top: var(--status-bar-height);
					background-color: #fff;
					border-bottom: 0;
					z-index: 99;
				}
				.ArticleDetail-footer-top-item{
					width: 50%;
					text-align: center;
					line-height: 82rpx;
					border-right: 1rpx solid #F4F4F4;
					box-sizing: border-box;
					position: relative;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #3F3F3F;
					&::after{
						content: '';
						width: 0;
						height: 0;
						position: absolute;
						left: 50%;
						bottom: 15rpx;
						transform: translateX(-50%);
						border-bottom: 6rpx solid #FF682D;
						transition: all .3s;
					}
					&.active{
						color: #FF682D;
						&::after{
							width: 28%;
						}
					}
				}
			}
			.ArticleDetail-footer-main{
				.ArticleDetail-footer-main-item{
					border-bottom: 6rpx solid #F4F4F4;
					&:last-child{
						border-bottom: 0;
					}
				}
				.ArticleDetail-center-top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-top: 16rpx;
					padding-right: 34rpx;
					padding-bottom: 18rpx;
					padding-left: 32rpx;
					box-sizing: border-box;
					.ArticleDetail-center-top-left{
						display: flex;
						align-items: center;
						image{
							width: 92rpx;
							height: 92rpx;
							border-radius: 50%;
						}
						.userInfo{
							padding-left: 32rpx;
							box-sizing: border-box;
							.userInfo-top{
								display: flex;
								align-items: center;
								padding-bottom: 8rpx;
								box-sizing: border-box;
								.userInfo-top-name{
									font-family: PingFangSC-Medium;
									font-size: 14px;
									color: #141414;
									letter-spacing: -0.34px;
								}
								.userInfo-top-level{
									font-family: PingFangSC-Medium;
									font-size: 10px;
									color: #FF7B30;
									letter-spacing: -0.24px;
									background: #FFFFFF;
									border: 1px solid #FF7B30;
									border-radius: 1px;
									padding: 0 6rpx;
									box-sizing: border-box;
									margin: 0 16rpx;
								}
								.userInfo-top-bozhu{
									padding: 0 10rpx;
									box-sizing: border-box;
									background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
									border-radius: 1px;
									font-family: PingFangSC-Medium;
									font-size: 8px;
									color: #FFFFFF;
									letter-spacing: -0.19px;
								}
							}
							.userInfo-bottom{
								font-family: PingFangSC-Regular;
								font-size: 10px;
								color: #686868;
								letter-spacing: -0.24px;
							}
						}
					}
				}
				
				.ArticleDetail-footer-main-center{
					padding-left: 156rpx;
					padding-right: 34rpx;
				}
				.ArticleDetail-footer-main-footer{
					padding: 12rpx;
					padding-bottom: 20rpx;
					box-sizing: border-box;
					background-color: #F0F0F0;
					border-radius: 3px;
					overflow: hidden;
					margin-left: 156rpx;
					margin-right: 34rpx;
					margin-top: 16rpx;
					box-sizing: border-box;
					.ArticleDetail-footer-main-footer-item{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #141414;
						letter-spacing: -0.29px;
						padding-bottom: 10rpx;
						box-sizing: border-box;
					}
					.ArticleDetail-footer-main-footer-item-button{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #141414;
						letter-spacing: -0.29px;
						font-weight: bold;
					}
				}
			
				.ArticleDetail-footer-main-item-advertising{
					padding-top: 20rpx;
					padding-left: 36rpx;
					padding-left: 34rpx;
					padding-bottom: 26rpx;
					border-top: 14rpx solid #f4f4f4;
					box-sizing: border-box;
				
					.ArticleDetail-footer-main-item-advertising-top{
						display: flex;
						align-items: center;
						.ArticleDetail-footer-main-item-advertising-top-left{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
						}
						.ArticleDetail-footer-main-item-advertising-top-right{
							font-family: PingFangSC-Medium;
							font-size: 8px;
							color: #FF7B30;
							letter-spacing: -0.19px;
							border: 1px solid #FF7B30;
							border-radius: 1px;
							padding: 0 10rpx;
							box-sizing: border-box;
							margin-left: 16rpx;
						}
					}
					.ArticleDetail-footer-main-item-advertising-center{
						display: flex;
						flex-wrap: wrap;
						image{
							width: 216rpx;
							height: 216rpx;
							margin-right: 16rpx;
							margin-top: 20rpx;
							box-sizing: border-box;
							&:nth-child(3n){
								margin-right: 0;
							}
						}
					}
					.ArticleDetail-footer-main-item-advertising-footer{
						margin-top: 18rpx;
						box-sizing: border-box;
					}
				}
			}
			.chat-img{
				text-align: end;
				padding-right: 34rpx;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
				box-sizing: border-box;
				image{
					width: 32rpx;
					height: 32rpx;
					
				}
			}
		}	
		.ArticleDetail-submit{
			width: 100%;
			height: 108rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 32rpx;
			padding-right: 34rpx;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			background-color: #fff;
			.ArticleDetail-submit-left{
				image{
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
				}
			}
			.ArticleDetail-submit-center{
				width: 474rpx;
				// height: 100%;
				height: 68rpx;
				display: flex;
				align-items: center;
				background: #EFEFEF;
				border-radius: 17px;
				input{
					flex: 1;
					padding: 0 32rpx;
					box-sizing: border-box;
					font-size: 14px;
				}
			}
			.ArticleDetail-submit-right-chat{
				position: relative;
				image{
					width: 42rpx;
					height: 42rpx;
					
				}
				.ArticleDetail-submit-right-chat-number{
					// width: 26rpx;
					// height: 18rpx;
					position: absolute;
					right: -13rpx;
					top: -20rpx;
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #FFFFFF;
					letter-spacing: -0.17px;
					background: #FF1414;
					border-radius: 4px;
					padding: 0 2rpx;
					box-sizing: border-box;
				}
			}
			.ArticleDetail-submit-right-share{
				image{
					width: 42rpx;
					height: 42rpx;
				}
			}
		}
	}
</style>
