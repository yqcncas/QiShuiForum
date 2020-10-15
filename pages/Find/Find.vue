<template>
	<view class="find">
		<mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption">
			<view class="find-header">
				<image :src="findHeader.titlePic ? findHeader.titlePic : '../../static/qslogo.png'" mode="aspectFill" @click = "goToRichPage"></image>
				<view class="find-header-bottom" @click="goToHistory">
					<view class="find-header-bottom-left">
						<image src="../../static/image/ych/my/24.png" mode=""></image>
						<view>推荐活动</view>
					</view>
					<view class="find-header-bottom-right" >
						<view>全部</view>
						<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		
			<view class="find-main">
				<view class="find-main-item" v-for="(item, index) in findList" :key = "index" @click="goToFindDetail(item.id)">
					<view class="line-3"></view>
					<view class="find-main-item-header">
						<view class="find-main-item-header-top">{{item.name}}</view>
						<view class="find-main-item-header-bottom">活动时间：{{item.createTime}}-{{item.endTime}}</view>
					</view>
					<view class="find-main-item-center">
						<image :src="item.titlePic ? item.titlePic : '../../static/qslogo.png'" mode="aspectFill"></image>
					</view>
					<view class="find-main-item-bottom">
						<view class="find-main-item-bottom-left">
							<view class="find-main-item-bottom-left-hot">火热进行中</view>
							<view class="find-main-item-bottom-left-num">{{item.applyNum}}人感兴趣</view>
						</view>
						<view class="find-main-item-bottom-right">立即参加</view>
					</view>
				</view>
			</view>
			<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		onLoad() {
			this.initFindHeaderImg()
			// this.initFindList()
		},
		onShow() {
			console.log(uni.getStorageSync('adcode'))
			if (uni.getStorageSync('adcode')) {
				this.adcode = uni.getStorageSync('adcode')
			}
		},
		onTabItemTap() {
			this.pageNum = 0
			this.pageSize = 10
			this.hasFlag = true
			this.findList = []
			this.initFindList()
		},
		data() {
			return {
				findHeader: {
					titlePic: ''
				},
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				findList: [],
				upOption: {
					use: false
				},
				adcode: ''
			}
		},
		methods: {
			// 详情
			goToFindDetail (id) {
				uni.navigateTo({
					url: './FindDetail?id=' + id
				})
			},
			downCallback () {
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.findList = []
				this.initFindList()
			
				this.mescroll.endDownScroll()
				
			},
			// 数据列表
			async initFindList () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				console.log(this.adcode)
				let res = await this.$fetch(this.$api.get_activity_list, {adcode: this.adcode,pageNum: this.pageNum, pageSize: this.pageSize, type: 1}, 'POST', 'FORM')
				console.log(res)
				this.findList = [...this.findList, ...res.rows]
				let obj = {};
				// 要去重的数组
				this.findList = this.findList.reduce((cur,next) => {
				    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
				    return cur;
				},[]) //设置cur默认类型为数组，并且初始值为空的数组
				console.log(this.findList)
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			// 全部活动
			goToHistory () {
				uni.navigateTo({
					url: './historyFind'
				})
			},
			// 头部图
			async initFindHeaderImg () {
				let res = await this.$fetch(this.$api.getadvertlist, {adcode: this.adcode, type: 5}, "POST", 'FORM')
				console.log(res)
				this.findHeader = res.data[0]
				console.log(this.findHeader)
				if(this.findHeader == undefined) {
					this.findHeader = {
						titlePic: ''
					}
				}
			},
			//　去富文本
			goToRichPage () {
				uni.setStorageSync('RichMainText', this.findHeader.content)
				uni.navigateTo({
					url: '../RichText/RichText?RichMain=' + this.findHeader.content + "&title=" + this.findHeader.title
				})
			}
		},
		onReachBottom() {
			this.initFindList()
		}
	}
</script>

<style lang="less" >
	page::after{
		display: none;
	}
.find{
	padding-bottom: 30rpx;
	.find-header{
		image{
			width: 100%;
			height: 320rpx;
		}
		.find-header-bottom{
			height: 86rpx;
			padding-left: 38rpx;
			padding-right: 32rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.find-header-bottom-left{
				display: flex;
				align-items: center;
				image{
					width: 28rpx;
					height: 28rpx;
				}
				view{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					text-align: justify;
					font-weight: bold;
					padding-left: 10rpx;
					box-sizing: border-box;
				}
			}
			.find-header-bottom-right{
				display: flex;
				align-items: center;
				view{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #545454;
					letter-spacing: -0.29px;
					text-align: justify;
					padding-right: 20rpx;
					box-sizing: border-box;
				}
				image{
					width: 16rpx;
					height: 28rpx;
				}
			}
		}
	}
	.find-main{
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
				}
			}
		}
	}
}
</style>