<template>
	<view class="HotHouse">
		<HotMain :title = "'热卖楼盘'" @handleHotItem = "handleHotItem"></HotMain>
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
					url: '../HouseProperty/HouseDetail?type=' + 1
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
