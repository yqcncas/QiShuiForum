<template>
	<view class="myCollect">
		<view class="myCollect-header">
			<view class="myCollect-header-item" :class="{active: tabIndex == 0}" @click="handleTabIndex(0)">商品</view>
			<view class="myCollect-header-item" :class="{active: tabIndex == 1}" @click="handleTabIndex(1)">帖子</view>
		</view>
		<view class="line-3"></view>
		<view class="myCollect-wrppaer">
			
			<swiper style="height: calc(100vh - 84rpx);" @change="swiperChange" :current="tabIndex">
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 98rpx);" @scrolltolower = "lower">
						<view class="market-list-main">
							<view class="market-list-item" v-for="(item, index) in shopList" :key = "index" @click="goToShopDetail(item.goods.goodsType, item.goods.id)"> 
								<image :src="item.goods.goodsPic" mode="aspectFill"></image>
								<view class="market-list-item-bottom">
									<view class="market-list-item-bottom-top">{{item.goods.goodsName}}</view>
									<view class="market-list-item-bottom-footer">
										<view class="market-list-item-bottom-footer-left">
											<view class="market-list-item-bottom-footer-left-top">{{item.goods.price}}元 + {{item.goods.goodsIntegral}}积分</view>
										</view>
										<view class="market-list-item-bottom-footer-right">兑换</view>
									</view>
								</view>
							</view>
						</view>
						<uniLoadMore bgColor="#fff" :status="hasFlag ? 'loading' : 'noMore'" ></uniLoadMore>
					</scroll-view>
				
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 98rpx);" @scrolltolower = "lower">
						<view class="tiezi-item" v-for="(item, index) in tzList" :key = "index" @click="goToArtDetail(item.article.id, item.article.userId)">
							<view class="tiezi-item-header">
								<image :src="item.article.avatar ? item.article.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
								<view class="tiezi-item-header-right">
									<view class="tiezi-item-header-right-top">{{item.article.userName}}</view>
									<view class="tiezi-item-header-right-bottom">{{item.createTime}}</view>
								</view>
							</view>
							<view class="tiezi-item-center">{{item.article.content[0].content}}</view>
							<view class="tiezi-item-image-box">
								<image :src="contentImg" mode="aspectFill" v-for="(contentImg, i) in item.article.content[0].pic" :key = "i" v-if="item.article.isVideo == 0"></image>
								<video :src="item.article.content[0].pic[0]" controls v-if="item.article.isVideo == 1" style="width: 100%;"></video>
								
							</view>
							<view class="share-box">
								<view class="share-left">
									<image src="../../static/image/ych/my/23.png" mode=""></image>
									<view class="share-left-text">分享</view>
								</view>
								<view class="share-right">
									<image src="../../static/image/ych/my/6.png" mode=""></image>
									<view class="share-left-text">评论({{item.article.evaluateNum}})</view>
								</view>
							</view>
							<!-- <view class="line-3" v-if="index != 10"></view> -->
							
						</view>
						<uniLoadMore bgColor="#fff" :status="tZhasFlag ? 'loading' : 'noMore'" ></uniLoadMore>
						
						
					</scroll-view>
				</swiper-item>
			</swiper>
			
		
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
			this.initMyCollect()
			this.initMyTieZi()
		},
		data () {
			return {
				tabIndex: 0,
				hasFlag: true,
				pageNum: 0,
				pageSize: 10,
				shopList: [],
				
				tZhasFlag: true,
				tZpageNum: 0,
				tZpageSize: 10,
				tzList: []
			}
		},
		
		methods: {
			//　点击
			handleTabIndex (index) {
				this.tabIndex = index
			},
			goToShopDetail (index, id) {
				if (index == 1) {
					index == 0
				} else {
					index == 1
				}
				uni.navigateTo({
					url: '../ShopDetail/ShopDetail?type=' + index + '&id=' + id
				})
			},
			// 下拉
			lower () {
				if (this.tabIndex == 0) {
					this.initMyCollect()
				} else {
					this.initMyTieZi()
				}
			},
			// 滑动
			swiperChange (e) {
				this.handleTabIndex(e.detail.current)
			},
			async initMyCollect () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.my_collection_list, {pageNum: this.pageNum, pageSize: this.pageSize, type: 0}, "POST", 'FORM')
				// console.log(res)
				this.shopList = [...this.shopList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			async initMyTieZi () {
				if (!this.tZhasFlag) return
				this.tZpageNum = ++this.tZpageNum
				let res = await this.$fetch(this.$api.my_collection_list, {pageNum: this.tZpageNum, pageSize: this.tZpageSize, type: 1}, "POST", 'FORM')
				// console.log(res)
				res.rows.forEach(item => {
					if (item.article.content) {
						item.article.content = JSON.parse(item.article.content)
					}
					// item.article.pics = JSON.parse(item.article.pics)
				})
				this.tzList = [...this.tzList, ...res.rows]
				console.log(this.tzList)
				this.tZhasFlag = this.tZpageNum * this.tZpageSize < res.total
			},
			goToArtDetail (id, userId) {
				
				uni.navigateTo({
					url: '../index/ArticleDetail?id=' + id + '&userId=' + userId
				})
			}
			
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.myCollect{
		height: 100%;
		.myCollect-header{
			width: 100%;
			display: flex;
			justify-content: space-between;
			.myCollect-header-item{
				width: 50%;
				height: 84rpx;
				line-height: 84rpx;
				text-align: center;
				position: relative;
				&:nth-child(1) {
					border-right: 1rpx solid #F4F4F4;
				}
				&::after{
					content: '';
					width: 0;
					height: 0;
					border-bottom: 6rpx solid #FF682D;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: 10rpx;
					transition: all 0.3s;
				}
				&.active{
					color: #FF682D;
					&::after{
						width: 15%;
					}
				}
			}
		}
		.myCollect-wrppaer{
			// padding-top: 24rpx;
			// padding-left: 32rpx;
			// padding-right: 32rpx;
			box-sizing: border-box;
			.market-list-main{
				padding-top: 24rpx;
				padding-left: 32rpx;
				padding-right: 32rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.market-list-item{
					margin-top: 18rpx;
					display: inline-block;
					background: #FFFFFF;
					box-shadow: 0 1px 4px 0 rgba(145,145,145,0.50);
					border-radius: 3px;
					overflow: hidden;
					
					box-sizing: border-box;
					&:nth-child(1) {
						margin-top: 0;
					}
					&:nth-child(2) {
						margin-top: 0;
					}
					image{
						width: 334rpx;
						height: 298rpx;
					}
					.market-list-item-bottom{
						background-color: #fff;
						width: 334rpx;
						// height: 126rpx;
						padding: 8rpx 18rpx 20rpx 19rpx;
						box-sizing: border-box;
						.market-list-item-bottom-top{
							font-family: PingFangSC-Medium;
							font-size: 10px;
							color: #545454;
							letter-spacing: -0.09px;
							text-align: justify;
							display: -webkit-box;    
							-webkit-box-orient: vertical;    
							-webkit-line-clamp: 1;    //控制行数
							overflow: hidden;
							padding-bottom: 18rpx;
							box-sizing: border-box;
						}
						.market-list-item-bottom-footer{
							display: flex;
							justify-content: space-between;
							align-items: center;
							.market-list-item-bottom-footer-left{
								.market-list-item-bottom-footer-left-top{
									font-family: PingFangSC-Medium;
									font-size: 10px;
									color: #FF7427;
									letter-spacing: -0.24px;
									text-align: justify;
								}
								.market-list-item-bottom-footer-left-bottom{
									font-family: PingFangSC-Medium;
									font-size: 10px;
									color: #A3A3A3;
									letter-spacing: -0.24px;
									text-align: justify;
									text-decoration: line-through;
								}
							}
							.market-list-item-bottom-footer-right{
								width: 112rpx;
								height: 46rpx;
								text-align: center;
								line-height: 46rpx;
								background-image: linear-gradient(136deg, #F6B081 0%, #E86D29 100%);
								border-radius: 4px;
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #FFFFFF;
								letter-spacing: -0.24px;
							}
						}
					}
				}
			}
			.tiezi-item{
				padding-top: 14rpx;
				box-sizing: border-box;
				border-bottom: 6rpx solid #f4f4f4;
			
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
	}
</style>
