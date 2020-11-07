<template>
	<view class="ShopDetail">
		<scroll-view scroll-y="true" style="height: 100vh">
		<view class="ShopDetail-header">
			<!-- <image :src="shopDetailInfo.goodsPic" mode="aspectFill"></image> -->
			<!-- <u-image :src="shopDetailInfo.goodsPic" width="100%" height="378rpx" :lazy-load="true" mode="aspectFill" @click = "privatarPic(shopDetailInfo.goodsPic)">
				<u-loading slot="loading"></u-loading>
			</u-image> -->
			<u-image :src="shopDetailInfo.goodsPic" width="100%" height="596rpx" :lazy-load="true" mode="aspectFill" @click = "privatarPic(shopDetailInfo.goodsPic)">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="ShopDetail-center">
			<view class="ShopDetail-center-top">
				<view class="ShopDetail-center-top-left">{{shopDetailInfo.goodsName}}</view>
				<image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like" v-if="collection == 0"  @click = "changeCollection(1)"></image>
				<image src="../../static/image/ych/index/20.png" mode="aspectFill" v-if="collection == 1" @click = "changeCollection(0)"></image>
			</view>
			<view class="ShopDetail-center-center">
				<view class="ShopDetail-center-center-left">
					<view class="ShopDetail-center-center-left-price">{{shopDetailInfo.price}}元 + {{shopDetailInfo.goodsIntegral}}积分</view>
					<view class="ShopDetail-center-center-left-timer" v-if="type == 1">
						<view class="ShopDetail-center-center-left-timer-item">{{hour}}</view>
						<view class="maohao">:</view>
						<view class="ShopDetail-center-center-left-timer-item">{{minute}}</view>
						<view class="maohao">:</view>
						<view class="ShopDetail-center-center-left-timer-item">{{second}}</view>
					</view>
				</view>
				<view class="ShopDetail-center-center-right">剩余  {{shopDetailInfo.remainder}}</view>
			</view>	
			<view class="ShopDetail-center-bottom" v-if="type == 1">{{shopDetailInfo.originalPrice}}元</view>
		</view>
		<view class="ShopDetail-bottom">
			<view class="ShopDetail-bottom-title">详情说明</view>
			<!-- <scroll-view scroll-y="true" style="height: 670rpx"> -->
				<view class="rich-box" style="padding-bottom: 200rpx;">
					<jyf-parser selectable :html="shopDetailInfo.goodsContent" ref="article"></jyf-parser>
				</view>
			<!-- </scroll-view> -->
		</view>
		</scroll-view>
		<view class="buy-button-box" style="width: 100%;background-color: #FFFFFF;">
			<view class="buy-button" :class="{isGray: shopDetailInfo.remainder == 0}" @click="goToPayPage(shopDetailInfo.id, shopDetailInfo.price)">{{shopDetailInfo.remainder == 0 ? '已售完' : '立即抢购'}}</view>
		</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		onLoad(options) {
			uni.showLoading({
				title: '加载中'
			})
			this.type = options.type
			this.id = options.id
			this.initShopDetail()
		},
		components: {
		    jyfParser
	    },
		data() {
		    return {
		      html: '',
			  type: 1, // 0 兑换 1抢购 
			  id: 0,
			  shopDetailInfo: {},
			  diffTotal: 0,
			  hour: '00',
			  minute: '00',
			  second: '00',
			  countdown: null,
			  collection: 0
		    }
	    },
		methods: {
			privatarPic (pic) {
				let picArr = [pic]
			   uni.previewImage({
				    current: pic,
					urls: picArr
				});
			}, 
			// 收藏
			async changeCollection (index) {
				this.collection = index
				let res = await this.$fetch(this.$api.collection, {relationId: this.shopDetailInfo.id, type: 0}, "POST", 'FORM')
				console.log(res)
			},
			// 数据
			async initShopDetail () {
				let res
				if (uni.getStorageSync('userId')) {
					let userId = uni.getStorageSync('userId')
					 res = await this.$fetch(this.$api.goods_detail, {id: this.id, userId: userId}, 'POST', 'FORM')
				} else {
					 res = await this.$fetch(this.$api.goods_detail, {id: this.id}, 'POST', 'FORM')
				}
				
				console.log(res)
				this.shopDetailInfo = res.data.goods
				this.collection = res.data.collection
				let nowTimer = this.$dayjs()
				let endTimer = this.$dayjs(this.shopDetailInfo.endTime)
				console.log(nowTimer)
				console.log(endTimer)
				this.diffTotal = endTimer.diff(nowTimer,'second')
				console.log(this.diffTotal)
				if (this.diffTotal) {
					this.countdown = setInterval(() => {
						this.diffTotal--
						if (this.diffTotal < 0) {
						    this.hour = 0
						    this.minute = 0
						    this.second = 0
							this.endOfTime()
							return
						}
						this.countDown(this.diffTotal)
					}, 1000)
				}
				uni.hideLoading()
			},
			countDown(timer) {
				if (timer > 0) {
					this.hour = Math.floor(this.diffTotal / (60 * 60))
					this.minute = Math.floor(this.diffTotal / 60) - (this.hour * 60)
					this.second = Math.floor(this.diffTotal) - (this.hour * 60 * 60) - (this.minute * 60)
					   //判断时间是否大于10 
						if (this.hour < 10) {
							this.hour = "0" + this.hour
						}
						if (this.minute < 10) {
							this.minute = "0" + this.minute
						}
						if (this.second < 10) {
							this.second = "0" + this.second
						}
				} else {
					this.endOfTime()
				}
			},
			endOfTime () {
				clearInterval(this.countdown)
				this.countdown = null;
			},
			goToPayPage (id, price) {
				if (this.shopDetailInfo.remainder == 0) return uni.showToast({
					icon: 'none',
					title: '该物品已售完'
				})
				uni.navigateTo({
					url: '../Pay/Pay?id=' + id + '&price=' + price + '&type=' + 0
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.ShopDetail{
		.ShopDetail-header{
			image{
				// width: 100%;
				// height: 378rpx;
				// width: 334rpx;
				width: 100%;
				// height: 298rpx;
				height: 596rpx;
			}
		}
		.ShopDetail-center{
			padding: 14rpx 36rpx;
			box-sizing: border-box;
			background-color: #fff;
			border-bottom: 10rpx solid #f4f4f4;
			.ShopDetail-center-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.ShopDetail-center-top-left{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #545454;
					letter-spacing: -0.10px;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
			.ShopDetail-center-center{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.ShopDetail-center-center-left{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 6rpx 0;
					.ShopDetail-center-center-left-price{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #FF7427;
						letter-spacing: -0.34px;
						padding-right: 34rpx;
						box-sizing: border-box;
					}
					.ShopDetail-center-center-left-timer{
						display: flex;
						align-items: center;
						
						.ShopDetail-center-center-left-timer-item{
							padding: 0 6rpx;
							box-sizing: border-box;
							background: #FF7427;
							border-radius: 4px;
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #FFFFFF;
							letter-spacing: -0.34px;
						}
						.maohao{
							margin: 0 6rpx;
						}
					}
				}
			}
			.ShopDetail-center-bottom{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #A3A3A3;
				letter-spacing: -0.34px;
				text-decoration: line-through;
			}
		}
		.ShopDetail-bottom{
			padding-bottom: 50rpx;
			padding-left: 36rpx;
			padding-right: 36rpx;
			padding-top: 14rpx;
			box-sizing: border-box;
			.ShopDetail-bottom-title{
				font-weight: bold;
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #000000;
				letter-spacing: -0.39px;
			}
		}
		.buy-button-box{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 0rpx;
			background-color: #fff;
			.buy-button{
				font-family: PingFangSC-Medium;
				font-size: 21px;
				color: #FFFFFF;
				letter-spacing: 1.19px;
				background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
				border-radius: 4px;
				width: 604rpx;
				height: 102rpx;
				text-align: center;
				line-height: 102rpx;
				// position: fixed;
				// left: 50%;
				// transform: translateX(-50%);
				// bottom: 20rpx;
				&.isGray{
					background-image: none;
					background-color: #c8c9cc;
				}
			}
		}
		
	}
</style>
