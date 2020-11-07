<template>
	<view class="my">
		<scroll-view scroll-y="true"  style="height: 100vh;">
			<u-navbar :is-back="false" title="我的" :background="background" title-color = "black" title-size = "34">
				<!-- <view class="slot-wrap"> -->
						<view class="navbar-right" slot="right" >
							<view class="message-box right-item" @click.stop="saoyisao">
								<image src="../../static/image/ych/my/29.png" mode=""></image>
							</view>
							<view class="dot-box right-item" @click.stop="goToMessage">
								<!-- <u-icon name="calendar-fill" size="38"></u-icon> -->
								<image :src="redShow ? '../../static/image/ld1.png' : '../../static/image/ld.png'" mode=""></image>
								<!-- <u-badge size="mini" :is-dot="true" :offset="[2, 6]"></u-badge> -->
							</view>
						</view>
				<!-- </view> -->
			</u-navbar>
		
<!-- 		<view class="my-header" @click="goToMyHomePage">
			<view class="my-header-left">
				<view class="user-avatar">
					<image :src="usreInfo.avatar ? usreInfo.avatar :'../../static/image/ych/avatar.png'" mode="aspectFill"></image>
					<image src="../../static/image/ych/my/22.png" mode="" class="renzhen"></image>
				</view>
				<view class="user-info">
					<view class="user-info-top">
						<view class="user-info-top-name">{{usreInfo.userName ? usreInfo.userName: '未登录'}}</view>
						<image src="../../static/image/ych/my/1.png" mode="aspectFill" v-if="usreInfo.sex == 0"></image>
						<image src="../../static/image/ych/my/2.png" mode="aspectFill" v-if="usreInfo.sex == 1"></image>
						<view class="user-info-top-level">Lv.{{usreInfo.level}}</view>
					</view>
					<view class="user-info-center">{{usreInfo.phonenumber}}</view>
					<view class="user-info-footer">{{usreInfo.gxSign ? usreInfo.gxSign : '还没有个性签名，快去编辑吧！' }}</view>
				</view>
			</view>
			<view class="my-header-right">
				<view class="my-header-right-text">个人主页</view>
				<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="my-header-main">
			<view class="my-header-main-left-box" @click="goToMyInfo(usreInfo)">
				<image src="../../static/image/ych/my/6.png" mode="aspectFill"></image>
				<view class="my-header-main-left">编辑资料</view>
			</view>
			<view class="line"></view>
			<view class="my-header-main-left-box" @click="goToSign">
				<image src="../../static/image/ych/my/7.png" mode="aspectFill"></image>
				<view class="my-header-main-left">每日签到</view>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="my-banner">
			<view class="my-banner-wrapper">
				<view class="my-banner-wrapper-left">
					<image src="../../static/image/ych/my/3.png" mode=""></image>
					<view class="my-banner-wrapper-left-main" @click="goToMyWallet">
						<view class="my-banner-wrapper-left-main-top">{{usreInfo.amount}}</view>
						<view class="my-banner-wrapper-left-main-bottom">钱包</view>
					</view>
				</view>
				<view class="my-banner-wrapper-left">
					<image src="../../static/image/ych/my/4.png" mode=""></image>
					<view class="my-banner-wrapper-left-main" @click="goToParticulars">
						<view class="my-banner-wrapper-left-main-top">{{usreInfo.integral}}</view>
						<view class="my-banner-wrapper-left-main-bottom">积分</view>
					</view>
				</view>
				<view class="my-banner-wrapper-left">
					<image src="../../static/image/ych/my/5.png" mode=""></image>
					<view class="my-banner-wrapper-left-main">
						<view class="my-banner-wrapper-left-main-top">Lv.{{usreInfo.level}}</view>
						<view class="my-banner-wrapper-left-main-bottom">等级</view>
					</view>
				</view>
			</view>
		</view>
	 -->
		<view class="new-my-header-box">
			<view class="new-my-header-box-top">
				<view class="new-my-header-box-avatar" @click="goToMyHomePage">
					<image :src="usreInfo.avatar ? usreInfo.avatar :'../../static/image/ych/avatar.png'" mode="aspectFill"></image>
					<view class="new-my-header-box-level">Lv.{{usreInfo.level}}</view>
				</view>
				<view class="new-my-header-box-info" @click="goToMyInfo(usreInfo)">
					<view class="new-my-header-box-info-wrapper">
						<image src="../../static/image/ych/my/1.png" mode="aspectFill" v-if="usreInfo.sex == 0"></image>
						<image src="../../static/image/ych/my/2.png" mode="aspectFill" v-if="usreInfo.sex == 1"></image>
						<view class="new-my-header-box-info-name">{{usreInfo.userName ? usreInfo.userName: '未登录'}}</view>
					</view>
					
					<!-- <view class="new-my-header-box-info-label" v-for="(item, index) in usreInfo.userLabel">{{item}}</view> -->
				</view>
				<view class="new-my-header-box-info-label-box">
					<view class="new-my-header-box-info-label" v-for="(item, index) in usreInfo.userLabel">{{item}}</view>
					<view class="new-my-header-box-info-label" v-if="usreInfo.plateName">{{usreInfo.plateName}}板块版主</view>
				</view>
				<view class="new-my-header-box-sign" @click="goToMyInfo(usreInfo)">{{usreInfo.gxSign ? usreInfo.gxSign : '还没有个性签名，快去编辑吧！' }}</view>
				<view class="new-my-header-box-status" @click="goToMyHomePage">
					<view class="new-my-header-box-status-item">
						<view class="new-my-header-box-status-item-top">{{usreInfo.integral}}</view>
						<view class="new-my-header-box-status-item-bottom">积分</view>
					</view>
					<view class="new-my-header-box-status-item">
						<view class="new-my-header-box-status-item-top">{{usreInfo.followNum}}</view>
						<view class="new-my-header-box-status-item-bottom">关注</view>
					</view>
					<view class="new-my-header-box-status-item">
						<view class="new-my-header-box-status-item-top">{{usreInfo.fanceNum}}</view>
						<view class="new-my-header-box-status-item-bottom">粉丝</view>
					</view>
					<view class="new-my-header-box-status-item">
						<view class="new-my-header-box-status-item-top">{{usreInfo.articleNum}}</view>
						<view class="new-my-header-box-status-item-bottom">动态</view>
					</view>
				</view>
				<view class="new-my-header-box-top-userPage" @click="goToMyHomePage">
					<view class="my-header-right-text">个人主页</view>
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="new-my-header-box-bottom">
				<view class="new-my-header-box-bottom-box">
					<view class="new-my-header-box-bottom-item" @click="goToMyInfo(usreInfo)">
						<image src="../../static/image/ych/newMy/4.png" mode="aspectFill"></image>
						<view class="new-my-header-box-bottom-item-text">编辑资料</view>
					</view>
					<view class="new-my-header-box-bottom-item" @click="goToSign">
						<image src="../../static/image/ych/newMy/5.png" mode="aspectFill"></image>
						<view class="new-my-header-box-bottom-item-text">每日签到</view>
					</view>
					<view class="new-my-header-box-bottom-item" @click="goToMyWallet">
					<image src="../../static/image/ych/newMy/6.png" mode="aspectFill"></image>
					<view class="new-my-header-box-bottom-item-text">钱包</view>
					</view>
				</view>
			</view>
			
		</view>
	 
		<view class="my-main">
			<view class="my-main-top">
				<view class="my-main-top-line-box">
					<view class="my-main-top-line"></view>
					<view class="line-circle"></view>
				</view>
				<view class="my-main-top-title">日常管理</view>
				<view class="my-main-top-line-box">
					<view class="line-circle"></view>
					<view class="my-main-top-line"></view>
				</view>
			</view>
			<view class="my-main-center">
				<view class="my-main-item" @click="goToJFMarket">
					<image src="../../static/image/ych/my/8.png" mode="aspectFill"></image>
					<view>积分商城</view>
				</view>
				<view class="my-main-item" @click="goToShareMoney">
					<image src="../../static/image/ych/my/9.png" mode="aspectFill"></image>
					<view>分享赚钱</view>
				</view>
				<view class="my-main-item" @click="goToMyOrder">
					<image src="../../static/image/ych/my/10.png" mode="aspectFill"></image>
					<view>我的订单</view>
				</view>
				<view class="my-main-item" @click="goToFootPrint">
					<image src="../../static/image/ych/my/20.png" mode="aspectFill"></image>
					<view>浏览足迹</view>
				</view>
				<view class="my-main-item" @click="gotoMyCollect">
					<image src="../../static/image/ych/my/11.png" mode="aspectFill"></image>
					<view>我的收藏</view>
				</view>
				<view class="my-main-item" @click="goToDrafts">
					<image src="../../static/image/ych/my/12.png" mode="aspectFill"></image>
					<view>草稿箱</view>
				</view>
				<view class="my-main-item" @click="goToComment">
					<image src="../../static/image/ych/my/13.png" mode="aspectFill"></image>
					<view>评论管理</view>
				</view>
				<view class="my-main-item" @click="goToSetting">
					<image src="../../static/image/ych/my/14.png" mode="aspectFill"></image>
					<view>设置</view>
				</view>
				<view class="my-main-item" @click="goToRichText">
					<image src="../../static/image/ych/my/32.png" mode="aspectFill"></image>
					<view>客服中心</view>
				</view>
			<!-- 	<view class="my-main-item" @click="goToCheerBag">
					<image src="../../static/image/ych/my/15.png" mode="aspectFill"></image>
					<view>我的加油包</view>
				</view> -->
			</view>
		
			<view class="my-main-top two">
				<view class="my-main-top-line-box">
					<view class="my-main-top-line"></view>
					<view class="line-circle"></view>
				</view>
				<view class="my-main-top-title">商户管理</view>
				<view class="my-main-top-line-box">
					<view class="line-circle"></view>
					<view class="my-main-top-line"></view>
				</view>
			</view>
			<view class="my-main-center">
				<view class="my-main-item" @click="goToMyWallet">
					<image src="../../static/image/ych/my/16.png" mode="aspectFill"></image>
					<view>我的钱包</view>
				</view>
				<view class="my-main-item" @click="goToRuZhu">
					<image src="../../static/image/ych/my/17.png" mode="aspectFill"></image>
					<view>商家入驻</view>
				</view>
				<view class="my-main-item" @click="goToMyAdvertising">
					<image src="../../static/image/ych/my/18.png" mode="aspectFill"></image>
					<view>我的广告</view>
				</view>
				<view class="my-main-item" @click="goToMerchant">
					<image src="../../static/image/ych/my/19.png" mode="aspectFill"></image>
					<view>商品核销</view>
				</view>
			
			</view>
					
		</view>
		</scroll-view>
		<view class="readCircle"></view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
		},
		onShow() {
			// var webView = this.$mp.page.$getAppWebview();
			
			// // 修改buttons    
			// // index: 按钮索引, style {WebviewTitleNViewButtonStyles }    
			//     webView.setTitleNViewButtonStyle(1, {    
			//          text: '\ue60d',    
			// });
			if (uni.getStorageSync('newMessageFlag')) {
				this.redShow = true
			} else {
				this.redShow = false
			}
			this.initMyInfo()
			this.$fetch(this.$api.get_new_version, {type: 1}, "GET", "FORM")
		},
		data () {
			return {
				usreInfo: {},
				background: {
					backgroundColor: '#fff',
				},
				redShow: false
			}
		},
		onNavigationBarButtonTap (e) {
			console.log(e)
			if (e.index == 0) {
				uni.navigateTo({
					url: '../Message/Message'
				})
			} else if (e.index == 1) {
				uni.scanCode({
				    onlyFromCamera: true,
				    success:  async (res) => {
						console.log(res)
						let msg = await this.$fetch(this.$api.write_off_goods, {code: res.result}, "POST", 'FORM')
						console.log(msg)
				    }
				});
			}
			
		},
		methods: {
			goToMessage () {
				uni.navigateTo({
					url: '../Message/Message'
				})
			},
			saoyisao () {
				uni.scanCode({
				    onlyFromCamera: true,
				    success:  async (res) => {
						
						let msg = await this.$fetch(this.$api.write_off_goods, {code: res.result}, "POST", 'FORM')
						console.log(msg)
						if (msg.code == 0) {
							uni.showToast({
								icon: 'success',
								title: msg.msg
							})
						}
				    }
				});
			},
			// 个人信息
			async initMyInfo () {
				let adcode = ''
				if (uni.getStorageSync('adcode')) {
					adcode = uni.getStorageSync('adcode')
				}
				let res = await this.$fetch(this.$api.getCurrentUser, {adcode: adcode}, 'GET', 'FORM')
				console.log(res)
				res.data.user.amount = res.data.amount
				res.data.user.integral = res.data.integral
				res.data.user.surplusPosts = res.data.surplusPosts
				res.data.user.totalConsum = res.data.totalConsum
			
				res.data.user.fanceNum = res.data.fanceNum
				res.data.user.articleNum = res.data.articleNum
				
				res.data.user.followNum = res.data.followNum
				res.data.user.plateName = res.data.plateName
				
				this.usreInfo = res.data.user
				if (this.usreInfo.userLabel.length) {
					this.usreInfo.userLabel = this.usreInfo.userLabel.split(',')
				}
				console.log(this.usreInfo)
				uni.setStorageSync('userId', this.usreInfo.userId)
				uni.setStorageSync('userAvatar', this.usreInfo.avatar)
				uni.setStorageSync('userName', this.usreInfo.userName)
				uni.setStorageSync('userLevel', this.usreInfo.level)
				uni.setStorageSync('plateName', this.usreInfo.plateName)
				if (res.data.token) {
					uni.setStorageSync('token', res.data.token)
				}
			},
			
			
			// 去个人信息
			goToMyInfo (userInfo) {
				uni.navigateTo({
					url: './MyInfo?userInfo=' + JSON.stringify(userInfo)
				})
			},
			// 去收藏
			gotoMyCollect () {
				uni.navigateTo({
					url: './MyCollect'
				})
			},
			// 去个人主页
			goToMyHomePage () {
				uni.navigateTo({
					url: './UserHomePage?type=' + 0 + '&userId=' + this.usreInfo.userId
				})
			},
			// 去充值包
			goToCheerBag () {
				uni.navigateTo({
					url: './MyCheerBag?avatar=' + this.usreInfo.avatar + "&name=" + this.usreInfo.userName + '&sex=' + this.usreInfo.sex + '&level=' + this.usreInfo.level + '&phonenumber=' + this.usreInfo.phonenumber + '&surplusPosts=' + this.usreInfo.surplusPosts
				})
			},
			// 去积分商城
			goToJFMarket () {
				uni.navigateTo({
					url: '../Market/JiFenMarket'
				})
			},
			// 去签到
			goToSign () {
				uni.navigateTo({
					url: '../Sign/Sign'
				})
			},
			// 去分享赚钱
			goToShareMoney () {
				uni.navigateTo({
					url: './shareMoney'
				})
			},
			// 去我的订单
			goToMyOrder () {
				uni.navigateTo({
					url: './MyOrder'
				})
			},
			// 去草稿箱
			goToDrafts () {
				uni.navigateTo({
					url: './Drafts'
				})
			},
			// 去商家核销
			goToMerchant () {
				uni.navigateTo({
					url: './Merchant'
				})
			},
			// 去商家入驻
			goToRuZhu () {
				uni.navigateTo({
					url: './SettledEnterprise'
				})
			},
			// 去浏览足迹
			goToFootPrint() {
				uni.navigateTo({
					url: './FootPrint'
				})
			},
			// 去我的钱包
			goToMyWallet () {
				uni.navigateTo({
					url: '../MyWallet/MyWallet?myMoney=' + this.usreInfo.amount + '&totalMoney=' + this.usreInfo.totalConsum
				})
			},
			// 去设置
			goToSetting () {
				uni.navigateTo({
					url: './Setting?phone=' + this.usreInfo.phonenumber
				})
			},
			// 去我的广告
			goToMyAdvertising () {
				console.log(this.usreInfo.merchantFlag)
				if (this.usreInfo.merchantFlag == 1) {
					uni.navigateTo({
						url: './Advertising'
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '请先进行商家入驻,通过审核即可投放'
					})
				}
				
			},
			goToComment () {
				uni.navigateTo({
					url: '../Message/Comment?type=' + 0
				})
			},
			// 积分
			goToParticulars () {
				uni.navigateTo({
					// url: './Particulars?type=' + 1
					url: '../MyWallet/Particulars?type=' + 1
				}) 
			},
			goToRichText () {
				uni.navigateTo({
					url: '../RichText/RichText?id=' + 20
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
		overflow: hidden;
	}
	.my{
		padding-bottom: 30rpx;
		.slot-wrap {
				display: flex;
				align-items: center;
				flex: 1;
		}
		.navbar-right {
				margin-right: 24rpx;
				display: flex;
		}
		.right-item {
			margin: 0 12rpx;
			position: relative;
			color: #ffffff;
			display: flex;
			image{
				width: 42rpx;
				height: 42rpx;
			}
		}
	
		.my-header{
			width: 100%;
			height: 180rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			.my-header-left{
				display: flex;
				align-items: center;
				.user-avatar{
					padding-left: 36rpx;
					padding-right: 20rpx;
					box-sizing: border-box;
					position: relative;
					image{
						width: 136rpx;
						height: 136rpx;
						border-radius: 50%;
					}
					.renzhen{
						position: absolute;
						bottom: 0;
						right: 30rpx;
						width: 28rpx;
						height: 28rpx;
					}
				}
				.user-info{
					.user-info-top{
						display: flex;
						align-items: center;
						.user-info-top-name{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
							text-align: justify;
						}
						image{
							width: 32rpx;
							height: 32rpx;
							margin: 0 12rpx;
							box-sizing: border-box;
						}
						.user-info-top-level{
							font-family: PingFangSC-Medium;
							font-size: 10px;
							color: #FF7B30;
							letter-spacing: -0.24px;
							text-align: center;
							background: #FFFFFF;
							border: 1px solid #FF7B30;
							border-radius: 1px;
							padding: 0 6rpx;
						}
					}
					.user-info-center{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #141414;
						letter-spacing: -0.29px;
						text-align: justify;
					}
					.user-info-footer{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #141414;
						letter-spacing: -0.29px;
						text-align: justify;
					}
				}
			}
			.my-header-right{
				display: flex;
				align-items: center;
				padding-right: 36rpx;
				box-sizing: border-box;
				.my-header-right-text{
					font-family: PingFangSC-Medium;
					font-size: 12px;
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
		.my-header-main{
			width: 100%;
			height: 72rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.my-header-main-left-box{
				width: 49%;
				height: 100%;
				// text-align: center;
				display: flex;
				align-items: center;
				
				justify-content: center;
				image{
					width: 26rpx;
					height: 26rpx;
				}
				.my-header-main-left{
					line-height: 72rpx;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					text-align: justify;
					display: inline-block;
				}
			}
			.line{
				width: 1rpx;
				height: 44rpx;
				background-color: #E3E3E3;;
			}
		}
		.my-banner{
			width: 100%;
			height: 162rpx;
			display: flex;
			justify-content: space-around;
			align-items: flex-end;
			.my-banner-wrapper{
				// width: 600rpx;
				height: 140rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-image: url(../../static/image/ych/my/21.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				// background-color: skyblue;
				.my-banner-wrapper-left{
					display: flex;
					align-items: center;
					padding-left: 46rpx;
					box-sizing: border-box;
					&:last-child{
						padding-right: 46rpx;
						
					}
					image{
						width: 64rpx;
						height: 64rpx;
					}
					.my-banner-wrapper-left-main{
						padding-left: 30rpx;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						align-items: center;
						.my-banner-wrapper-left-main-top{
							font-family: PingFangSC-Medium;
							font-size: 16px;
							color: #FFFFFF;
							letter-spacing: -0.39px;
							text-align: justify;
						}
						.my-banner-wrapper-left-main-bottom{
							padding-top: 10rpx;
							box-sizing: border-box;
							font-family: PingFangSC-Medium;
							font-size: 10px;
							color: #121212;
							letter-spacing: -0.29px;
							text-align: justify;
						}
					}
				}
			}
		}
		.my-main{
			// padding-top: 26rpx;
			padding-top: 60rpx;
			// padding-left: 64rpx;
			// padding-right: 64rpx;
			box-sizing: border-box;
			.my-main-top{
				display: flex;
				align-items: center;
				justify-content: center;
				padding-bottom: 16rpx;
				box-sizing: border-box;
				&.two{
					padding-top: 20rpx;
					box-sizing: border-box;
				}
				.my-main-top-line-box{
					display: flex;
					align-items: center;
					.my-main-top-line{
						width: 170rpx;
						height: 1rpx;
						background-color: #FFE5BC;
					}
					.line-circle{
						width: 10rpx;
						height: 10rpx;
						border-radius: 50%;
						background-color: #F7AE5E;
					}
				}
				.my-main-top-title{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding: 0 26rpx;
					box-sizing: border-box;
				}
			}
			.my-main-center{
				display: flex;
				
				flex-wrap: wrap;
				padding-bottom: 90rpx;
				.my-main-item{
					width: 25%;
					
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					// margin-right: 86rpx;
					margin-top: 38rpx;
					box-sizing: border-box;
					&:nth-child(4n){
						margin-right: 0;
					}
					
					&:nth-child(1){
						margin-top: 0;
					}
					&:nth-child(2){
						margin-top: 0;
					}
					&:nth-child(3){
						margin-top: 0;
					}
					&:nth-child(4){
						margin-top: 0;
					}
					image{
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}
					view{
						padding-top: 8rpx;
						box-sizing: border-box;
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #545454;
						letter-spacing: -0.29px;
					}
				}
			}
		}
		.new-my-header-box{
			width: 100%;
			height: 580rpx;
			// background: #f40;
			.new-my-header-box-top{
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-image: linear-gradient(180deg, #dfbf00 0%, #ff7300 100%);
				position: relative;
				.new-my-header-box-avatar{
					position: relative;
					padding-top: 25rpx;
					image{
						width: 210rpx;
						height: 210rpx;
						border-radius: 50%;
					}
					.new-my-header-box-level{
						position: absolute;
						bottom: -10rpx;
						left: 50%;
						transform: translateX(-50%);
						height: 40rpx;
						line-height: 40rpx;
						padding: 14rpx;
						border-radius: 10rpx;
						font-size: 12px;
						border: 4rpx solid #74b7ec;
						box-sizing: border-box;
						color: #FFFFFF;
						background-color: #2786cd;
						display: flex;
						align-items: center;
					}
				}
				.new-my-header-box-info{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					padding-top: 20rpx;
					box-sizing: border-box;
					transform: translateX(-22rpx);
				
					.new-my-header-box-info-wrapper{
						// width: 58%;
						
						display: flex;
						justify-content: flex-end;
						align-items: center;
						image{
							width: 32rpx;
							height: 32rpx;
							margin-right:12rpx;
							box-sizing: border-box;
						}
						.new-my-header-box-info-name{
							font-weight: bold;
						}
					}
					.new-my-header-box-info-label{
						padding: 1px 5px;
						background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
						border-radius: 1px;
						box-sizing: border-box;
						font-family: PingFangSC-Medium;
						font-size: 8px;
						color: #FFFFFF;
						letter-spacing: -0.19px;
						text-align: center;
						margin-left: 10rpx;
						box-sizing: border-box;
					}
					
				}
				.new-my-header-box-info-label-box{
					display: flex;
					align-items: center;
					justify-content: center;
					.new-my-header-box-info-label{
						padding: 1px 5px;
						background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
						border-radius: 1px;
						box-sizing: border-box;
						font-family: PingFangSC-Medium;
						font-size: 8px;
						color: #FFFFFF;
						letter-spacing: -0.19px;
						text-align: center;
						// margin-left: 10rpx;
						margin-right: 10rpx;
						box-sizing: border-box;
					}
				}
				.new-my-header-box-sign{
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #141414;
					letter-spacing: -0.29px;
					text-align: justify;
					padding-top: 10rpx;
					font-weight: bold;
				}
				.new-my-header-box-status{
					width: 100%;
					padding-top: 20rpx;
					padding-bottom: 60rpx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					.new-my-header-box-status-item{
						flex: 1;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						.new-my-header-box-status-item-top{
							font-weight: bold;
							padding-bottom: 5rpx;
						}
					}
				}
				.new-my-header-box-top-userPage{
					position: absolute;
					right: 30rpx;
					top: 30rpx;
					display: flex;
					align-items: center;
					.my-header-right-text{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #545454;
						letter-spacing: -0.29px;
						text-align: justify;
						padding-right: 10rpx;
						box-sizing: border-box;
					}
					image{
						width: 16rpx;
						height: 28rpx;
					}
				}
			}
			.new-my-header-box-bottom{
				width: 100%;
				height: 120rpx;
				padding: 0 30rpx;
				// transform: translateY(-80rpx);
				
				.new-my-header-box-bottom-box{
					width: 100%;
					height: 120rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 30rpx;
					box-sizing: border-box;
					overflow: hidden;
					box-shadow: 2px 2px 7px 7px rgba(0,0,0,0.07);
					transform: translateY(-45rpx);
					position: relative;
					
					background-color: #fff;
					z-index: 999;
				}
				.new-my-header-box-bottom-item{
					flex: 1;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}
		.readCircle{
			// width: 20rpx;
			// height: 20rpx;
			// border-radius: 50%;
			// background-color: #f40;
			// position: absolute;
			// top: 0;
		}
	}
</style>
