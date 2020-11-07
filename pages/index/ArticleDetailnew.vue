<template>
	<view class="ArticleDetail">
		<Status></Status>
		<view class="ArticleDetail-title">
			<view class="back-img" @click="goBack">
				<image src="../../static/image/ych/back.png" mode="aspectFill" class="back"></image>
			</view>
			
			<view class="ArticleDetail-title-center"></view>
			<view class="like-img-box" v-if="ArtDetail.createTime" @click="collectionArt(ArtDetail)">
				<image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like" v-if="showFollow && !ArtDetail.params.collection" ></image>
				<image src="../../static/image/ych/index/20.png" mode="aspectFill" class="like" v-if="showFollow && ArtDetail.params.collection"></image>
				<image src="../../static/image/more.png" mode="aspectFill" style="width: 48rpx;height: 48rpx;margin-left: 20rpx;" @click.stop = "handleShowMore(ArtDetail.id)"></image>
			</view>
		</view>
		<view class="ArticleDetail-news-title">{{ArtDetail.title}}</view>
		<view class="ArticleDetail-center">
			<view class="ArticleDetail-center-top">
				<view class="ArticleDetail-center-top-left" @click="goToMyHomePage(userInfo.userId)">
					<image :src="userInfo.avatar ? userInfo.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
					<view class="userInfo">
						<view class="userInfo-top">
							<view class="userInfo-top-name">{{userInfo.userName}}</view>
							<view class="userInfo-top-level">Lv.{{userInfo.level}}</view>
							<view class="userInfo-top-bozhu" v-if="userInfo.plateName">{{userInfo.plateName}}板块版主</view>
							<view class="userInfo-top-pla"  v-for="(pla, i) in ArtDetail.userLabel" :key = "i">{{pla}}</view>
						</view>
						<view class="userInfo-bottom">{{ArtDetail.createTime}}</view>
					</view>
				</view>
				<view class="ArticleDetail-center-top-right" v-if="showFollow && ArtDetail.createTime" :style="{borderColor: ArtDetail.params.follow ? '#c8c9cc' : '#FF7B30' }" @click="followUser(ArtDetail.params)">
					<image src="../../static/image/ych/index/22.png" mode="" v-if="!ArtDetail.params.follow"></image>
					<view class="ArticleDetail-center-top-right-text" :style="{color: ArtDetail.params.follow ? '#c8c9cc' : '#FF7B30' }">{{ArtDetail.params.follow ? '已关注' : '关注'}}</view>
				
				</view>
			</view>
			
		<!-- 	<view class="ArticleDetail-center-main" v-for="(item, index ) in ArtDetail.content" :key = "index">
				<view class="ArticleDetail-center-main-title" v-if="index == 0">{{ArtDetail.title}}</view>
				<view class="ArticleDetail-center-main-center">{{item.content}}</view>
				<view class="ArticleDetail-center-main-img-box" v-if="ArtDetail.isVideo == 0">
					<image :src="imgItem" mode="aspectFill" v-for="(imgItem, i) in item.pic" :key = "i" @click = "showImgBig(imgItem, item.pic)"></image>
		
				</view>
				<view class="ArticleDetail-center-main-img-box" v-if="ArtDetail.isVideo == 1">
					<video :src="item.pic[0]" controls style="width: 100%;"></video>
				</view>
				
				<view class="ArticleDetail-center-main-footer-box" v-if="ArtDetail.location">
					<view class="ArticleDetail-center-main-footer-left" style="margin-top: 10rpx;" v-if="index == ArtDetail.content.length - 1">
						<view class="ArticleDetail-center-main-footer-left-box">
							<image src="../../static/image/location.png" mode="aspectFill"></image>
							{{ArtDetail.location}}</view>
						</view>
					
					<view class="ArticleDetail-center-main-footer" style="transform: translateY(10rpx);" v-if="index == ArtDetail.content.length - 1" >{{ArtDetail.browseNum}}阅读量</view>
				</view>
				
			</view> -->
			
		<jyf-parser :html="ArtDetail.richText" selectable ref="article" style="padding-left: 30rpx; padding-right: 30rpx;"></jyf-parser>
		</view>
		<view class="ArticleDetail-footer">
			<view class="ArticleDetail-footer-top" :class="{stick: stickFlag}">
				<view class="ArticleDetail-footer-top-item" :class="{active:tabIndex == 0}" @click="handleTabIndex(0)">最新回复</view>
				<view class="ArticleDetail-footer-top-item" :class="{active:tabIndex == 1}" @click="handleTabIndex(1)">热门评论</view>
			</view>
			<view class="ArticleDetail-footer-main">
				<view class="ArticleDetail-footer-main-item" v-for="(item, index) in ArtDetailComment" :key = "item.id" @click="goToArticleComment(item)">
					<view class="ArticleDetail-footer-main-item-user">
						<view class="ArticleDetail-center-top">
							<view class="ArticleDetail-center-top-left">
								<image :src="item.avatar ? item.avatar :'../../static/image/ych/avatar.png'" mode="aspectFill"></image>
								<view class="userInfo">
									<view class="userInfo-top">
										<view class="userInfo-top-name">{{item.userName}}</view>
										<view class="userInfo-top-level">Lv.{{item.level}}</view>
										<view class="userInfo-top-bozhu" v-if="item.plateName">{{item.plateName}}板块版主</view>
									</view>
									<view class="userInfo-bottom">{{item.createTime}}</view>
								</view>
							</view>
						</view>
						<view class="ArticleDetail-footer-main-center">
							{{item.content}}
						</view>
						<view class="ArticleDetail-footer-main-footer" v-if="item.params.length">
							<view class="ArticleDetail-footer-main-footer-item" v-for="(comment, i) in item.params" :key = "i">{{comment.userName}}: {{comment.content}}</view>
							<!-- <view class="ArticleDetail-footer-main-footer-item">白胡椒：楼主说的好</view> -->
							<view class="ArticleDetail-footer-main-footer-item-button" v-if="item.replyCount > 2">共{{item.replyCount}}条回复></view>
						</view>
						<!-- <view class="chat-img" @click.stop="handleInputFocus(item.params[index].articleId, item.params[index].articleId.id, 1)"> -->
						<view class="chat-box">
							<view class="chat-dianzan" @click.stop = "updatePrise(item.id, item)">
								<image :class="{startAnimation: item.shaked}" :src="item.status == 1 ? '../../static/image/ych/index/27.png' : '../../static/image/ych/index/28.png'" mode="aspectFill"></image>
								<!-- <image src="" mode="aspectFill"></image> -->
								<view class="chat-dianzan-text">点赞  {{item.praiseNum}}</view>
							</view>
							<view class="chat-img" @click.stop="handleInputFocus(item, index)">
								<image src="../../static/image/ych/index/23.png" mode=""></image>
								<view>回复</view>
							</view>
							<view class="chat-img" style="font-size: 14px;">
								{{item.floor}}楼
							</view>
						</view>
					
					</view>
					
		<!-- 			<view class="ArticleDetail-footer-main-item-advertising" v-if="index == 5 && guangGaoInfo != undefined" @click.stop="goToRichText">
						<view class="ArticleDetail-footer-main-item-advertising-top">
							<view class="ArticleDetail-footer-main-item-advertising-top-left">{{guangGaoInfo.advert.title}}</view>
							<view class="ArticleDetail-footer-main-item-advertising-top-right">广告</view>
						</view>
						<view class="ArticleDetail-footer-main-item-advertising-center">
							<image :src="gGPic" mode="aspectFill" v-for="(gGPic, i) in guangGaoInfo.advert.pics" :key = "i" ></image>
					
						</view>
						<view class="ArticleDetail-footer-main-item-advertising-footer">{{guangGaoInfo.advert.content}}</view>
						
					</view> -->
					
				
				</view>
			</view>
		
			
		</view>
		<view class="ArticleDetail-submit">
			<view class="ArticleDetail-submit-left">
				<image :src="myAvatar ? myAvatar : '../../static/image/ych/avatar.png'" mode=""></image>
			</view>
			<view class="ArticleDetail-submit-center">
				<input adjust-position type="text" :focus = "focusFlag" @focus="changeSendButton" @blur="changeSendButtonF" v-model="sendMsg" cursor-spacing = "30" placeholder="我来说两句" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A9A9A9;" />
			</view>
			<!-- {{ArtDetail.params.evaluatesList}} -->
				<view class="ArticleDetail-submit-right-chat" v-if="!SendButtonFlag">
					<image src="../../static/image/ych/index/23.png" mode="aspectFill"></image>
					<view class="ArticleDetail-submit-right-chat-number" v-if="evaListTotal">{{evaListTotal}}</view>
				</view>
				<view class="ArticleDetail-submit-right-share"  v-if="!SendButtonFlag">
					<image src="../../static/image/ych/my/23.png" mode="" @click.stop="handleShareFlag"></image>
				</view>
				<view class="sendButton" @touchend.prevent.stop="sendMsgFn"  v-if="SendButtonFlag" :style="{color: sendMsg.trim() == '' ? '#c8c9cc' : '#ff9900' }">发送</view>
		</view>
		<u-popup v-model="showMore" mode="bottom" border-radius="14" height="200rpx">
			<view class="showMoreBox">
				<view class="showMoreBox-item" @click="jubao">
					<image src="../../static/image/ych/showMore/1.png" mode="aspectFill"></image>
					<view>举报此条动态</view>
				</view>
				<view class="showMoreBox-item" @click="pingbi">
					<image src="../../static/image/ych/showMore/2.png" mode="aspectFill"></image>
					<view>屏蔽此条动态</view>
				</view>
			</view>
		</u-popup>
		
		<shareBox :showShareBoxFlag = "showShareBoxFlag" @changeShowBoxFLag = "changeShowBoxFLag" @shareWx = "shareWx"  @shareFre = "shareFre"></shareBox>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		components: {
		    jyfParser
		},
		onLoad(options) {
			this.$scope.$getAppWebview().setStyle({
			  softinputNavBar: 'none'
			})
			this.ArtId = options.id
			this.userId = options.userId
			if (options.TopArtType) {
				this.TopArtType = options.TopArtType // 判断是普通点进 还是话题进 1话题
			}
			if (options.index != undefined) {
				this.TopArtIndex = options.index
			}
			let userId = uni.getStorageSync('userId')
			if (userId == this.userId) {
				this.showFollow = false
			}
			if (uni.getStorageSync('userAvatar')) {
				this.myAvatar = uni.getStorageSync('userAvatar')
			}
			// 获取发帖人
			this.initUserInfo()
			//　获取评价
			this.initArtDetail(),
			// 获取广告
			this.initAdvertising()
			
		},
		data () {
			return {
				tabIndex: 0,
				footTop: 0,
				stickFlag: false,
				myAvatar: '',
				ArtId: 0,
				userId: 0,
				ArtDetail: {},
				userInfo: {},
				ArtDetailComment: [],
				hasFlag: true,
				pageNum: 0,
				pageSize: 10,
				sendMsg: '',
				SendButtonFlag: false,
				focusFlag: false,
				type: 0 ,// 0 默认发送  1楼中楼
				currentArticleId: '', // 评价楼中楼
				currentEvaluateId: '', // 评价楼中楼
				currentIndex: 0, // 楼中楼id,
				showFollow: true,
				TopArtType: '',
				TopArtIndex: 0,
				sendCount: 0,
				guangGaoInfo: {},
				showShareBoxFlag: false,
				evaListTotal: 0,
				handleId: '',
				showMore: false
				
				
			}
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.ArticleDetail-footer-top').boundingClientRect(data => {
			  // console.log("得到布局位置信息" + JSON.stringify(data));
			  // console.log("节点离页面顶部的距离为" + data.top);
			  this.footTop = data.top
			  
			}).exec();
		},
		onPageScroll (e) {
			// console.log(e)
			if (e.scrollTop >= this.footTop) {
				this.stickFlag = true
			} else {
				this.stickFlag = false
			}
		},
		onReachBottom () {
			this.initArtDetail()
		},
		methods: {
			handleShowMore (id, index) {
				this.showMore = !this.showMore
				this.handleId = id
				// this.handleIndex = index
			},
			jubao () {
				uni.showToast({
					icon: 'success',
					title: '举报成功'
				})
				this.showMore = false
			},
			// 点赞
			async updatePrise (id, item) {
				let res = await this.$fetch(this.$api.upd_praise_status, {id: id}, 'POST', 'FORM')
				console.log(res)
				
				if (item.status) {
					item.status = 0
					item.shaked = false
					this.$set(item, 'praiseNum', item.praiseNum - 1)
				} else {
					item.status = 1
					item.shaked = true
					this.$set(item, 'praiseNum', item.praiseNum + 1)
				}
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
			},
			async pingbi () {
				let res = await this.$fetch(this.$api.article_shield, {articleId: this.handleId}, "POST", 'FORM')
				
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					this.showMore = false
					// this.ArticleList.splice(this.handleIndex, 1)
					
				}
			},
			// 分享
			handleShareFlag () {
				this.showShareBoxFlag = true
			},
			//更改分享显示
			changeShowBoxFLag (newV) {
				console.log(newV)
				this.showShareBoxFlag = newV
			},
			// 微信分享
			shareWx () {
				let content = this.filterHTMLTag(this.ArtDetail.richText)
				content = content.slice(0, 30)
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://h5-download.qswvip.com/#/pages/RichText/RichText?code=" + uni.getStorageSync('userId') + '&userId=' + this.userId + '&ArtId=' + this.ArtId,
			
				    title: this.ArtDetail.title,
				    summary: content,
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
			shareFre () {
				let content = this.filterHTMLTag(this.ArtDetail.richText)
				content = content.slice(0, 30)
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
					href: "http://h5-download.qswvip.com/#/pages/RichText/RichText?code=" + uni.getStorageSync('userId') + '&userId=' + this.userId + '&ArtId=' + this.ArtId,
								
					title: this.ArtDetail.title,
					summary: this.ArtDetail.title,
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
			// 广告
			async initAdvertising () {
				let res = await this.$fetch(this.$api.get_now_evaluate_advert, {}, "GET", 'FORM')

				let index = this.$u.random(0, res.data.length -1)
				this.guangGaoInfo = res.data[index]
				console.log(this.guangGaoInfo)
				// this.guangGaoInfo.advert.newContent = this.guangGaoInfo.advert.content
				// this.guangGaoInfo.advert.content = this.filterHTMLTag(this.guangGaoInfo.advert.content)
				this.guangGaoInfo.advert.pics = JSON.parse(this.guangGaoInfo.advert.pics)
				this.updateguangG()
				
			},
			async updateguangG () {
				let res = await this.$fetch(this.$api.upd_evaluate_advert_display_num, {id: this.guangGaoInfo.advert.id}, 'POST', 'FORM')
				console.log(res)
			},
			filterHTMLTag (msg) {
			    var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
			    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
			    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
				msg = msg.replace(/[ ]|[&nbsp;]/g, '')
			    return msg;
			},
			// 广告点击
			async goToRichText () {
				console.log(this.guangGaoInfo)
				let res = await this.$fetch(this.$api.upd_advert_hits, {id: this.guangGaoInfo.advert.id}, 'POST', 'FORM')
				// uni.navigateTo({
				// 	url: '../RichText/RichText?RichMain=' + this.guangGaoInfo.advert.newContent + '&title=' + this.guangGaoInfo.advert.title + '&pics=' + JSON.stringify(this.guangGaoInfo.advert.pics)
				// })
				uni.navigateTo({
					url: './ArticleDetailnew?id=' + this.guangGaoInfo.advert.articleId + '&userId=' + this.guangGaoInfo.advert.userId
				})
			},
			// 底部切换
			handleTabIndex (index) {
				this.tabIndex = index
				this.hasFlag = true
				this.pageNum = 0
				this.ArtDetailComment = []
				this.initArtDetail()
			},
			changeSendButton () {
				this.SendButtonFlag = true
			},
			changeSendButtonF () {
				this.SendButtonFlag = false
				this.type = 0
				this.focusFlag = false
			},
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			goToArticleComment (item) {
				uni.navigateTo({
					url: './ArticleComment?commentInfo=' + JSON.stringify(item)
				})
			},
			// 预览
			showImgBig (img, imgList) {
				uni.previewImage({
					current: img,
					urls: imgList
				})
			},
			// 关注
			async followUser (item) {
				let res = await this.$fetch(this.$api.follow, {toUserId: this.userId}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					if (item.follow == 0) {
						item.follow = 1
					} else {
						item.follow = 0
					}
				} 
				
			},
			// 去个人主页
			goToMyHomePage (id) {
				uni.navigateTo({
					url:'../My/UserHomePage?type='+ 2 + '&userId=' + id
				})
			},
			// 收藏
			async collectionArt (item) {
				let res = await this.$fetch(this.$api.collection, {relationId: item.id, type: 1}, "POST", 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					if (item.params.collection == 0) {
						item.params.collection = 1
					} else {
						item.params.collection = 0
					}
				}
				
			},
			// 发帖内容数据
			async initArtDetail () {
				if (!this.hasFlag) return 
				this.pageNum = ++this.pageNum
				let userId = uni.getStorageSync('userId')
				let res = await this.$fetch(this.$api.artivle_detail_by_id, {id: this.ArtId, pageNum: this.pageNum, pageSize: 10, type: this.tabIndex, userId: userId}, "POST", 'FORM')
				console.log(res)
				
				// res.data.content = JSON.parse(res.data.content)
				this.ArtDetail = res.data
				if (this.ArtDetail.userLabel) {
					this.ArtDetail.userLabel = this.ArtDetail.userLabel.split(',')
				}
				console.log('*********************')
				console.log(this.ArtDetail.richText)
				this.evaListTotal = this.ArtDetail.params.evaluatesList.total
				// console.log(this.ArtDetail.params.evaluatesList.total)
				console.log(res.data.params.evaluatesList)
				this.ArtDetailComment = [...this.ArtDetailComment, ...res.data.params.evaluatesList.rows]
				console.log(this.ArtDetailComment)
				
				this.ArtDetailComment.forEach(async (item) => {
					if (item.replyCount > 0) {
						let msg = await this.$fetch(this.$api.reply_list, {evaluatesId: item.id, pageNum: 1, pageSize: 2}, 'POST', 'FORM')
						console.log(msg)
						item.params = msg.rows
					} else {
						item.params = []
					}
				})
				this.hasFlag = this.pageNum * 10 < res.data.params.evaluatesList.total 
				 
			},
			// 发帖人数据
			async initUserInfo () {
				let res = await this.$fetch(this.$api.get_user_by_id, {userId: this.userId}, "POST", "FORM")
				console.log(res)
				this.userInfo = res.data
			},
			// 点击评论图片
			handleInputFocus (item, index) {
				console.log(index)
				this.currentIndex = index
				this.focusFlag = false
				setTimeout(() => {
					this.focusFlag = true
				}, 300)
				this.SendButtonFlag = true
				this.type = 1
				console.log(this.type)
				console.log(item)
				this.currentArticleId = item.articleId
				this.currentEvaluateId = item.id
			},
			// 发送
			async sendMsgFn () {
				console.log(this.ArtDetail)
				console.log(this.ArtId)
				if (this.ArtDetail.evaluateSwitch != 1) {
					return uni.showToast({
						icon: 'none',
						title: '当前帖子禁止评论'
					})
				}
				
				if (this.sendMsg.trim() == '') {
					return uni.showToast({
						icon: 'none',
						title: '发送内容不能为空'
					})
				}
				let res 
				uni.showLoading({
					title: '加载中'
				})
				
				if (this.type == 1) {
					res = await this.$fetch(this.$api.evaluate, {articleId: this.currentArticleId, content: this.sendMsg, evaluateId: this.currentEvaluateId, pushUserId: ''}, 'POST', 'FORM')
				} else {
					res = await this.$fetch(this.$api.evaluate, {articleId: this.ArtId, content: this.sendMsg, pushUserId: ''}, 'POST', 'FORM')
				}
				console.log(res)
				uni.hideLoading()
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					if (this.TopArtType != '') {
						this.sendCount = ++this.sendCount
						uni.setStorageSync('sendSuccessIndex', {
							sendIndex: this.TopArtIndex,
							sendCount: this.sendCount
						})
					}
					
					if (this.type == 1) {
						this.ArtDetailComment[this.currentIndex].params.unshift({
							content: this.sendMsg,
							userName: uni.getStorageSync('userName'),
							
						})
						this.ArtDetailComment[this.currentIndex].params = this.ArtDetailComment[this.currentIndex].params.splice(0, 2)
						this.ArtDetailComment[this.currentIndex].replyCount += 1 
						this.sendMsg = ""
					} else {
						if (this.tabIndex == 0) {
							let nowDayTimer = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
							console.log(nowDayTimer)
							console.log(this.ArtDetailComment[0])
							this.ArtDetailComment.unshift({
								id: res.data,
								articleId: this.ArtId,
								content: this.sendMsg,
								userId: this.userId,
								avatar: uni.getStorageSync('userAvatar'),
								pushUserId: '', 
								userName: uni.getStorageSync('userName') ? uni.getStorageSync('userName'): '汽水用户',
								level: uni.getStorageSync('userLevel') ? uni.getStorageSync('userLevel') : 1,
								plateName: uni.getStorageSync('plateName'),
								params: [],
								createTime: nowDayTimer,
								floor: this.ArtDetailComment[0].floor + 1,
								status: 0,
								shaked: false
							})
							this.sendMsg = ''
						} else {
							this.sendMsg = ''
							// this.ArtDetailComment.push({
							// 	articleId: this.ArtId,
							// 	content: this.sendMsg,
							// 	userId: this.userId,
							// 	avatar: uni.getStorageSync('userAvatar'),
							// 	pushUserId: '', 
							// 	userName: uni.getStorageSync('userName'),
							// 	level: uni.getStorageSync('userLevel'),
							// 	plateName: uni.getStorageSync('plateName'),
							// 	params: []
							// })
							// this.sendMsg = ''
						}
						
					}
				}
				
				
			}
 		}
	}
