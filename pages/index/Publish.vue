<template>
	<view class="Publish">
		<Status></Status>
		<view class="Publish-header">
			<view class="Publish-header-left" @click="cancelPublish">取消</view>
			<view class="Publish-header-center">{{pageHeader}}</view>
			<view class="Publish-header-right" @click="submitTieZi">发布</view>
		</view>
		<view class="Publish-center">
			<view class="Publish-center-header">
				<view class="Publish-center-header-left">板块</view>
				<view class="Publish-center-header-right" >
					<picker :range="listArr" @change="handlePicker">
						<view class="picker-box">
							<input disabled type="text" style="width: 100%;" v-model="showPickerText" placeholder="请选择要发布的版块(可不填)" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #575757;" />
							<image src="../../static/image/ych/my/30.png" mode="aspectFill"></image>
						</view>
					</picker>
					
				</view>
			</view>
			<view class="Publish-center-header" v-if="showfenleiList.length">
				<view class="Publish-center-header-left">分类</view>
				<view class="Publish-center-header-right" >
					<picker :range="showfenleiList" @change="handleFenLeiPicker">
						<view class="picker-box">
							<input disabled type="text" style="width: 100%;" v-model="showPickerFenleiText" placeholder="请选择要发布的分类(可不填)" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #575757;" />
							<image src="../../static/image/ych/my/30.png" mode="aspectFill"></image>
						</view>
					</picker>
					
				</view>
			</view>
			<view class="Publish-center-title">
				<input type="text" v-model="artTitle"  maxlength="28" placeholder="输入标题(28字以内)" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="Publish-addBox" v-for="(item, index) in submitArr.length" :key = "index">
			
			<view class="Publish-center-main" >
				<textarea v-model="submitArr[index].content" placeholder="输入内容" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;"/>
				<view class="delete-box" @click.stop="deleteFn(index)" v-if="index > 0">删除</view>
			</view>
			<view class="add-main">
				<view class="add-main-title">
					<view class="add-main-title-left">{{addTitle}}</view>
					<view class="add-main-title-right" @click="clearVideoSrc" v-if="type == 2 && videoSrc">清除视频</view>
					
				</view>
				<view class="add-main-box" @click="addSubMitArrImg(index)">
					<image src="../../static/image/ych/Advertising/1.png" mode="aspectFill" class="addImg" v-if="type == 2 && !videoSrc" @click = "uploadVideo"></image>
					<video :src="videoSrc" controls v-if="videoSrc"></video>
					<view class="uploadImg" v-if="type != 2">
						<u-upload  ref="uUpload" :action="action" :file-list="fileList" @on-list-change = "onListChange" @on-uploaded="onUploaded" :form-data = "QNtoken" max-count="9"  @on-remove="onRemove"></u-upload>
					</view>	
				</view>
				<!-- <view class="line-7" style="width: 100%;height:7rpx;background-color: #f7f7f7;margin-top: 7rpx;" v-if="submitArr.length > 1"></view> -->
			</view>
			</view>
		</view>
		<view class="publish-add-main">
			<view @click="addCountUp" v-if="type == 0 && submitArr.length < 2" class="addArt">添加原文</view>
			<view @click="handlehuatiFlag" class="addArt">添加话题</view>
			<image src="../../static/image/ych/index/26.png" mode="aspectFill" @click = "handleAtFlag">
			<image src="../../static/image/location.png" mode="aspectFill" @click = "handleLocation">
		</view>
		<view class="tag-wrapper" v-if="huatiArr.length">
			<view class="tag-box" v-for="item in huatiArr" :key = "item.id">
				<u-tag :text="item.name" type="success" closeable @close="tagClick(item.id)"/>
			</view>
		</view>
		
		<view class="tag-wrapper" v-if="AtUserList.length">
			<view class="tag-box" v-for="item in showUserList" :key = "item.userId">
				<u-tag :text="item.userName" type="success"  closeable @close="AtTagClick(item.userId)" />
			</view>
		</view>
		<view class="location-box" v-if="locationName">
			<view class="location-wrap">
				<view class="location-box-name">{{locationName}}</view>
				<image src="../../static/image/1.png" mode="aspectFill" @click = "clearLocation"></image>
			</view>
			
		</view>
		
		

		<u-popup v-model="huatiBoxFlag" mode="bottom" border-radius="14" height="400px">
				<scroll-view scroll-y="true"  @scrolltolower = "lower">
					<view class="huati-item" v-for="(item, index) in huatiList" :key = "index" @click="handlehuatiArr(item.id, item.name)">
						<image :src="item.titlePic" mode="aspectFill"></image>
						<view>{{item.name}}</view>
					</view>
					<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
				</scroll-view>
		</u-popup>
		
		<u-popup v-model="AtFlag" mode="bottom" border-radius="14" height="400px">
				<scroll-view scroll-y="true" :style="{height: huatiHeight}" @scrolltolower = "lower">
					<view class="huati-item" v-for="(item, index) in AtList" :key = "index" @click="handleAtUser(item)">
						<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
						<view>{{item.userName}}</view>
					</view>
					<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
				</scroll-view>
		</u-popup>

	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			if (this.type == 2) {
				this.addTitle = '添加视频'
				this.pageHeader = '发布视频'
				this.videoFlag = 1
			}
			if (this.type == 1) {
				this.pageHeader = '发布短文'
			}
			if (this.type == 0) {
				this.pageHeader = '发布长文'
			}
			if (uni.getStorageSync('adcode')) {
				this.adcode = uni.getStorageSync('adcode')
			}
			this.initGetAllBankuai()
			this.initQNToken()
			
			
		},
		data () {
			return {
				pageHeader: '发布帖子',
				addCount: 1,
				allListArr: [], // 真版块
				listArr: [], // 展示用的picker数据
				activePickerId: 0,
				showPickerText: '',
				addTitle: '添加图片',
				type: 0 , // 0长文 1短文 2视频
				action: 'https://upload.qiniup.com/',
				fileList: [],
				QNtoken: {},
				imgList: [],
				artTitle: '',
				choiceImgIndex: 0,
				userId: '',
				videoFlag: 0,
				videoQnToken: '',
				videoSrc: '',
				submitArr: [
					{
						content: '',
						pic: []
					}
				],
				huatiBoxFlag: false,
				huatiList: [],
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				huatiArr: [],
				huatiArrIds: [],
				huatiHeight: 140,
				fenleiList: [],
				showfenleiList: [],
				showPickerFenleiText: '',
				showPickerFenleiId: '',
				AtFlag: false,
				AtList: [],
				AtUserList: [],
				showUserList: [],
				locationName: '',
				adcode: ''
			}
		},
		methods: {
			// 获取七牛token
			async initQNToken () {
				let res = await this.$fetch(this.$api.getQiniuToken, {}, 'POST', 'FORM')
				console.log(res)
				this.QNtoken = {
					token: res.msg
				}
				this.videoQnToken = res.msg
				
			},
			// 增加次数
			addCountUp () {
				this.submitArr.push({content: '', pic: []})
				this.addCount = ++this.addCount
				
			},
			onListChange (lists, name) {
				console.log(lists)
				console.log(name)
			},
			// 删除
			deleteFn (index) {
				// console.log(this.$refs.uUpload)
				// this.$refs.uUpload.clear();
				// console.log(this.submitArr)
				// // this.submitArr[1] = 
				// this.$set(this.submitArr, 1, this.submitArr[2])
				// console.log(this.submitArr)
				
				// if (this.submitArr[index].pic.length) {
				// 	return uni.showToast({
				// 		icon: 'none',
				// 		title: '请先删除内容图片后再操作'
				// 	})
				// }
				// uni.showModal({
				//     title: '提示',
				//     content: '是否确定删除',
				//     success:  (res) => {
				//         if (res.confirm) {
						
							this.submitArr.splice(index, 1)
				// 			// console.log(this.submitArr)
					
							
				// 			// console.log(this.imgList)
				// 			// this.addCount = --this.addCount
						
				//         } else if (res.cancel) {
				//             console.log('用户点击取消');
				//         }
				//     }
				// });

			},
			//单组内容图片
			addSubMitArrImg (index) {
				this.choiceImgIndex = index
			},
			// 图片上传
			onUploaded (lists) {
				console.log(lists)
				this.imgList = []
				this.submitArr[this.choiceImgIndex].pic = []
				lists.forEach(item => {
					this.imgList.push(this.$api.baseLocation + item.response.hash)
					this.submitArr[this.choiceImgIndex].pic.push(this.$api.baseLocation + item.response.hash)
				})
				// console.log(this.submitArr)
				console.log(this.imgList)

				
			},
			// 清除地址
			clearLocation () {
				this.locationName = '',
				this.adcode = ''
			},
			//　删除图片
			onRemove(index, lists) {
				this.imgList.splice(index, 1)
				this.submitArr[this.choiceImgIndex].pic.splice(index, 1)
			},
			// 版块切换
			async handlePicker (e) {
				console.log(e)
				this.activePickerId = this.allListArr[e.detail.value].id
				this.showPickerText = this.allListArr[e.detail.value].plateName
				this.showfenleiList = []
				this.showPickerFenleiText = ''
				this.showPickerFenleiId = ''
				let res = await this.$fetch(this.$api.two_plate_type_by_id, {id: this.activePickerId}, "POST", 'FORM')
				console.log(res.data)
				this.fenleiList = res.data
				if (this.fenleiList.length) {
					this.fenleiList.forEach(item => {
						this.showfenleiList.push(item.name)
					})
				}
				
			
			},
			// 发布
			async submitTieZi () {
				// if (this.showPickerText.trim() == '') {
				// 	return uni.showToast({
				// 		icon: 'none',
				// 		title: '请选择发布的版块'
				// 	})
				// }
				if (this.artTitle.trim() == "") {
					return uni.showToast({
						icon: 'none',
						title: '请填写标题'
					})
				}
				
				uni.showLoading({
					title: '加载中'
				})
				
				if (uni.getStorageSync('userId')) {
					this.userId = uni.getStorageSync('userId')
				}
				
				console.log(this.submitArr)
				let RichText = ''
				let RichPicArr = []
				
				
					
				
				this.submitArr.forEach((item, index) => {
					RichPicArr[index] = []
					
						if (item.pic.length){
							item.pic.forEach((i) => {
								if (this.type == 0) {
									RichPicArr[index].push(`<img src = ${i} ></img>`)
								} else {
									RichPicArr[index].push(`<video src = ${i} controls style="width: 100%;"></video>`)
								}
							})
							if (RichPicArr.length) {
								RichPicArr[index] = RichPicArr[index].join(',')
							}
							RichText += `<p style = "padding-bottom: 20rpx">${item.content}</p><p>${RichPicArr[index]}</p>`
							// console.log(RichPicArr)
							// RichText += `<p>${item.content}</p>`
							RichText = RichText.replace(/,/g, ' ')
							console.log(RichText)
						} else {
							RichText += `<p style = "padding-bottom: 20rpx">${item.content}</p>`
						}
					
				})
				console.log(this.submitArr[0].pic)
				
				if (!this.submitArr[0].pic.length) {
					this.submitArr[0].pic = []
				}
				
				// let res = await this.$fetch(this.$api.add_article, {richText: RichText,content: JSON.stringify(this.submitArr), isVideo: this.videoFlag, pics: JSON.stringify(this.imgList), pushUserId: this.AtUserList, title: this.artTitle, type: this.activePickerId, labelIds: this.huatiArrIds, twoPlateType: this.showPickerFenleiId, location: this.locationName, adcode: this.adcode}, "POST", 'FORM')
				let res = await this.$fetch(this.$api.add_article, {richText: RichText,content: JSON.stringify(this.submitArr), isVideo: this.videoFlag, pics: JSON.stringify(this.submitArr[0].pic), pushUserId: this.AtUserList, title: this.artTitle, type: this.activePickerId, labelIds: this.huatiArrIds, twoPlateType: this.showPickerFenleiId, location: this.locationName, adcode: this.adcode}, "POST", 'FORM')
				console.log(res)
				uni.hideLoading()
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					this.videoSrc = '',
					this.submitArr = [
						{
							content: '',
							pic: []
						}
					]
					this.showPickerText = ""
					this.artTitle = ""
					uni.setStorageSync('publishSuccess', true)
					setTimeout(()=> {
						uni.switchTab({
							url: './index'
						})
					}, 700)
					
				}
					
			},
			// 取消发布
			cancelPublish () {
				if (this.artTitle.trim() != '') {
					uni.showModal({
					    title: '',
					    content: '是否保留此次编辑？',
						cancelText: '不保留',
						confirmText: '保留',
					    success:  async (res) => {
					        if (res.confirm) {
					            console.log('用户点击确定');
								let msg = await this.$fetch(this.$api.add_drafts, {content: JSON.stringify(this.submitArr), isVideo: this.videoFlag, title: this.artTitle}, "POST", 'FORM')
								console.log(msg)
								uni.redirectTo({
									url: '../My/Drafts'
								})
								
					        } else if (res.cancel) {
					            console.log('用户点击取消');
								uni.navigateBack({
									delta: 1
								})
					        }
					    }
					});
				} else {
					uni.navigateBack({
						delta: 1
					})
				}
				
			},
			// 获取版块
			async initGetAllBankuai () {
				let res = await this.$fetch(this.$api.getAllPlate, {}, "POST", 'FORM')
				console.log(res)
				this.allListArr = res.data
				res.data.forEach((item) => {
					this.listArr.push(item.plateName)
				})
			},
			// 上传视频
			uploadVideo () {
				  uni.chooseVideo({
						count: 1,
						sourceType: ['camera', 'album'],
						success: async (res) => {
							// self.src = res.tempFilePath;
							console.log(res)
							uni.showLoading({
								title: '上传中'
							})
							uni.uploadFile({
								url: this.$api.unloadLocation, //仅为示例，非真实的接口地址
								filePath: res.tempFilePath,
								name: 'file',
								formData: {
									token: this.videoQnToken
								},
								success: (uploadFileRes) => {
									// console.log();
									let videoHash = JSON.parse(uploadFileRes.data).hash
									
									this.videoSrc = this.$api.baseLocation + videoHash
									console.log(this.videoSrc)
									this.submitArr[0].pic.push(this.videoSrc)
									uni.hideLoading()
								}
							});
						}
					});
			},
			clearVideoSrc () {
				this.videoSrc = ""
				this.submitArr[0].pic = []
			},
			// 话题展示
			handlehuatiFlag () {
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.huatiBoxFlag = true
				this.huatiList = []
				this.huatiListFn()
			},
			// 话题列表
			async huatiListFn () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.new_label, {pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				this.huatiList = [...this.huatiList, ...res.rows]
				this.huatiHeight = this.huatiList.length * 140 + 'rpx'
				this.hasFlag = this.pageNum * this.pageSize < res.total
				console.log(this.hasFlag)
			},
			// 点击话题内容
			handlehuatiArr (id, name) {
			
					
				this.huatiArr.forEach((item, index) => {
		
					if (item.id == id) {
						this.huatiArr.splice(index, 1)
						return uni.showToast({
							icon: 'none',
							title: '已存在该话题'
						})
						
					}
				})
				this.huatiArr.push({
					id,
					name
				})
				
				
				this.huatiArrIds.push(id)
				this.huatiArrIds = [...new Set(this.huatiArrIds)]
				console.log(this.huatiArrIds)
				this.huatiBoxFlag = false
				
			},
			// 点击话题关闭按钮
			tagClick (id) {
				this.huatiArr.forEach((item, index) => {
					if (item.id == id) {
						this.huatiArr.splice(index, 1)
						this.huatiArrIds.splice(index, 1)
					}
				})
				console.log(this.huatiArrIds)
			},
			lower () {
				this.huatiListFn()
			},
			// 切换分类数据
			handleFenLeiPicker (e) {
				console.log(e)
				console.log(this.fenleiList)
				this.showPickerFenleiText = this.fenleiList[e.detail.value].name
				this.showPickerFenleiId = this.fenleiList[e.detail.value].type
			},
			// 展示艾特列表
			handleAtFlag () {
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.AtFlag = true
				this.AtList = []
				this.AtListFn()
			},
			// 艾特列表
			async AtListFn () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.get_can_push_user, {pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				this.AtList = [...this.AtList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			// 点击AT对象
			handleAtUser (user) {
				console.log(user)
				let ExitId = this.AtUserList.indexOf(user.userId)
				if (ExitId > -1) {
					uni.showToast({
						icon: 'none',
						title: '已在提醒队列中, 请勿重复添加'
					})
				} else {
					this.AtUserList.push(user.userId)
					this.AtUserList = [...new Set(this.AtUserList)]
					
					this.showUserList.push(user)
				}

				
				this.AtFlag = false
			},
			//　删除艾特对象
			AtTagClick(userId) {
				
				this.AtUserList.forEach((item, index) => {
					if (item == userId) {
						this.showUserList.splice(index, 1)
						this.AtUserList.splice(index, 1)
					}
				})
				console.log(this.AtUserList)
			},
			handleLocation () {
				uni.chooseLocation({
				    success: (res) =>{
						console.log(res)
						
						if (res.name == '地图位置') {
							console.log('1111')
							this.locationName = res.address
						} else {
							this.locationName = res.name
						}
						
						
						uni.request({
						   url: 'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=' + res.longitude + ',' + res.latitude +
						   	'&key=a88aa9fb1f935caab43d092a6c3a2449&radius=1000&extensions=all',
							method: "GET",
						    success: (response) => {
						        console.log(response);
								this.adcode = response.data.regeocode.addressComponent.adcode
						    }
						});
						
						
						
				    }
				});
			}
			
		}
	}
