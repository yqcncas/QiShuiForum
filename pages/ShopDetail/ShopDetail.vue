<template>
	<view class="ShopDetail">
		<view class="ShopDetail-header">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="ShopDetail-center">
			<view class="ShopDetail-center-top">
				<view class="ShopDetail-center-top-left">正品iPhone Xs Max</view>
				<image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like"></image>
				<!-- <image src="../../static/image/ych/index/20.png" mode="aspectFill"></image> -->
			</view>
			<view class="ShopDetail-center-center">
				<view class="ShopDetail-center-center-left">
					<view class="ShopDetail-center-center-left-price">3000元 + 200积分</view>
					<view class="ShopDetail-center-center-left-timer" v-if="type == 1">
						<view class="ShopDetail-center-center-left-timer-item">17</view>
						<view class="maohao">:</view>
						<view class="ShopDetail-center-center-left-timer-item">17</view>
						<view class="maohao">:</view>
						<view class="ShopDetail-center-center-left-timer-item">17</view>
					</view>
				</view>
				<view class="ShopDetail-center-center-right">剩余  90</view>
			</view>	
			<view class="ShopDetail-center-bottom" v-if="type == 1">5000元</view>
		</view>
		<view class="ShopDetail-bottom">
			<view class="ShopDetail-bottom-title">详情说明</view>
			<scroll-view scroll-y="true" style="height: 670rpx">
				<view class="rich-box" style="padding-bottom: 200rpx;">
					<jyf-parser :html="html" ref="article"></jyf-parser>
				</view>
			</scroll-view>
		</view>
		<view class="buy-button">立即抢购</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		onLoad(options) {
			console.log(options.type)
			this.type = options.type
		},
		components: {
		    jyfParser
	    },
		data() {
		    return {
		      html: '',
			  type: 1, // 0 兑换 1抢购 
		    }
	    },
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
				width: 100%;
				height: 378rpx;
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
					letter-spacing: -0.12px;
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
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 20rpx;
		}
	}
</style>
