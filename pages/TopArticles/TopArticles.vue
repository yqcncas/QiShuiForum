<template>
	<view class="TopArticles">
		<view class="TopArticles-header">
			<view class="TopArticles-header-top">选择置顶帖*</view>
			<view class="TopArticles-header-bottom">
				<picker  :range="artTitle" @change="handleArtTitle">
					<view class="TopArticles-header-bottom-box">
						<input disabled="true" type="text" placeholder="请选择需要置顶的帖子" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #575757;"/>
						<image src="../../static/image/ych/my/30.png" mode="aspectFill"></image>
					</view>
				</picker>
			</view>
		</view>
		<view class="TopArticles-center">
			<view class="TopArticles-center-top">
				<view class="TopArticles-center-top-left">置顶起始时间*</view>
				<view class="TopArticles-center-top-right" @click="showStar">
					<input style="font-size: 14px;" disabled type="text" v-model="starTimer" placeholder="请选择起始时间" placeholder-style="font-family: PingFangSC-Regular;font-size: 12px;color: #575757;"/>
					<image src="../../static/image/ych/my/31.png" mode=""></image>
				</view>
			</view>
			<view class="TopArticles-center-top">
				<view class="TopArticles-center-top-left">置顶结束时间*</view>
				<view class="TopArticles-center-top-right" @click="showEnd">
					<input style="font-size: 14px;"  disabled type="text" v-model="endTimer" placeholder="请选择结束时间" placeholder-style="font-family: PingFangSC-Regular;font-size: 12px;color: #575757;"/>
					<image src="../../static/image/ych/my/31.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="TopArticles-price">
			<view class="TopArticles-price-left">金额</view>
			<view class="TopArticles-price-right">88元</view>
		</view>
		<view class="goPay" @click="goToPay">去支付</view>
	
		<u-calendar v-model="showStarFlag" :mode="'date'" @change="changeStar"></u-calendar>
		<u-calendar v-model="showEndFlag" :mode="'date'" @change="changeEnd"></u-calendar>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				// 帖子列表
				artTitle: ['1111', '2222'],
				showStarFlag: false, // 起始日期展示
				showEndFlag: false, // 结束日期展示
				starTimer: '', //　起始日期
				endTimer: '',　// 结束日期
				starYear: 0,
				starMouth: 0,
				starDay: 0,
				endYear: 0,
				endMouth: 0,
				endDay: 0
			}
		},
		methods: {
			handleArtTitle (e) {
				console.log(e)
			},
			// 展示起始日期
			showStar () {
				this.showStarFlag = true
			},
			// 展示结束日期
			showEnd () {
				this.showEndFlag = true
			},
			// 选择起始日期
			changeStar (e) {
				console.log(e)
				this.starTimer = e.result
				this.starYear = e.year
				this.starMouth = e.month
				this.starDay = e.day
				if (this.endYear != 0) {
					if (this.endYear < this.starYear || this.endMouth < this.starMouth || this.endDay < this.starDay) {
						uni.showToast({
							icon: 'none',
							title: '选择日期有误, 请仔细检查'
						})
						this.starTimer = ""
					}
				}
				
			},
			changeEnd (e) {
				console.log(e)
				this.endTimer = e.result
				this.endYear = e.year
				this.endMouth = e.month
				this.endDay = e.day
				
				if (this.starYear != 0) {
					if (this.endYear < this.starYear || this.endMouth < this.starMouth || this.endDay < this.starDay) {
						uni.showToast({
							icon: 'none',
							title: '选择日期有误, 请仔细检查'
						})
						this.endTimer = ""
					}
				}
			},
			goToPay () {
				uni.navigateTo({
					url: '../Pay/Pay'
				})
			}
		}
	}
</script>

<style lang="less">
	.TopArticles{
		.TopArticles-header{
			padding-top: 26rpx;
			padding-left: 36rpx;
			padding-right: 30rpx;
			padding-bottom: 38rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #f4f4f4;
			.TopArticles-header-top{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
			.TopArticles-header-bottom{
				padding-top: 30rpx;
				box-sizing: border-box;
				.TopArticles-header-bottom-box{
					display: flex;
					align-items: center;
					width: 100%;
					height: 74rpx;
					background: #FFFFFF;
					border: 1px solid #DFDFDF;
					border-radius: 4px;
					padding: 18rpx 26rpx;
					input{
						flex: 1;
					}
					image{
						width: 16rpx;
						height: 10rpx;
					}
				}
			}
		}
		.TopArticles-center{
			padding-top: 34rpx;
			padding-right: 30rpx;
			padding-bottom: 46rpx;
			padding-left: 36rpx;
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.TopArticles-center-top{
				height: 66rpx;
				width: 100%;
				display: flex;
				align-items: center;
				&:nth-child(2){
					margin-top: 40rpx;
				}
				.TopArticles-center-top-left{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
				.TopArticles-center-top-right{
					flex: 1;
					height: 100%;
					background: #FFFFFF;
					border: 1px solid #DFDFDF;
					border-radius: 4px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 20rpx;
					margin-left: 10rpx;
					image{
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
		}
		.TopArticles-price{
			padding-top: 40rpx;
			padding-left: 36rpx;
			display: flex;
			align-items: center;
			.TopArticles-price-left{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-right: 152rpx;
				box-sizing: border-box;
			}
			.TopArticles-price-right{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FF7B30;
				letter-spacing: -0.34px;
			}
		}
		.goPay{
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
		}
	}
</style>