</script>

<style lang="less">
	.ArticleDetail{
		width: 100%;
		.showMoreBox{
			width: 100%;
			height: 100%;
			padding: 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.showMoreBox-item{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-right: 30rpx;
				box-sizing: border-box;
				image{
					width: 48rpx;
					height: 48rpx;
					// margin-bottom: 20rpx;
				}
				view{
					padding-top: 20rpx;
				}
			}
		}
		.ArticleDetail-title{
			// height: 86rpx;
			width: 100%;
			padding-left: 40rpx;
			padding-right: 36rpx;
			box-sizing: border-box;
			padding-top: var(--status-bar-height);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.back-img{
				position: relative;
				&::after{
					position: absolute;
					content: '';
					left: -30rpx;
					top: -30rpx;
					right: -30rpx;
					bottom: -30rpx;
				}
				.back{
					width: 18rpx;
					height: 34rpx;
				}
			}
			
			.ArticleDetail-title-center{
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #242424;
				letter-spacing: 0.07px;
				flex: 1;
				
				padding-left: 286rpx;
				// padding-right: 256rpx;
				box-sizing: border-box;
			}
			.like{
				width: 44rpx;
				height: 44rpx;
			}
	
		}
		.ArticleDetail-news-title{
			font-size: 20px;
			font-weight: bold;
			padding-left: 32rpx;
			padding-right: 32rpx;
			padding-top: 10rpx;
			display: -webkit-box;    
			-webkit-box-orient: vertical;    
			-webkit-line-clamp: 2;    //控制行数
			overflow: hidden;
			box-sizing: border-box;
		}
		.ArticleDetail-center{
			padding-top: 10rpx;
			.ArticleDetail-center-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 16rpx;
				padding-right: 34rpx;
				padding-bottom: 18rpx;
				padding-left: 32rpx;
				box-sizing: border-box;
				.ArticleDetail-center-top-left{
					display: flex;
					align-items: center;
					image{
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}
					.userInfo{
						padding-left: 32rpx;
						box-sizing: border-box;
						.userInfo-top{
							display: flex;
							align-items: center;
							padding-bottom: 8rpx;
							box-sizing: border-box;
							.userInfo-top-name{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #141414;
								letter-spacing: -0.34px;
							}
							.userInfo-top-level{
								font-family: PingFangSC-Medium;
								font-size: 12px;
								color: #FF7B30;
								letter-spacing: -0.24px;
								background: #FFFFFF;
								border: 1px solid #FF7B30;
								border-radius: 1px;
								padding: 0 6rpx;
								box-sizing: border-box;
								margin: 0 16rpx;
							}
							.userInfo-top-bozhu{
								padding: 0 10rpx;
								box-sizing: border-box;
								background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
								border-radius: 1px;
								font-family: PingFangSC-Medium;
								font-size: 8px;
								color: #FFFFFF;
								letter-spacing: -0.19px;
							}
							.userInfo-top-pla{
								padding: 0 10rpx;
								box-sizing: border-box;
								background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
								border-radius: 1px;
								font-family: PingFangSC-Medium;
								font-size: 8px;
								color: #FFFFFF;
								letter-spacing: -0.19px;
								margin-right: 10rpx;
								box-sizing: border-box;
								
							}
						}
						.userInfo-bottom{
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #686868;
							letter-spacing: -0.24px;
						}
					}
				}
				.ArticleDetail-center-top-right{
					height: 40rpx;
					padding: 0 14rpx;
					box-sizing: border-box;
					background: #FFFFFF;
					border: 1px solid #FF7B30;
					border-radius: 10px;
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
					}
					.ArticleDetail-center-top-right-text{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #FF7B30;
						letter-spacing: -0.34px;
						padding-left: 6rpx;
						box-sizing: border-box;
					}
				}
			}
			.ArticleDetail-center-main{
				padding-left: 36rpx;
				padding-right: 34rpx;
				padding-bottom: 30rpx;
				box-sizing: border-box;
				.ArticleDetail-center-main-title{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					font-weight: bold;
				}
				.ArticleDetail-center-main-center{
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.34px;
				}
				.ArticleDetail-center-main-img-box{
					padding-top: 10rpx;
					display: flex;
					flex-wrap: wrap;
					image{
						width: 216rpx;
						height: 216rpx;
						margin-right: 16rpx;
						margin-top: 10rpx;
						box-sizing: border-box;
						
						&:nth-child(3n){
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
					}
				}
				.ArticleDetail-center-main-footer-box{
					display: flex;
					align-items: center;
					justify-content: space-between;
					.ArticleDetail-center-main-footer-left{
						display: inline-block;
						padding: 0 28rpx;
						background: #909399;
						border-radius: 24rpx;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #FFFFFF;
						letter-spacing: -0.34px;
						.ArticleDetail-center-main-footer-left-box{
							display: flex;
							align-items: center;
							image{
								width: 32rpx;
								height: 32rpx;
								margin-right: 10rpx;
							}
						}
					}
					
					.ArticleDetail-center-main-footer{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #686868;
						letter-spacing: -0.24px;
						text-align: end;
					}
				}
				
			}
		}
		.ArticleDetail-footer{
			padding-bottom: 120rpx;
			box-sizing: border-box;
			.ArticleDetail-footer-top{
				width: 100%;
				height: 82rpx;
				display: flex;
				align-items: center;
				border-top: 1rpx solid #F4F4F4;
				border-bottom: 10rpx solid #f4f4f4;
				box-sizing: border-box;
				background-color: #fff;
				transition: .3s;
				
				&.stick{
					position:sticky;
					top: var(--status-bar-height);
					background-color: #fff;
					border-bottom: 0;
					z-index: 99;
				}
				.ArticleDetail-footer-top-item{
					width: 50%;
					text-align: center;
					line-height: 82rpx;
					border-right: 1rpx solid #F4F4F4;
					box-sizing: border-box;
					position: relative;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #3F3F3F;
					&::after{
						content: '';
						width: 0;
						height: 0;
						position: absolute;
						left: 50%;
						bottom: 15rpx;
						transform: translateX(-50%);
						border-bottom: 6rpx solid #FF682D;
						transition: all .3s;
					}
					&.active{
						color: #FF682D;
						&::after{
							width: 28%;
						}
					}
				}
			}
			.ArticleDetail-footer-main{
				.ArticleDetail-footer-main-item{
					border-bottom: 6rpx solid #F4F4F4;
					&:last-child{
						border-bottom: 0;
					}
				}
				.ArticleDetail-center-top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-top: 16rpx;
					padding-right: 34rpx;
					padding-bottom: 18rpx;
					padding-left: 32rpx;
					box-sizing: border-box;
					.ArticleDetail-center-top-left{
						display: flex;
						align-items: center;
						image{
							width: 92rpx;
							height: 92rpx;
							// width: 72rpx;
							// height: 72rpx;
							border-radius: 50%;
						}
						.userInfo{
							padding-left: 32rpx;
							box-sizing: border-box;
							.userInfo-top{
								display: flex;
								align-items: center;
								padding-bottom: 8rpx;
								box-sizing: border-box;
								.userInfo-top-name{
									font-family: PingFangSC-Medium;
									font-size: 14px;
									color: #141414;
									letter-spacing: -0.34px;
								}
								.userInfo-top-level{
									font-family: PingFangSC-Medium;
									font-size: 12px;
									color: #FF7B30;
									letter-spacing: -0.24px;
									background: #FFFFFF;
									border: 1px solid #FF7B30;
									border-radius: 1px;
									padding: 0 6rpx;
									box-sizing: border-box;
									margin: 0 16rpx;
								}
								.userInfo-top-bozhu{
									padding: 0 10rpx;
									box-sizing: border-box;
									background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
									border-radius: 1px;
									font-family: PingFangSC-Medium;
									font-size: 8px;
									color: #FFFFFF;
									letter-spacing: -0.19px;
								}
							}
							.userInfo-bottom{
								font-family: PingFangSC-Regular;
								font-size: 12px;
								color: #686868;
								letter-spacing: -0.24px;
							}
						}
					}
				}
				
				.ArticleDetail-footer-main-center{
					padding-left: 156rpx;
					padding-right: 34rpx;
				}
				.ArticleDetail-footer-main-footer{
					padding: 12rpx;
					padding-bottom: 20rpx;
					box-sizing: border-box;
					background-color: #F0F0F0;
					border-radius: 3px;
					overflow: hidden;
					margin-left: 156rpx;
					margin-right: 34rpx;
					margin-top: 16rpx;
					box-sizing: border-box;
					.ArticleDetail-footer-main-footer-item{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #141414;
						letter-spacing: -0.29px;
						padding-bottom: 10rpx;
						box-sizing: border-box;
					}
					.ArticleDetail-footer-main-footer-item-button{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #141414;
						letter-spacing: -0.29px;
						font-weight: bold;
					}
				}
			
				.ArticleDetail-footer-main-item-advertising{
					padding-top: 20rpx;
					padding-left: 36rpx;
					padding-left: 34rpx;
					padding-bottom: 26rpx;
					border-top: 14rpx solid #f4f4f4;
					box-sizing: border-box;
				
					.ArticleDetail-footer-main-item-advertising-top{
						display: flex;
						align-items: center;
						.ArticleDetail-footer-main-item-advertising-top-left{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
						}
						.ArticleDetail-footer-main-item-advertising-top-right{
							font-family: PingFangSC-Medium;
							font-size: 8px;
							color: #FF7B30;
							letter-spacing: -0.19px;
							border: 1px solid #FF7B30;
							border-radius: 1px;
							padding: 0 10rpx;
							box-sizing: border-box;
							margin-left: 16rpx;
						}
					}
					.ArticleDetail-footer-main-item-advertising-center{
						display: flex;
						flex-wrap: wrap;
						image{
							width: 216rpx;
							height: 216rpx;
							margin-right: 16rpx;
							margin-top: 20rpx;
							box-sizing: border-box;
							&:nth-child(3n){
								margin-right: 0;
							}
						}
					}
					.ArticleDetail-footer-main-item-advertising-footer{
						margin-top: 18rpx;
						box-sizing: border-box;
					}
				}
			
			}
			.chat-box{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.chat-dianzan{
					display: flex;
					align-items: center;
					.chat-dianzan-text{
						padding-right: 34rpx;
						
					}
					
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 12rpx;
						animation: shaked 2s linear 0s 1 alternate;
						animation-play-state:paused;
						&.startAnimation{
							animation-play-state:running;
						}
					}
				}
				.chat-img{
					text-align: end;
					padding-right: 34rpx;
					padding-top: 20rpx;
					padding-bottom: 20rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 12rpx;
					}
				}
			}
			
		}	
		.ArticleDetail-submit{
			width: 100%;
			height: 108rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 32rpx;
			padding-right: 34rpx;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			background-color: #fff;
			z-index: 99;
			.ArticleDetail-submit-left{
				image{
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
				}
			}
			.ArticleDetail-submit-center{
				width: 474rpx;
				// height: 100%;
				height: 68rpx;
				display: flex;
				align-items: center;
				background: #EFEFEF;
				border-radius: 17px;
				input{
					flex: 1;
					padding: 0 32rpx;
					box-sizing: border-box;
					font-size: 14px;
				}
			}
			.ArticleDetail-submit-right-chat{
				position: relative;
				image{
					width: 42rpx;
					height: 42rpx;
					
				}
				.ArticleDetail-submit-right-chat-number{
					// width: 26rpx;
					// height: 18rpx;
					position: absolute;
					right: -4rpx;
					top: -20rpx;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #FFFFFF;
					letter-spacing: -0.17px;
					background: #FF1414;
					border-radius: 4px;
					padding: 0 2rpx;
					box-sizing: border-box;
				}
			}
			.ArticleDetail-submit-right-share{
				image{
					width: 42rpx;
					height: 42rpx;
				}
			}
		}
		.sendButton{
			// flex: 1;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
		
	}
</style>
<style>
	@keyframes shaked{
		10% {
		    transform: rotate(15deg);
		  }
		  20% {
		    transform: rotate(-10deg);
		  }
		  30% {
		    transform: rotate(5deg);
		  }
		  40% {
		    transform: rotate(-5deg);
		  }
		  50%,100% {
		    transform: rotate(0deg);
		  } 
	}
</style>
