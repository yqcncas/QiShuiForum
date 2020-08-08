<template>
	<view class="ArticleMain ">
		<view class="ArticleMain-info">
			<!-- 数据展示 -->
			<view class="ArticleMain-info-item" v-for="(item, index) in ArticleList" :key = "index" @click="ArticleMainClick(item.id,　item.userId, item)">
				<!-- 第一条 -->
				<view class="ArticleMain-info-item-first" v-if="item.pics.length <= 1 && !item.type && !item.isGg">
					<view class="ArticleMain-info-item-first-left">
						<view class="ArticleMain-info-item-first-left-top u-skeleton-rect">
							<image src="../../static/image/huo.png" mode="aspectFill" v-if="item.isCreamFlag"></image>
							{{item.title}}
						</view>
						<view class="ArticleMain-info-item-first-left-bottom" :style="{paddingTop: item.pics.length <= 0 ? '36rpx' : '58rpx'}">
							<view class="ArticleMain-info-item-first-left-bottom-read u-skeleton-rect">{{item.browseNum}}阅读量</view>
							<view class="ArticleMain-info-item-first-left-bottom-timer u-skeleton-rect">{{item.createTime}}</view>
						</view>
					</view>
					<view class="ArticleMain-info-item-first-right" v-if="item.isVideo == 0 && item.pics.length">
						<image :src="item.pics[0]" mode="aspectFill"></image>
					</view>
					<view class="ArticleMain-info-item-first-right" v-if="item.isVideo == 1 && item.content[0].pic.length">
						<image :src="item.content[0].pic[0] + '?vframe/jpg/offset/0'" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="ArticleDetail-footer-main-item-advertising" v-if="item.isGg">
					<view class="ArticleDetail-footer-main-item-advertising-top">
						<view class="ArticleDetail-footer-main-item-advertising-top-left">{{item.title}}</view>
						<view class="ArticleDetail-footer-main-item-advertising-top-right">广告</view>
					</view>
					<view class="ArticleDetail-footer-main-item-advertising-center">
						<!-- <image :src="item.titlePic" mode="aspectFill"></image> -->
						<image :src="titlePic" v-if="i < 3" mode="aspectFill" v-for="(titlePic, i) in item.pics" :key = "i"  :class="item.pics.length > 1 ? 'ArticleDetail-footer-main-item-advertising-center-moreImg' : 'ArticleDetail-footer-main-item-advertising-center-Img'"></image>
						<!-- <image :src="titlePic" mode="aspectFill" v-for="(titlePic, i) in item.pics" :key = "i" class=""></image> -->
					</view>
					<view class="ArticleDetail-footer-main-item-advertising-footer">{{item.newcontent}}</view>
					
				</view>
				
				
				<!-- 剩余的 -->
				<view class="ArticleMain-info-item-else" v-if="item.pics.length > 1 && !item.isGg">
					<view class="ArticleMain-info-item-else-top">
					<image src="../../static/image/huo.png" mode="aspectFill" v-if="item.isCreamFlag"></image>
					{{item.title}}
					</view>
					<view class="ArticleMain-info-item-else-center"   v-if="item.pics.length">
						<image :src="itemImg" mode="aspectFill" v-for="(itemImg, i) in item.pics" :key = "i" v-if = "i < 3"></image>
					</view>
					<view class="ArticleMain-info-item-else-bottom">
						<view class="ArticleMain-info-item-else-bottom-left">{{item.browseNum}}阅读量</view>
						<view class="ArticleMain-info-item-else-bottom-right">{{item.createTime}}</view>
					</view>
				</view>
			</view>
			<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			ArticleMainClick (index, userId, item) {
				this.$emit('ArticleMainClick', index, userId, item)
			}
		},
		props:{
			ArticleList: {
				type: Array,
				default: () => [],
				redirect: true
			},
			hasFlag: {
				type: Boolean
			},
			inType: {
				
			}
		}
	}
</script>

