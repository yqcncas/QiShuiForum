<template>
	<view class="HotHouse">
		<HotMain :title = "'热卖楼盘'" @handleHotItem = "handleHotItem" :HotMainArr = "HotMainArr"></HotMain>
	</view>
</template>

<script>
	import HotMain from '../../components/HotMain/HotMain.vue'
	export default {
		onLoad() {
			this.initHotHouse()
		},
		comments:{
			HotMain
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				HotMainArr: []
			}
		},
		methods: {
			handleHotItem (id) {
				uni.navigateTo({
					url: '../HouseProperty/HouseDetail?type=' + 1 + '&id=' + id
				})
			},
			async initHotHouse () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.hot_plate, {pageNum: this.pageNum, pageSize: this.pageSize, type: 1}, "POST", 'FORM')
				console.log(res)
				this.HotMainArr = [...this.HotMainArr, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			}
		},
		onReachBottom() {
			this.initHotHouse()
		}
	}
</script>

<style>
	page::after{
		display: none;
	}
</style>
