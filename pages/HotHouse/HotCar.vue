<template>
	<view class="HotCar">
		<HotMain :title = "'热卖车款'" @handleHotItem = "handleHotItem" :HotMainArr = "HotMainArr"></HotMain>
		<u-empty mode="list" v-if = "noList"></u-empty>
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
				HotMainArr: [],
				noList: false
			}
		},
		methods: {
			handleHotItem (id) {
				uni.navigateTo({
					url: '../HouseProperty/HouseDetail?type=' + 0 + '&id=' + id
				})
			},
			async initHotHouse () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.hot_plate, {pageNum: this.pageNum, pageSize: this.pageSize, type: 2}, "POST", 'FORM')
				console.log(res)
				this.HotMainArr = [...this.HotMainArr, ...res.rows]
				if (res.total <= 0) {
					this.noList = true
				}
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
