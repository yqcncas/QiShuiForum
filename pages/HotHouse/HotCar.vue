<template>
	<view class="HotCar">
		<HotMain :title = "'热卖车款'" @handleHotItem = "handleHotItem"></HotMain>
	</view>
</template>

<script>
	import HotMain from '../../components/HotMain/HotMain.vue'
	export default {
		comments:{
			HotMain
		},
		methods: {
			handleHotItem (index) {
				uni.navigateTo({
					url: '../HouseProperty/HouseDetail?type=' + 0 
				})
			}
		}
	}
</script>

<style>
	page::after{
		display: none;
	}
</style>