<style lang="less">
	.ArticleMain{
		width: 100%;
		.ArticleMain-info{
			.ArticleMain-info-item{
				padding-top: 20rpx;
				padding-left: 34rpx;
				padding-right: 34rpx;
				box-sizing: border-box;
				&:last-child{
					.ArticleMain-info-item-else{
						border-bottom: 0;
						padding-bottom: 30rpx;
					}
					.ArticleMain-info-item-first{
						border: none;
					}
				}
				.ArticleMain-info-item-first{
					width: 100%;
					padding-bottom: 25rpx;
					display: flex;
					border-bottom: 1rpx solid #D8D8D8;
					box-sizing: border-box;
					.ArticleMain-info-item-first-left{
						flex: 1;
						padding-right: 22rpx;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.ArticleMain-info-item-first-left-top{
							width: 412rpx;
							font-family: PingFangSC-Medium;
							font-size: 17px;
							color: #141414;
							letter-spacing: -0.34px;
							// font-weight: bold;
							display: -webkit-box;    
							-webkit-box-orient: vertical;    
							-webkit-line-clamp: 2;    //控制行数
							overflow: hidden;
							display: flex;
							image{
								width: 32rpx;
								height: 32rpx;
								transform: translateY(4rpx);
							}
						}
						.ArticleMain-info-item-first-left-bottom{
							display: flex;
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #686868;
							letter-spacing: -0.24px;
							padding-top: 58rpx;
							box-sizing: border-box;
							justify-content: space-between;
							.ArticleMain-info-item-first-left-bottom-timer{
								padding-left: 62rpx;
								box-sizing: border-box;
							}
						}
					}
					.ArticleMain-info-item-first-right{
						width: 250rpx;
						height: 166rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			
				.ArticleMain-info-item-else{
					width: 100%;
					// padding-top: 34rpx;
					padding-bottom: 25rpx;
					border-bottom: 1rpx solid #D8D8D8;
					box-sizing: border-box;
					&:last-child{
						// border-bottom: 0;
						// padding-bottom: 30rpx;
					}
					.ArticleMain-info-item-else-top{
						font-family: PingFangSC-Medium;
						font-size: 17px;
						color: #141414;
						letter-spacing: -0.34px;
						// font-weight: bold;
						padding-bottom: 18rpx;
						box-sizing: border-box;
					}
					.ArticleMain-info-item-else-center{
						width: 100%;
						display: flex;
						// justify-content: space-between;
						flex-wrap: wrap;
						image{
							width: 216rpx;
							// flex: 1;
							// width: 216rpx;
							height: 144rpx;
							margin-right: 16rpx;
							margin-bottom: 18rpx;
							box-sizing: border-box;
							&:nth-child(3n){
								margin-right: 0;
							}
							
						}
					}
					.ArticleMain-info-item-else-bottom{
						width: 100%;
						display: flex;
						justify-content: space-between;
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #686868;
						letter-spacing: -0.24px;
						
					}
				}
			
				.ArticleDetail-footer-main-item-advertising{
					padding-top: 20rpx;
					// padding-left: 36rpx;
					// padding-left: 34rpx;
					padding-bottom: 26rpx;
					// border-top: 3rpx solid #f4f4f4;
					border-bottom: 1rpx solid #D8D8D8;
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
						padding-top: 20rpx;
						border-radius: 12rpx;
						overflow: hidden;
						box-sizing: border-box;
						image{
							// flex: 1;
							// height: 216rpx;
							
							
							// width: 216rpx;
							// margin-right: 16rpx;
							// margin-top: 20rpx;
							// box-sizing: border-box;
							// &:nth-child(3n){
							// 	margin-right: 0;
							// }
						}
						.ArticleDetail-footer-main-item-advertising-center-moreImg{
							width: 216rpx;
							// flex: 1;
							// width: 216rpx;
							height: 144rpx;
							margin-right: 16rpx;
							margin-bottom: 18rpx;
							box-sizing: border-box;
							&:nth-child(3n){
								margin-right: 0;
							}
						}
						.ArticleDetail-footer-main-item-advertising-center-Img{
							flex: 1;
							height: 216rpx;
						}
					}
					.ArticleDetail-footer-main-item-advertising-footer{
						margin-top: 18rpx;
						box-sizing: border-box;
						display: -webkit-box;    
						-webkit-box-orient: vertical;    
						-webkit-line-clamp: 2;    //控制行数
						overflow: hidden;
					}
				}
							
			}
		}
	}
</style>
