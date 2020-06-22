<template>
	<view class="HouseDetail">
		<view class="HouseDetail-header">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="HouseDetail-center">
			<view class="HouseDetail-center-bg" :style="{backgroundImage: type == 1 ? `url(../../static/image/ych/Market/4.png)` : `url(../../static/image/ych/Market/5.png)`}">
				<view class="HouseDetail-center-bg-title">万科·海上都会</view>
				<view class="HouseDetail-center-bg-main">宁波万科海上都会（住宅备案名：海映星洲小区北区、海映星洲小区南区）楼盘</view>
			</view>
		</view>
		<view class="line-3"></view>
		<ArticleMain @ArticleMainClick = "ArticleMainClick"></ArticleMain>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
		},
		data () {
			return {
				type: 0, // 0车 1房
			}
		},
		methods: {
			ArticleMainClick (index) {
				console.log(index)
				uni.navigateTo({
					url: '../index/ArticleDetail'
				})
			}
		}
	}
</script>

<style lang="less">
	.HouseDetail{
		.HouseDetail-header{
			image{
				width: 100%;
				height: 378rpx;
			}
		}
		.HouseDetail-center{
			width: 100%;
			height: 252rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.HouseDetail-center-bg{
				width: 600rpx;
				height: 200rpx;
				// background-image: url(../../static/image/ych/Market/4.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding-bottom: 18rpx;
				.HouseDetail-center-bg-title{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #FF682D;
					letter-spacing: -0.34px;
					text-align: center;
					padding-top: 46rpx;
				}
				.HouseDetail-center-bg-main{
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #141414;
					padding: 0 30rpx;
					// padding-bottom: 18rpx;
					box-sizing: border-box;
					display: -webkit-box;    
					-webkit-box-orient: vertical;    
					-webkit-line-clamp: 2;    //控制行数
					overflow: hidden;
				}
			}
		}
	}
</style>
