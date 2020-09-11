<template>
	<view class="shareMoney">
		<view class="shareMoney-header">
			<image :src="signTitle.titlePic ?signTitle.titlePic : '../../static/qslogo.png'"  mode="aspectFill"></image>
		</view>
		<view class="shareMoney-center">
			<view class="shareMoney-center-left">
				<image :src="usreInfo.avatar ? usreInfo.avatar :'../../static/image/ych/avatar.png'" mode="aspectFill"></image>
				<view class="my-money">我的佣金：{{usreInfo.amount}}</view>
			</view>
			<view class="shareMoney-center-right" @click="goToWithdraw">提现</view>
		</view>
		<view class="line-3"></view>
		<view class="shar-list">
			<view class="shar-list-item" v-for="(item, index) in ParticularsList" :key = "index">
				<view class="shar-list-item-left">
					<view class="shar-list-item-left-top">{{item.remark}}</view>
					<view class="shar-list-item-left-bottom">{{item.createTime}}</view>
				</view>
				<view class="shar-list-item-right">{{item.type == 12 ? '-' : '+'}}{{item.amount}}</view>
			</view>
		</view>
		<u-popup v-model="showShareBoxFlag" mode="center" border-radius="14" style = "padding-bottom: 30rpx;">
			<image :src="qrCode" mode="aspectFill" class="qrcode"></image>
			<view class="save-box" >
				<view class="saveImg" @click="save">保存至相册</view>
			</view>
		</u-popup>
		
		<!-- <shareBox :showShareBoxFlag = "showShareBoxFlag" @changeShowBoxFLag = "changeShowBoxFLag" @shareWx = "shareWx"  @shareFre = "shareFre"></shareBox> -->
	
		
	</view>
</template>

<script>
	import baseURL from '../../config/index.js'
	export default {
		onLoad() {
			this.getQrcode()
		},
		onShow() {
			this.initMyInfo()
			this.initFindHeaderImg()
			this.initParticulars()
			
		},
		data () {
			return {
				usreInfo: {},
				signTitle: [],
				pageNum: 0,
				pageSize: 20,
				hasFlag: true,
				ParticularsList: [],
				showShareBoxFlag: false,
				qrCode: ''
			}
		},
		onNavigationBarButtonTap () {
			this.showShareBoxFlag = true
		},
		methods: {
			goToWithdraw () {
				uni.navigateTo({
					url: '../Withdraw/Withdraw?money=' + this.usreInfo.amount
				})
			},
			async getQrcode(){
				let res = await this.$fetch(this.$api.get_user_qrcode, {}, "GET", 'FORM')
				this.qrCode = baseURL + res.data.path
			},
			// 个人信息
			async initMyInfo () {
				let res = await this.$fetch(this.$api.getCurrentUser, {}, 'GET', 'FORM')
				console.log(res)
				res.data.user.amount = res.data.amount
				res.data.user.integral = res.data.integral
				res.data.user.surplusPosts = res.data.surplusPosts
				res.data.user.totalConsum = res.data.totalConsum
				this.usreInfo = res.data.user
			},
			async initFindHeaderImg () {
				let res = await this.$fetch(this.$api.getadvertlist, {type: 6}, "POST", 'FORM')
				console.log(res)
				this.signTitle = res.data[0]
			},
			async initParticulars () {
				if (!this.hasFlag) return
				
				this.pageNum = ++this.pageNum
				
				let res= await this.$fetch(this.$api.my_wallet_details, {typeIn:"12, 19", pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				
				console.log(res)
				this.ParticularsList = [...this.ParticularsList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			
			changeShowBoxFLag (newV) {
				console.log(newV)
				this.showShareBoxFlag = newV
			},
			// 分享
			handleShareFlag () {
				this.showShareBoxFlag = true
			},
			
			// 微信分享
			shareWx () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "https://qsw-h5.bajiaostar.xyz/#/?code=" + uni.getStorageSync('userId'),
				    title: "汽水论坛分享",
				    summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
					imageUrl: "../../static/qslogo.png",
					success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			shareFre () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
					href: "https://qsw-h5.bajiaostar.xyz/#/?code=" + uni.getStorageSync('userId'),
					title: "汽水论坛分享",
					summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
					imageUrl: '../../static/qslogo.png',
					success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			save() {
				
				uni.downloadFile({
						url: this.qrCode,
						success: (res) =>{
							if (res.statusCode === 200){
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success: function() {
										uni.showToast({
											title: "保存成功",
											icon: "none"
										});
									},
									fail: function() {
										uni.showToast({
											title: "保存失败，请稍后重试",
											icon: "none"
										});
									}
								});
							}
						}
					})
			}
		}
	}
</script>

<style lang="less">
	.shareMoney{
		.shareMoney-header{
			image{
				width: 100%;
				height: 366rpx;
			}
		}
		.shareMoney-center{
			width: 100%;
			height: 134rpx;
			padding: 0 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.shareMoney-center-left{
				display: flex;
				align-items: center;
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
				.my-money{
					padding-left: 32rpx;
					box-sizing: border-box;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: 0.01px;
					text-align: justify;
				}
			}
			.shareMoney-center-right{
				width: 136rpx;
				height: 66rpx;
				background: #FFFFFF;
				border: 1px solid #FF7B30;
				border-radius: 18.5px;
				text-align: center;
				line-height: 66rpx;
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #FF7B30;
				letter-spacing: 0.01px;
			}
		}
		.shar-list{
			.shar-list-item{
				padding: 32rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #f4f4f4;
				box-sizing: border-box;
				&:nth-last-child{
					border-bottom: 0;
				}
				.shar-list-item-left{
					.shar-list-item-left-top{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #262626;
						letter-spacing: 0.01px;
					}
					.shar-list-item-left-bottom{
						font-family: PingFangSC-Regular;
						font-size: 11px;
						color: #262626;
						letter-spacing: 0.01px;
					}
				}
				.shar-list-item-right{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: 0.01px;
				}
			}
		}
		.qrcode{
			padding: 60rpx 20rpx;
		}
		.save-box{
			padding-bottom: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.saveImg{
				width: 500rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				background-image: linear-gradient(180deg, #3EDCDF 0%, #1DB7BC 100%);
				border-radius: 17.5px;
				color: #FFFFFF;
			}
		}
	
		
	}
</style>
