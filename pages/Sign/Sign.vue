<template>
	<view class="sign">
		<view class="sign-header">
			<image src="../../static/logo.png" mode="aspectFill" class="banner"></image>
			<image src="../../static/image/ych/my/25.png" mode="aspectFill" class="share"></image>
		</view>
		<view class="sign-main">
			<view class="sign-main-title">连续签到：2天</view>
			<view class="sign-img-box">
				<view class="sign-img-box-item" v-for="(item, index) in 7" :key = "index">
					<view class="sign-img-box-item-top active" :style="{backgroundImage: `url(../../static/image/ych/my/27.png)`}">88</view>
					<view class="sign-img-box-item-bottom active">{{index + 1}}天</view>
				</view>
			</view>
			<view class="sign-button">签到</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		}
	}
</script>

<style lang="less">
	.sign{
		.sign-header{
			width: 100%;
			height: 366rpx;
			position: relative;
			padding-bottom: 28rpx;
			.banner{
				width: 100%;
				height: 100%;
			}
			.share{
				position: absolute;
				width: 42rpx;
				height: 42rpx;
				right: 20rpx;
				top: 16rpx;
			}
		}
		.sign-main{
			margin-top: 28rpx;
			padding: 12rpx;
			background: #FFFFFF;
			box-shadow: 0 2px 5px 2px rgba(192,192,192,0.50);
			border-radius: 4px;
			box-sizing: border-box;
			overflow: hidden;
			.sign-main-title{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: 0.01px;
			}
			.sign-img-box{
				padding-top: 18rpx;
				padding-bottom: 36rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.sign-img-box-item{
					width: 118rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					// justify-content: center;
					.sign-img-box-item-top{
						width: 74rpx;
						height: 74rpx;
						line-height: 74rpx;
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #B9B9B9;
						letter-spacing: 0.01px;
						text-align: center;
						// background-image: url();
						background-repeat: no-repeat;
						background-size: 100% 100%;
						&.active{
							color: #FFECDA;
						}
					}
					.sign-img-box-item-bottom{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #A3A3A3;
						letter-spacing: 0.01px;
						// text-align: center;
						&.active{
							color: #FDB72A;
						}
					}
				}
			}
			.sign-button{
				background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
				border-radius: 46rpx;
				width: 604rpx;
				height: 92rpx;
				line-height: 92rpx;
				margin: 0 auto;
				text-align: center;
				font-family: PingFangSC-Medium;
				font-size: 21px;
				color: #FFFFFF;
				letter-spacing: 1.19px;
			}
		}
	}
</style>
