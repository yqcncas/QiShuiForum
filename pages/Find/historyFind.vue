<template>
	<view class="find-main">
		<view class="find-main-item" v-for="(item, index) in findList" :key = "index" @click="goToFindDetail(item.id)">
			<view class="line-3"></view>
			<view class="find-main-item-header">
				<view class="find-main-item-header-top">{{item.name}}</view>
				<view class="find-main-item-header-bottom">活动时间：{{item.createTime}}-{{item.endTime}}</view>
			</view>
			<view class="find-main-item-center">
				<image :src="item.titlePic" mode="aspectFill"></image>
			</view>
			<view class="find-main-item-bottom">
				<view class="find-main-item-bottom-left">
					<view class="find-main-item-bottom-left-hot" v-if="item.isActiveing == 0">火热进行中</view>
					<view class="find-main-item-bottom-left-num">{{item.applyNum}}人感兴趣</view>
				</view>
				<view class="find-main-item-bottom-right" @click.stop="joinUs(item)" :class="{noImg: item.isActiveing != 0}">{{item.isActiveing == 0 ? '立即参加' : item.isActiveing == 1 ? '已过期' : '暂未开始'}}</view>
			</view>
		</view>
		<u-empty text="暂无活动" mode="data" v-if = "isEmpty" style = "position: relative; transform: translateY(250%);"></u-empty>
	</view>
</template>

<script>
	export default {
		onLoad () {
			if (uni.getStorageSync('adcode')) {
				this.adcode = uni.getStorageSync('adcode')
			}
			this.initFindList() 
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				findList: [],
				adcode: '',
				isEmpty: false
			}
		},
		methods: {
			goToFindDetail (id) {
				uni.navigateTo({
					url: './FindDetail?id=' + id
				})
			},
			// 数据
			async initFindList () {
				var date1 = this.$dayjs().unix()
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.get_activity_list, {adcode: this.adcode, pageNum: this.pageNum, pageSize: this.pageSize, type: 0}, 'POST', 'FORM')
				
				this.findList = [...this.findList, ...res.rows]
				if (this.findList.length) {
					this.isEmpty = false
				} else {
					this.isEmpty = true
				}
				this.findList.forEach(item => {
					var date2 = this.$dayjs(item.startTime).unix()
					var date3 = this.$dayjs(item.endTime).unix()
					
					if (date1 - date2 >= 0 && date3 - date1 >= 0) {
						item.isActiveing = 0
					} else if (date3 - date1 < 0) {
						item.isActiveing = 1
					} else if (date1 - date2 < 0) {
						item.isActiveing = 2
					}
					
				})
				
				
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			joinUs (item) {
				if (item.isActiveing == 0) {
					uni.navigateTo({
						url: '../WebViewPage/WebViewPage?goUrl=' + item.otherUrl
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '该活动暂未开始或已过期'
					})
				}
			}
		},
		onReachBottom() {
			this.initFindList()
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	.find-main{
		
		padding-bottom: 30rpx;
			.find-main-item{
				// padding-top: 10rpx;
				// padding-bottom: 16rpx;
				// padding: 10rpx 30rpx 16rpx 36rpx;
				box-sizing: border-box;
				.find-main-item-header{
					padding-top: 10rpx;
					padding-left:  36rpx;
					padding-right: 30rpx;
					box-sizing: border-box;
					.find-main-item-header-top{
						font-family: PingFangSC-Medium;
						font-size: 16px;
						color: #141414;
						letter-spacing: -0.34px;
						text-align: justify;
						font-weight: bold;
					}
					.find-main-item-header-bottom{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #686868;
						letter-spacing: -0.24px;
						text-align: justify;
						padding-top: 6rpx;
						padding-bottom: 20rpx;
					}
				}
				.find-main-item-center{
					padding-left:  36rpx;
					padding-right: 30rpx;
					box-sizing: border-box;
					image{
						width: 684rpx;
						height: 374rpx;
					}
				}
				.find-main-item-bottom{
					padding-left:  36rpx;
					padding-right: 30rpx;
					padding-bottom: 16rpx;
					box-sizing: border-box;
					width: 100%;
					height: 92rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.find-main-item-bottom-left{
						display: flex;
						align-items: center;
						.find-main-item-bottom-left-hot{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #FE1818;
							letter-spacing: -0.29px;
						}
						.find-main-item-bottom-left-num{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #232323;
							letter-spacing: -0.29px;
							text-align: justify;
							padding-left: 14rpx;
							box-sizing: border-box;
							font-weight: bold;
						}
					}
					.find-main-item-bottom-right{
						width: 230rpx;
						height: 62rpx;
						line-height: 62rpx;
						text-align: center;
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #FFFFFF;
						letter-spacing: -0.29px;
						background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
						border-radius: 4px;
						&.noImg{
							background-image: none;
							background-color: #c8c9cc;
						}
					}
				}
			}
		}
	
</style>
