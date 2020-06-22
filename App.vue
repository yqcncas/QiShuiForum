<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	
	// page::after {
	// 	content: "";
	// 	position: fixed;
	// 	top: 0;
	// 	/*  #ifdef H5 */
	// 	top: 44px;
	// 	/*  #endif  */
	// 	left: 0;
	// 	box-shadow: inset 0 4upx 8upx 0 rgb(244, 244, 244);
	// 	z-index: 9;
	// 	width: 750upx;
	// 	height: 8upx;
	// }
	page{
		width: 100%;
		// height: 100%;
	}
	::-webkit-scrollbar {
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    color: transparent;
	    background: transparent;  
	}
	
	swiper .wx-swiper-dot,
	swiper .a-swiper-dot,
	swiper .uni-swiper-dot {
		background: #3C3C3C;
		// opacity: 0.4;
		width: 8rpx;
		height: 8rpx;
		border-radius: 50%;
		// margin: 0 10rpx !important;
		margin-right: 10rpx !important;
	}
	//选中状态
	swiper .wx-swiper-dot.wx-swiper-dot-active,
	swiper .a-swiper-dot.a-swiper-dot-active,
	swiper .uni-swiper-dot.uni-swiper-dot-active {
		background: #FFFFFF;
	}
	
	.line-7{
		width: 100%;
		height: 14rpx;
		background: #F4F4F4;
	}
	.line-3{
		width: 100%;
		height: 6rpx;
		background: #F4F4F4;
	}
</style>

