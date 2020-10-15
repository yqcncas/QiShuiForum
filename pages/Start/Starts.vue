<template>
	<!-- <div class="start" :style="{width: screenWidth + 'px', height:screenHeight + 'px', backgroundImage: `url(${starImg})`}"> -->
	<div class="start" :style="{width: screenWidth + 'px', height:screenHeight + 'px', backgroundImage: `url(${starImg})`, backgroundSize:'100% 100%' }">
		<!-- <image v-if="!starImg" src="../../static/background.png" mode="aspectFill" :style="{width: screenWidth + 'px', height:screenHeight + 'px',position: absolute, left: 0, top: 0, right: 0,bottom: 0 }"></image> -->
		<!-- <image  :src="starImg" mode="aspectFill"  class="imgBG"></image> -->
		<text class="clickTo" @click="goToIndex">点击跳转{{countDown}}</text>
	</div> 
</template>

<script>
	export default {
		onLoad() {
			plus.navigator.setFullscreen(true); 
			if (uni.getStorageSync('startImg')) {
				// plus.navigator.closeSplashscreen()
				this.starImg = uni.getStorageSync('startImg')
			}
			// 获取系统信息
			this.initSystemInfo()
			// 倒计时
			this.handleCountDown()
		},
		data () {
			return {
				screenWidth: 0,
				screenHeight: 0,
				countDown: 5,
				starImg: '../../static/background.png',
				timer: null
			}
		},
		onHide() {
			clearInterval(this.timer)
			this.timer = null
		},
		// watch:{
		// 	countDown (newV) {
		// 		console.log(newV)
		// 		if (newV == 0) {
		// 			uni.switchTab({
		// 				url: '../index/index'
		// 			})
		// 		}
		// 	}
		// },
		methods: {
			// 获取系统信息
			initSystemInfo () {
				uni.getSystemInfo({
				    success: (res) => {
						console.log(res)
						this.screenWidth = res.screenWidth
						this.screenHeight = res.screenHeight	
				    }
				})
				
			},
			// 倒计时
			handleCountDown () {
				
				this.timer = setInterval(() => {
					this.countDown--
					if (this.countDown <= 0) {
						this.countDown = 0
						clearInterval(this.timer)
						this.timer = null
						this.goToIndex()
					}
				}, 1000)
			},
			// 跳转
			goToIndex () {
				clearInterval(this.timer)
				this.timer = null
				uni.switchTab({
					url: '../index/index'
				})
				plus.navigator.setFullscreen(false); 
			}
		}
	}
</script>

<style>
.start{
/* 	width: 650rpx;
	height: 100%;
	background-image: url(../../static/background.png); */
	background-repeat: no-repeat;
	background-size: 100% 100%;
}

.clickTo{
	position: fixed;
	right: 40rpx;
	top: 90rpx;
	color: #FFFFFF;
	border-width: 2rpx;
	border-style: solid;
	border-color: #FFFFFF;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 30rpx;	font-size: 14px;	padding-top: 5rpx;	padding-bottom: 5rpx;	padding-left: 25rpx;	padding-right: 25rpx;
}
.imgBG{
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	top: 0;
}
</style>
