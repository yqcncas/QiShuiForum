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
						<view class="Advertising-item" v-for="(item, index) in 10" :key = "index">
							<view class="Advertising-item-top">
								<view class="Advertising-item-left">
									<image src="../../static/logo.png" mode="aspectFill"></image>
								</view>
								<view class="Advertising-item-right">
									<view class="Advertising-item-right-top">胡记核桃</view>
									<view class="Advertising-item-right-bottom">来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！</view>
								</view>
							</view>
						<!-- 	<view class="Advertising-item-bottom">
								<view class="Advertising-item-bottom-item">广告展现量：10</view>
								<view class="Advertising-item-bottom-item">广告点击量：10</view>
							</view> -->
							
						</view>
					</scroll-view>
					
				</swiper-item>
				
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 84rpx);" @scrolltolower = "lower">
						<view class="Advertising-item" v-for="(item, index) in 10" :key = "index">
							<view class="Advertising-item-top">
								<view class="Advertising-item-left">
									<image src="../../static/logo.png" mode="aspectFill"></image>
								</view>
								<view class="Advertising-item-right">
									<view class="Advertising-item-right-top">胡记核桃</view>
									<view class="Advertising-item-right-bottom">来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！来我家买核桃！</view>
								</view>
							</view>
							<view class="Advertising-item-bottom">
								<view class="Advertising-item-bottom-item">广告展现量：10</view>
								<view class="Advertising-item-bottom-item">广告点击量：10</view>
							</view>
							
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
				
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				cuttentIndex: 0
			}
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
			}
		},
		
	}
</script>

<style lang="less">
	.Advertising{
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
