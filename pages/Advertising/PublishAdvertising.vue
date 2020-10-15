<template>
	<view class="PublishAdvertising">
		<view class="PublishAdvertising-header">
			<view class="PublishAdvertising-header-left">投放天数*</view>
			<input type="number" v-model="day" @blur="changPrice" placeholder="单行输入" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;letter-spacing: -0.34px;" />
		</view>
		<view class="PublishAdvertising-header">
			<view class="PublishAdvertising-header-left">商家名称*</view>
			<input type="text" v-model="title" placeholder="单行输入" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;letter-spacing: -0.34px;" />
		</view>
		<view class="PublishAdvertising-center">
			<textarea  placeholder="内容描述" v-model="content"  placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #909090;letter-spacing: -0.34px;"/>
		</view>
		<view class="line-3"></view>
		<view class="add-img-box">
			<view class="add-img-box-title">添加图片</view>
			<view class="img-wrapper">
				<!-- <image src="../../static/image/ych/Advertising/1.png" mode=""></image> -->
				<u-upload :action="action" :file-list="fileList" @on-uploaded="onUploaded" :form-data = "QNtoken" max-count="3"  @on-remove="onRemove"></u-upload>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="price">
			<view class="price-left">金额</view>
			<view class="price-right">{{payPrice}}元</view>
		</view>
		<view class="pay-button" @click="handleShowPayFlag">去支付</view>
		
		
		
<!-- 		<u-popup v-model="showPayPopFlag" mode="bottom" border-radius="14">
				<view class="popupPay-header">
					<view class="popupPay-header-left">请选择支付方式</view>
	
				</view>
	
				<view class="popupPay-item" v-for="(popPay, index) in payInfo" :key="index" @tap="handleCircle(index)">
					<view class="circle">
						<view class="n-circle" v-show="circleShowFlag == index"></view>
					</view>
					<image :src="popPay.image" mode="aspectFill"></image>
					<view class="pay-way">
						{{ popPay.text }}
	
					</view>
				</view>
				<view class="popupPay-button" @click="payMoney">确认支付</view>
		</u-popup> -->
		
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.initBytype()
			this.initQNToken()
			
		},
		data () {
			return {
				showPayPopFlag: false,
				payInfo: [
					{
						image: '../../static/image/ych/pay/1.png',
						text: '支付宝支付',
						sectext: ''
					},
					{
						image: '../../static/image/ych/pay/2.png',
						text: '微信支付',
						sectext: ''
					}
				],
				circleShowFlag: 0,
				action: 'https://upload.qiniup.com/',
				fileList: [],
				QNtoken: {},
				pics: [],
				content: '',
				day: '',
				title: '',
				payPrice: 0,
				magnification: 0
			}
		},
		methods: {
			// 倍数
			async initBytype () {
				let res = await this.$fetch(this.$api.get_property_by_type, {type: 1}, "POST", 'FORM')
				this.magnification = res.data.buy_top_amount_by_day
			},
			// 七牛
			async initQNToken () {
				let res = await this.$fetch(this.$api.getQiniuToken, {}, 'POST', 'FORM')
				this.QNtoken = {
					token: res.msg
				}	
			},
			// 显示弹框
			handleShowPayFlag () {
				// this.showPayPopFlag = true
				if (this.day <= 0 || this.day == '') return uni.showToast({
					icon: 'none',
					title: '请输入天数'
				})
				if (this.title.trim() == '') return uni.showToast({
					icon: 'none',
					title: '请输入商家名称'
				})
				if (this.title.trim() == '') return uni.showToast({
					icon: 'none',
					title: '请输入商家名称'
				})
				if (this.content.trim() == '') return uni.showToast({
					icon: 'none',
					title: '请填写内容描述'
				})
				if (this.pics.length <= 0) return uni.showToast({
					icon: 'none',
					title: '请上传至少一张图片'
				})
				
				let imgArr = ''
				let contentMain = ''
				let content = [
					{
						content: this.content,
						pic: []
					}
				]
				this.pics.forEach(item => {
				
					content[0].pic.push(item)
					imgArr += `<img src = "${item}"></img>`
				})
				
				contentMain = `<p style = "padding-bottom: 20rpx">${this.content}</p>${imgArr}`
				console.log(contentMain)
				uni.navigateTo({
					url: '../Pay/Pay?price=' + this.payPrice + '&content=' + JSON.stringify(content) + '&day=' + this.day + '&title=' + this.title + '&type=' + 2 + '&pics=' + JSON.stringify(this.pics) + '&richText=' + contentMain
				})
				
			},
			// 支付方式
			handleCircle (index) {
				this.circleShowFlag = index
			},
			// 上传图片
			onUploaded (lists) {
				this.pics = []
				lists.forEach(item => {
			
					this.pics.push(this.$api.baseLocation + item.response.hash)
				})
			},
			// 删除图片
			onRemove (e) {
				
				this.pics.splice(e, 1)
			},
			changPrice () {
				if (this.day <= 0) {
					uni.showToast({
						icon: 'none',
						title: '投放天数最小为1天'
					})
					this.day = 1
				}
				this.payPrice = this.day * this.magnification
			}
		}
	}
