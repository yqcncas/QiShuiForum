<template>
	<view class="Advertising">
		<view class="Advertising-navtab">
			<view class="Advertising-navtab-item" :class="{active: cuttentIndex == 0}" @click="handleCurrentIndex(0)">我的广告</view>
			<view class="Advertising-navtab-item" :class="{active: cuttentIndex == 1}" @click="handleCurrentIndex(1)">投放效果</view>
		</view>
		
		<view class="Advertising-main">
			<swiper style="height: calc(100vh - 84rpx);" :current="cuttentIndex" @change="swiperChange">
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 84rpx);" @scrolltolower = "lower">
						<view class="Advertising-item" v-for="(item, index) in AdvertisingList" :key = "index" @click="goToRichText(item.newContent, item.title, item.pics, item.articleId, item.userId)">
							<view class="Advertising-item-top">
								<view class="Advertising-item-left">
									<image :src="item.pics[0]" mode="aspectFill"></image>
								</view>
								<view class="Advertising-item-right">
									<view class="Advertising-item-right-top">{{item.title}}</view>
									<view class="Advertising-item-right-bottom">{{item.content}}</view>
								</view>
							</view>
						<!-- 	<view class="Advertising-item-bottom">
								<view class="Advertising-item-bottom-item">广告展现量：10</view>
								<view class="Advertising-item-bottom-item">广告点击量：10</view>
							</view> -->
							
						</view>
						<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
					</scroll-view>
					
				</swiper-item>
				
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 84rpx);" @scrolltolower = "lower">
						<view class="Advertising-item" v-for="(item, index) in AdvertisingList" :key = "index" @click="goToRichText(item.newContent, item.title, item.pics, item.articleId, item.userId)">
							<view class="Advertising-item-top">
								<view class="Advertising-item-left">
									<image :src="item.pics[0]" mode="aspectFill"></image>
								</view>
								<view class="Advertising-item-right">
									<view class="Advertising-item-right-top">{{item.title}}</view>
									<view class="Advertising-item-right-bottom">{{item.content}}</view>
								</view>
							</view>
							<view class="Advertising-item-bottom">
								<view class="Advertising-item-bottom-item">广告展现量：{{item.displayNum}}</view>
								<view class="Advertising-item-bottom-item">广告点击量：{{item.hits}}</view>
							</view>
							
						</view>
						<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
					</scroll-view>
					
				</swiper-item>
			</swiper>
				
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			
		},
		onShow() {
			this.initMyAdvertising()
		},
		onBackPress() {
			if (uni.getStorageSync('advertisingFlag')) {
				uni.removeStorageSync('advertisingFlag')	
				uni.switchTab({
					url: './My'
				})
				return true
			} else {
				return false
			}
		},
		data () {
			return {
				cuttentIndex: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				AdvertisingList: []
			}
		},
		onNavigationBarButtonTap () {
			uni.navigateTo({
				url: '../Advertising/PublishAdvertising'
			})
		},
		methods: {
			//　切换
			handleCurrentIndex (index) {
				this.cuttentIndex = index
			},
			// 触底
			lower () {
				console.log('12313')
			},
			// 切屏
			swiperChange (e) {
				console.log(e)
				this.handleCurrentIndex(e.detail.current)
			},
			// 去富文本
			goToRichText (content, title, pics, id, userId) {
				// uni.setStorageSync('RichMainText', content)
				// uni.navigateTo({
				// 	url: '../RichText/RichText?RichMain=' + content + '&title=' + title + '&pics=' + JSON.stringify(pics) + '&type=' + 1 + '&adid=' + id
				// })
				uni.navigateTo({
					url: '../index/ArticleDetail?id=' + id + '&userId=' + userId
				})
			},
			// 数据列表
			async initMyAdvertising () {
				if (!this.hasFlag) return 
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.my_ads, {pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				console.log(res)
				this.AdvertisingList = [...this.AdvertisingList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
				this.AdvertisingList.forEach(item => {
					item.pics = JSON.parse(item.pics)
					item.newContent = item.content
					// item.content = this.filterHTMLTag(item.content)
				}) 
			},
			filterHTMLTag (msg) {
			    var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
			    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
			    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
			    msg = msg.replace(/[ ]|[&nbsp;]/g, '')
			    return msg;
			},
		},
		
	}
</script>

<style lang="less">
	page{
		width: 100%;
	}
	.Advertising{
		width: 100%;
		overflow: hidden;
		.Advertising-navtab{
			width: 100%;
			// border-bottom: 10rpx solid #f4f4f4;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			position: fixed;
			top: 0;
			z-index: 99;
			background-color: #fff;
			.Advertising-navtab-item{
				width: 50%;
				height: 84rpx;
				line-height: 84rpx;
				text-align: center;
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #292929;
				letter-spacing: -0.34px;
				position: relative;
				&::after{
					content: '';
					width: 0;
					height: 0;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: 10rpx;
					border-bottom: 6rpx solid #FF682D;
					box-sizing: border-box;
					transition: all .3s;
				}
				&.active{
					color: #FF682D;
					&::after{
						width: 30%;
					}
				}
			}
		}
		.Advertising-main{
			padding-top: 84rpx;
			.Advertising-item{
				// padding-top: 84rpx;
				&:nth-child(1){
					border-top: 10rpx solid #f4f4f4;
				}
				.Advertising-item-top{
					display: flex;
					padding-top: 20rpx;
					padding-left: 44rpx;
					padding-bottom: 34rpx;
					padding-right: 32rpx;
					box-sizing: border-box;
					.Advertising-item-left{
						padding-right: 30rpx;
						box-sizing: border-box;
						image{
							width: 204rpx;
							height: 204rpx;
						}
					}
					.Advertising-item-right{
						
						.Advertising-item-right-top{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
							font-weight: bold;
						}
						.Advertising-item-right-bottom{
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
						}
					}
				}
				.Advertising-item-bottom{
					width: 100%;
					display: flex;
					align-items: center;
					// height: 78rpx;
					// line-height: 78rpx;
					border-top: 10rpx solid #f4f4f4;
					border-bottom: 10rpx solid #f4f4f4;
					box-sizing: border-box;
					
					.Advertising-item-bottom-item{
						width: 50%;
						padding: 20rpx 0;
						text-align: center;
					}
				}
			}
				
		}
		
	}
</style>
