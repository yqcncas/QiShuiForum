<template>
	<view class="IndexTabConfig">
		<Status></Status>
		<view class="IndexTabConfig-top">
			<view class="IndexTabConfig-top-left">推荐栏目</view>
			<view class="IndexTabConfig-top-right">
				<view class="IndexTabConfig-top-right-left" @click="handleShowCloseImg">编辑</view>
				<image src="../../static/image/ych/index/12.png" mode="" @click = "goBack"></image>
			</view>
		</view>
		<!-- 默认配置 -->
		<view class="IndexTabConfig-top-list">
			<view class="IndexTabConfig-top-list-moren" v-for="item in defaultArr" :key = "item.id">{{item.plateName}}</view>
			<!-- 记得key要改 -->
		</view>
		<!-- 自己添加的 -->
		<view class="my-tag-box">
			<view class="my-tag" v-for="item in fancyArr" :key = "item.id">
				<view class="my-tag-text">{{item.plateName}}</view>
				<image src="../../static/image/ych/index/14.png" mode="aspectFill" v-if="showCloseImg" @click = "deleteFancyArr(item.id, item.plateName)"></image>
			</view>
		</view>
		<!-- 可以添加的 -->
		<view class="more-list">
			<view class="more-list-top">更多栏目</view>
			<view class="more-list-bottom">
				<view class="more-list-bottom-item" v-for="item in canAddArr" :key = "item.id" @click="addTabConfig(item.id, item.plateName)">
					<view class="more-list-bottom-item-text">{{item.plateName}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
			this.initMyInfo()
		},
		data () {
			return {
				defaultArr: [], // 默认配置
				fancyArr: [], //　已添加
				showCloseImg: false,
				canAddArr: [],// 可添加
				recommendPlate: [], // 用来判断用户已添加的标识
			}
		},
		methods: {
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			// 点击编辑
			handleShowCloseImg () {
				this.showCloseImg = !this.showCloseImg
			},
			// 获取所有版块
			async initAllTabConfig () {
				let res = await this.$fetch(this.$api.getAllPlate, {}, "POST", 'FORM')
				console.log(res)
				// this.defaultArr = res.data
				res.data.forEach(item => {
					if (item.isDefault == 1) {
						this.defaultArr.push(item)
					}
					if (item.isDefault == 0) {
						this.canAddArr.push(item)
					}
					this.recommendPlate.forEach((it) => { // 4 6 7 
						// if(it==item.id){
						// 		this.fancyArr.push(item)
						// 		this.canAddArr.remove(item);
						// }

						this.canAddArr.forEach((canAddArr, i) => {
							if (canAddArr.id == it) {
								// console.log(index)
								this.fancyArr.push(...this.canAddArr.splice(i, 1))
							}
						})
						
					})
				})
			},
			// 添加版块
			addTabConfig (id, name) {
				// console.log(this.canAddArr.indexOf(id))
				uni.showModal({
				    title: '提示',
				    content: '确定添加' + name + '版块么',
				    success: async (res) => {
				        if (res.confirm) {
							let fancyArr = []
				            this.canAddArr.forEach((item, index) => {
				            	if (item.id == id) {
				            		console.log(index)
				            		this.fancyArr.push(...this.canAddArr.splice(index, 1))
				            	}
				            })
							this.fancyArr.forEach(item => {
								fancyArr.push(item.id)
							})
							console.log(fancyArr)
							uni.setStorageSync('TabConfigFlag', true)
							let msg = await this.$fetch(this.$api.updUserPlate, {plate: fancyArr}, "POST", 'FORM')
							console.log(msg)
							
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
				
			},
			// 获取个人信息
			async initMyInfo () {
				let adcode = ''
				if (uni.getStorageSync('adcode')) {
					adcode = uni.getStorageSync('adcode')
				}
				let res = await this.$fetch(this.$api.getCurrentUser, {adcode: adcode}, 'GET', 'FORM')
				console.log(res)
				this.recommendPlate = res.data.user.recommendPlate.split(',')
				console.log(this.recommendPlate)
				this.initAllTabConfig()
			},
			// 删除Tab
			deleteFancyArr (id, name) {
				uni.showModal({
				    title: '提示',
				    content: '确定删除' + name + '版块么',
				    success: async (res) => {
				        if (res.confirm) {
							let fancyArr = []
				            this.fancyArr.forEach((item, index) => {
				            	if (item.id == id) {
				            		console.log(index)
				            		this.canAddArr.push(...this.fancyArr.splice(index, 1))
									
									this.fancyArr.forEach(item => {
										fancyArr.push(item.id)
									})
									
				            	}
				            })
							uni.setStorageSync('TabConfigFlag', true)
							let msg = await this.$fetch(this.$api.updUserPlate, {plate: fancyArr}, "POST", 'FORM')
							console.log(msg)
	
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="less">
	.IndexTabConfig{
		.IndexTabConfig-top{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: calc(32rpx + var(--status-bar-height)) ;
			padding-bottom: 30rpx;
			box-sizing: border-box;
			.IndexTabConfig-top-left{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-left: 32rpx;
				font-weight: bold;
			}
			.IndexTabConfig-top-right{
				display: flex;
				align-items: center;
				padding-right: 46rpx;
				box-sizing: border-box;
				.IndexTabConfig-top-right-left{
					width: 88rpx;
					height: 44rpx;
					text-align: center;
					line-height: 44rpx;
					border: 1px solid #FF7B30;
					border-radius: 3px;
					margin-right: 32rpx;
					box-sizing: border-box;
					color: #FF7B30;
					font-size: 10px;
				}
				image{
					width: 20rpx;
					height: 20rpx;
				}
			}
		}
		.IndexTabConfig-top-list{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.IndexTabConfig-top-list-moren{
				width: 25%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				text-align: center;
			}
		}
		.my-tag-box{
			// padding-left: 52rpx;
			// padding-right: 52rpx;
			// padding-top: 10rpx;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			.my-tag{
				display: inline-block;
				// width: 25%;
				// width: 96rpx;
				// padding: 0 12rpx;
				position: relative;
				// border: 1px solid #FF7B30;
				// border-radius: 3px;
				// text-align: center;
				margin-top: 15rpx;
				// margin-left: 32rpx;
				// margin-right: 108rpx;
				text-align: center;
				width: 25%;
				&:nth-child(4n){
					// margin-right: 0;
				}
				.my-tag-text{
					// width: 100%;
					display: inline-block;
				
					padding: 0 12rpx;
					border: 1px solid #FF7B30;
					border-radius: 3px;
					text-align: center;
					height: 44rpx;
					line-height: 44rpx;
					text-align: center;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: -0.34px;
				}
				image{
					position: absolute;
					right: 20%;
					top: -10rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		.more-list{
			.more-list-top{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				font-weight: bold;
				padding-left: 32rpx;
				padding-top: 36rpx;
				padding-bottom: 20rpx;
				box-sizing: border-box;
			}
			.more-list-bottom{
				width: 100%;
				// padding-left: 56rpx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				.more-list-bottom-item{
					width: 25%;
					// display: inline-block;
					text-align: center;
					padding: 0 12rpx;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: -0.34px;
					// border: 1px solid #FF7B30;
					// border-radius: 3px;
					// margin-right: 108rpx;
					margin-bottom: 18rpx;
					box-sizing: border-box;
					// &:nth-child(4n){
					// 	margin-right: 0;
					// }
					.more-list-bottom-item-text{
						display: inline-block;
										
						padding: 0 12rpx;
						border: 1px solid #FF7B30;
						border-radius: 3px;
						text-align: center;
						height: 44rpx;
						line-height: 44rpx;
						text-align: center;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #FF7B30;
						letter-spacing: -0.34px;
					}
				}
			}
		}
	}
</style>