</script>

<style lang="less">
	.Publish{
		.Publish-header{
			width: 100%;
			height: 50rpx;
			display: flex;
			align-items: center;
			padding-left: 36rpx;
			padding-right: 34rpx;
			box-sizing: border-box;
			position: fixed;
			top: var(--status-bar-height);
			z-index: 999;
			background-color: #fff;
			.Publish-header-left, .Publish-header-right{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #2A2A2A;
				letter-spacing: -0.34px;
				flex: 1;
				text-align: center;
			}
			
			.Publish-header-center{
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #000000;
				letter-spacing: -0.03px;
				// padding-left: 212rpx;
				// padding-right: 212rpx;
				padding-left: 200rpx;
				padding-right: 200rpx;
				box-sizing: border-box;
			}
		}
		.Publish-center{
			padding-top: calc(50rpx + var(--status-bar-height));
			.Publish-center-header{
				display: flex;
				align-items: center;
				padding-bottom: 40rpx;
				padding-top: 40rpx;
				padding-left: 36rpx;
				padding-right: 30rpx;
				border-bottom: 6rpx solid #f4f4f4;
				box-sizing: border-box;
				
				.Publish-center-header-left{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					padding-right: 20rpx;
					box-sizing: border-box;
				}
				.Publish-center-header-right{
					flex: 1;
					display: flex;
					justify-content: space-between;
					align-items: center;
					// padding-top: 16rpx;
					// padding-bottom: 18rpx;
					// padding-left: 50rpx;
					// padding-right: 18rpx;
					background: #FFFFFF;
					border: 1px solid #DFDFDF;
					border-radius: 4px;
					
					image{
						width: 16rpx;
						height: 10rpx;
					}
					.picker-box{
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding-top: 16rpx;
						padding-bottom: 18rpx;
						padding-left: 50rpx;
						padding-right: 18rpx;
						.input{
							flex: 1;
							padding-right: 20rpx;
							box-sizing: border-box;
						}
					}
				}
			}
			.Publish-center-title{
				padding: 36rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				border-bottom: 6rpx solid #f4f4f4;
				box-sizing: border-box;
				input{
					flex: 1;
				}
			}
			.Publish-center-main{
				// padding: 26rpx 36rpx;
				padding: 45rpx 36rpx;
				height: 380rpx;
				border-bottom: 6rpx solid #f4f4f4;
				box-sizing: border-box;
				position: relative;
				textarea{
					width: 100%;
					font-size: 14px;
				}
				.delete-box{
					position: absolute;
					right: 25rpx;
					top: 5rpx;
					
				}
			}
			.add-main{
				padding-top: 24rpx;
				padding-bottom: 46rpx;
				padding-left: 36rpx;
				padding-right: 36rpx;
				box-sizing: border-box;
				border-bottom: 4rpx solid #f7f7f7;
				.add-main-title{
					width: 100%;
					display: flex;
					justify-content: space-between;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					padding-bottom: 24rpx;
					box-sizing: border-box;
				}
				.add-main-box{
					image{
						width: 178rpx;
						height: 222rpx;
					}
				}
			}
		}
		.publish-add-main{
			display: flex;
			align-items: center;
			padding-bottom: 30rpx;
			margin-top: 20rpx;
			.addArt{
				display: inline-block;
				padding: 0 28rpx;
				background: #FF7B30;
				border-radius: 24rpx;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FFFFFF;
				letter-spacing: -0.34px;
				margin-left: 36rpx;
				
			}
			image{
				width: 48rpx;
				height: 48rpx;
				margin-left: 30rpx;
			}
		}
		.huati-item{
			display: flex;
			align-items: center;
			width: 100%;
			height: 140rpx;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-left: 30rpx;
				margin-right: 30rpx;
			}
		}
		.tag-wrapper{
			display: flex;
			flex-wrap: wrap;
			padding: 30rpx;
			padding-top: 0;
			.tag-box{
				// flex: 1;
				// width: 25%;
				margin-top: 30rpx;
				margin-left: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.location-box{
			display: inline-block;
			padding: 0 28rpx;
			background: #909399;
			border-radius: 24rpx;
			font-family: PingFangSC-Regular;
			font-size: 14px;
			color: #FFFFFF;
			letter-spacing: -0.34px;
			margin-left: 36rpx;
			margin-right: 36rpx;
			.location-wrap{
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-left: 10rpx;
				}
			}
			
		}
	}
</style>
<style>
	uni-picker{
		width: 100%;
	}
</style>