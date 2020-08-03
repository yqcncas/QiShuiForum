<template>
	<view class="SettledEnterprise">
		<view class="SettledEnterprise-header">
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">申请人姓名*</view>
				<input type="text" :disabled="!candeletable" v-model="userName" placeholder="请输入您的姓名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">联系电话*</view>
				<input type="number" :disabled="!candeletable" maxlength="11" v-model="userPhone" placeholder="请输入您的联系电话" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">商家名称*</view>
				<input type="text" :disabled="!candeletable" v-model="shopName" placeholder="请填写商家名称" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">身份证号*</view>
				<input type="text" :disabled="!candeletable" v-model="idCard" placeholder="请填写身份证号" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="SettledEnterprise-item">
				<view class="SettledEnterprise-item-left">联系地址*</view>
				<input type="text" :disabled="!candeletable" v-model="address" placeholder="请填写联系地址" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
		</view>
		<view class="id-card">
			<view class="id-card-top">身份证正反面*</view>
			<view class="id-imgbox">
				<!-- <image src="../../static/image/ych/Advertising/1.png" mode="aspectFill"></image> -->
				<u-upload :action="action" :deletable = "candeletable" :file-list="fileList" @on-uploaded="onUploaded" :form-data = "QNtoken" max-count="2"  @on-remove="onRemove"></u-upload>
			</view>
		</view>
		<view class="zhizhao">
			<view class="zhizhao-top">营业执照*</view>
			<view class="zhizhao-imgbox">
				<!-- <image src="../../static/image/ych/Advertising/1.png" mode="aspectFill"></image> -->
				<u-upload :action="action" :deletable = "candeletable" :file-list="fileLists" @on-uploaded="onUploadeds" :form-data = "QNtoken" max-count="1"  @on-remove="onRemoves"></u-upload>
			</view>
		</view>
		<view class="result">
			<view class="result-top" v-if="isShow">审核状态：<span>{{status[isShowIndex]}}</span></view>
			<view class="result-bottom" v-if="cause != ''">原因：信息有误</view>
		</view>
		<view class="submit-form" @click="submitForm">提交</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.initQNToken()
			
			this.merchating()
		},
		data () {
			return {
				userName: '',
				userPhone: '',
				shopName: '',
				idCard: '',
				address: '',
				action: 'https://upload.qiniup.com/',
				fileList: [],
				QNtoken: {},
				imgList: [],
				fileLists: [],
				idImg: [],
				cause: '',
				isShow: false,
				isShowIndex: 0,
				status: ['正在审核', '审核通过', '审核驳回'],
				candeletable: true
			}
		},
		methods: {
			async initQNToken () {
				let res = await this.$fetch(this.$api.getQiniuToken, {}, 'POST', 'FORM')
				console.log(res)
				this.QNtoken = {
					token: res.msg
				}
			},
			async merchating () {
				
				
				let res = await this.$fetch(this.$api.get_apply_merchant, {}, "post", 'form')
				console.log(res)
				if (res.data.idCard) {
					this.userName = res.data.name
					
					let fileLists = JSON.parse(res.data.businessLicense)
					fileLists.forEach(item => {
						this.fileLists.push({url: item})
						this.idImg.push(item)
					})
				
					
					
					this.address = res.data.address
					this.idCard = res.data.idCard
					
					let imgList = JSON.parse(res.data.cardPic)
					imgList.forEach(item => {
						this.fileList.push({url: item})
						this.imgList.push(item)
						console.log(item)
					})
					
					
					this.cause = res.data.cause
					this.userPhone = res.data.mobile
					this.isShowIndex = res.data.status
					this.shopName = res.data.merchantName
					this.isShow = true
					if (res.data.status === 1) {
						this.candeletable = false
					}
				}
				
			},
			// 上传图片
			onUploaded (lists) {
				this.imgList = []
				lists.forEach(item => {
					console.log(item)
					this.imgList.push(this.$api.baseLocation + item.response.hash)
				})
			},
			// 删除图片
			onRemove (index) {
				this.imgList.splice(index, 1)
			},
			// 营业执照
			onUploadeds (lists) {
				this.idImg = []
				lists.forEach(item => {
					console.log(item)
					this.idImg.push(this.$api.baseLocation + item.response.hash)
				})
			},
			onRemoves (index) {
				
				this.idImg.splice(index, 1)
			},
			async submitForm () {
				if (!this.$u.test.mobile(this.userPhone)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查手机号输入是否正确'
					})
				}
				if (!this.$u.test.idCard(this.idCard)) {
					return uni.showToast({
						icon: 'none',
						title: '请检查身份证号输入是否正确'
					})
				}
				if (this.userName.trim() == '' || this.shopName.trim() == '' || this.address.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '请检查信息是否填写完整'
					})
				}
				if (this.imgList.length != 2) {
					return uni.showToast({
						icon: 'none',
						title: '请检查身份证正反面是否上传'
					})
				}
				if (this.idImg.length != 1) {
					return uni.showToast({
						icon: 'none',
						title: '请检查营业执照是否上传'
					})
				}
				if (this.isShowIndex === 1) return uni.showToast({
					icon: 'none',
					title: "您已审核通过,请勿重复提交"
				})
				let res = await this.$fetch(this.$api.apply_merchant, {name: this.userName, mobile: this.userPhone, merchantName: this.shopName, cardPic: JSON.stringify(this.imgList), businessLicense: JSON.stringify(this.idImg), idCard: this.idCard, address: this.address}, 'post', 'JSON')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					this.isShow = true
				}
				
			}
		}
	}
</script>

<style lang="less">
	.SettledEnterprise{
		padding-bottom: 30rpx;
		box-sizing: border-box;
		.SettledEnterprise-header{
			padding-bottom: 26rpx;
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.SettledEnterprise-item{
				width: 100%;
				padding: 0 36rpx;
				padding-top: 56rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				&:nth-child(1){
					padding-top: 26rpx;
				}
				.SettledEnterprise-item-left{
					width: 200rpx;
				}
				input{
					flex: 1;
					font-size: 14px;
				}
			}
		}
		.id-card{
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.id-card-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-top: 36rpx;
				padding-left: 36rpx;
				padding-right: 36rpx;
				padding-bottom: 24rpx;
				box-sizing: border-box;
			}
			.id-imgbox{
				padding-left: 36rpx;
				padding-bottom: 46rpx;
				padding-right: 72rpx;
				box-sizing: border-box;
				image{
					width: 178rpx;
					height: 222rpx;
				}
			}
		}
		.zhizhao{
			border-bottom: 6rpx solid #f4f4f4;
			box-sizing: border-box;
			.zhizhao-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-top: 36rpx;
				padding-left: 36rpx;
				padding-right: 36rpx;
				padding-bottom: 24rpx;
				box-sizing: border-box;
			}
			.zhizhao-imgbox{
				padding-left: 36rpx;
				padding-bottom: 46rpx;
				padding-right: 72rpx;
				box-sizing: border-box;
				image{
					width: 178rpx;
					height: 222rpx;
				}
			}
		}
		.result{
			padding-top: 36rpx;
			padding-left: 24rpx;
			box-sizing: border-box;
			.result-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				span{
					color: #FF0000;
				}
			}
			.result-bottom{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
		}
		.submit-form{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			margin: 0 auto;
			margin-top: 68rpx;
		}
	}
</style>