</script>

<style lang="less">
	.PublishAdvertising{
		.PublishAdvertising-header{
			height: 110rpx;
			padding-left: 36rpx;
			padding-right: 36rpx;
			display: flex;
			align-items: center;
			.PublishAdvertising-header-left{
				width: 152rpx;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
			input{
				flex: 1;
			}
		}
		.PublishAdvertising-center{
			width: 660rpx;
			height: 318rpx;
			padding: 24rpx;
			box-sizing: border-box;
			background: #F1F1F1;
			border-radius: 4px;
			margin: 0 auto;
		}
		.line-3{
			margin-top: 34rpx;
			box-sizing: border-box;
		}
		.add-img-box{
			.add-img-box-title{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-left: 36rpx;
				padding-top: 24rpx;
				padding-bottom: 24rpx;
				box-sizing: border-box;
			}
			.img-wrapper{
				margin-left: 36rpx;
				image{
					width: 174rpx;
					height: 218rpx;
					
					box-sizing: border-box;
				}
			}
		}
		.price{
			display: flex;
			align-items: center;
			padding-top: 26rpx;
			.price-left{
				padding-left: 44rpx;
				padding-right: 112rpx;
				
				box-sizing: border-box;
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				font-weight: bold;
			}
			.price-right{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FF7B30;
				letter-spacing: -0.34px;
			}
		}
		.pay-button{
			width: 604rpx;
			height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			text-align: center;
			line-height: 102rpx;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 30rpx;
			
		}

		.popupPay-header {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 60rpx;
			box-sizing: border-box;
			.popupPay-header-left {
				font-family: PingFangSC-Semibold;
				font-size: 17px;
				color: #09023e;
				letter-spacing: -0.41px;
				font-weight: bold;
				margin-right: 20rpx;
				box-sizing: border-box;
			}
			.popupPay-header-right {
				font-family: PingFangSC-Semibold;
				font-size: 24px;
				color: #ff8516;
				letter-spacing: -0.58px;
			}
		}
		.popupPay-item {
			width: 100%;
			display: flex;
			margin-top: 60rpx;
			padding-left: 30rpx;
			box-sizing: border-box;
			.circle {
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				border: 1px solid rgba(9, 2, 62, 0.3);
				position: relative;
				.n-circle {
					width: 24rpx;
					height: 24rpx;
					border-radius: 50%;
					background: #5468ff;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
			image {
				width: 40rpx;
				height: 40rpx;
				margin-left: 30rpx;
				margin-right: 20rpx;
				box-sizing: border-box;
			}
			.pay-way {
				display: flex;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #333333;
				letter-spacing: -0.34px;
				.pay-way-sectext {
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: rgba(9, 2, 62, 0.3);
					letter-spacing: -0.34px;
				}
			}
		}
		.popupPay-button {
			margin: 30rpx;
			box-sizing: border-box;
			width: 690rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background: #5468ff;
			border-radius: 4px;
			border-radius: 4px;
			font-family: PingFangSC-Regular;
			font-size: 14px;
			color: #ffffff;
			letter-spacing: -0.34px;
		}

	}
</style>
