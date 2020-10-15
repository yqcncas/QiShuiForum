<template>
	<view class="index">
		<Status></Status>
		<mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption" :down = "downOption">
		<!-- 头 -->
		<!-- <mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption"> -->
		<view class="index-header">
			<view class="index-header-top">
				<view class="index-header-top-left" @click="handleCity">{{city ? city : '未选择' }}</view>
				<view class="index-header-top-center" @click="goToSearch">
					<view class="index-header-top-center-search">
						<image src="../../static/image/ych/index/3.png" mode=""></image>
					</view>
				</view>
				<view class="index-header-top-rihgt" @click.stop="goToMarket">
					<image src="../../static/image/ych/index/2.png" mode=""></image>
				</view>
			</view>
			<view class="index-header-bottom">
				<scroll-view scroll-x="true" :scroll-into-view="tochildView" scroll-with-animation>
					<view class="index-header-bottom-ul" v-if="headerNav.length > 1">
						<view class="index-header-bottom-li" :id="item.childId" @click="handleHeaderNavTabIndex(index)" :class="{navActive: navIndex == index}" v-for="(item, index) in headerNav" :key = "index">{{item.plateName}}</view>
					</view>
				</scroll-view>
				<view class="addli" @click.stop="goToIndexTabCongig">
					<image src="../../static/image/ych/index/1.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<!-- <mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption" :down = "downOption"> -->
		<!-- 轮播 -->
	<!-- 	<swiper style="height: calc(100vh);" :current="navIndex" @change="swiperChange">
			<swiper-item  v-for="(swiperItem, i) in headerNav" :key = "i"> -->
				<scroll-view scroll-y="true" style="height: calc(100vh)" @scrolltolower="lower">
					
						<view class="index-banner" v-if="bannerList.length">
							<view class="index-banner-wrapper" :style="{height: navIndex == 0 ? '420rpx' : '252rpx'}">
								<swiper  :autoplay="true" :interval="5000" :duration="1000" class="index-swiper" circular :style="{height: navIndex == 0 ? '420rpx' : '252rpx'}">
									<swiper-item class="index-swiper-item" v-for="(item, index) in bannerList" :key = "index" :style="{height: navIndex == 0 ? '420rpx' : '252rpx'}"> 
										<view class="swiper-item" :style="{height: navIndex == 0 ? '420rpx' : '252rpx'}">
											<!-- <image lazy-load :src="item.titlePic" mode="" @click = "goToArt(item)"></image> -->
											<u-image width="100%" height="420rpx" :src="item.titlePic" @click = "goToArt(item)" :lazy-load="true" v-if = "navIndex == 0">
												<u-loading slot="loading"></u-loading>
											</u-image>
											
											<u-image width="100%" height="252rpx" :src="item.titlePic" @click = "goToArt(item)" :lazy-load="true" v-if = "navIndex != 0">
												<u-loading slot="loading"></u-loading>
											</u-image>
											<view class="banner-text-title-box"></view>
											<view class="banner-text-title">{{item.title}}</view>
											
										</view>
									</swiper-item>
								<!-- 	<swiper-item class="index-swiper-item">
										<view class="swiper-item">
											<image src="http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853" mode=""></image>
										</view>
									</swiper-item> -->
								</swiper>
							</view>
						</view>
					<view class="first-page" v-if="navIndex == 0">
						<!-- 中部导航 -->
						<view class="index-main-nav">
							<view class="index-main-nav-top">
								<view class="index-main-nav-top-item" v-for="(item, index) in indexMainNavTop" :key = "index" @click="goToTopPage(item.id, item.plateName)">
									<image :src="item.platePic" mode="aspectFill"></image>
									<view class="index-main-nav-top-item-text">{{item.plateName}}</view>
								</view>
							</view>
					<!-- 		<view class="index-main-nav-bottom" v-if="indexMainNavTop.length">
								<view class="index-main-nav-top-item" v-for="(item, index) in indexMainNavBottom" :key = "index" @click="goToBottomPage(item.id, item.plateName)">
									<image :src="item.platePic" mode="aspectFill"></image>
									<view class="index-main-nav-top-item-text">{{item.plateName}}</view>
								</view>
							</view> -->
						</view>
						<!-- 灰线 -->
						<view class="line-7"></view>
						<!-- 在讨论 -->
						<view class="index-talk" @click="goToTopic">
							<view class="index-talk-top">
								<image src="../../static/image/ych/index/16.png" mode=""></image>
								<text>大家都在讨论</text>
							</view>
							<view class="index-talk-bottom">
								<text class="index-talk-bottom-item" v-for="(item, index) in talkArr" :key = "index" @click.stop="goToToppicDetail(item.id, item.name, item.titlePic, item.articleNum)">#{{item.name}}#</text>
							</view>
						</view>
						<view class="line-3"></view>
						<view class="index-weather" @click.stop="goToWeather">
							<image :src="weatherImg[weather.weaImg]" mode="aspectFill"></image>
							<view class="index-weather-main">{{weather.area}} {{weather.wea}} {{weather.tem2}}～{{weather.tem1}}度 {{weather.tip}}</view>
						</view>
						<view class="line-3"></view>
						
					</view> 
					
					<view class="fangchan-page" >
						<view class="fangchan-banner" v-if="currentTabIndexId == 1" >
							<image src="../../static/image/ych/index/fangchan1.png" mode="aspectFill" @click="goToHotHouse"></image>
							<image src="../../static/image/ych/index/fangchan2.png" mode="aspectFill" @click="goToHouseConsult(0)"></image>
							<image src="../../static/image/ych/index/fangchan3.png" mode="aspectFill" @click="goToHouseProperty"></image>
						</view>
						
						<view class="car-banner" v-if="currentTabIndexId == 2">
							<image src="../../static/image/ych/index/car2.png" mode="aspectFill" @click = "goToHotCar"></image>
							<image src="../../static/image/ych/index/car1.png" mode="aspectFill" @click = "goToHouseConsult(1)"></image>
						</view>
						
						<view class="show-box" v-if="navIndex != 0" :style="{paddingTop: bannerList == 0 ? '240rpx' : ''}">
							<view class="line-7" ></view>
							<Stick></Stick>
							<view class="line-3"></view>
							<NavButton v-if="tabShow" :navleft="'最新发布'" :navright="'精华帖'" :navIndex = "tabIndex" @handleNavIndex = "handleNavTabIndex"></NavButton>
							<view class="line-3"></view>
						</view>
					</view>
					 <Fab @trigger = "trigger" ></Fab>
					<ArticleMain @ArticleMainClick = "ArticleMainClick"  :ArticleList = "ArticleList" :hasFlag = "hasFlag"></ArticleMain>
					
				</scroll-view>
		<!-- 	</swiper-item>
		</swiper> -->
		
	   
		
		
		</mescroll-body>
		 <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
		 <u-no-network></u-no-network>
	</view>
		<!-- </mescroll-body> -->
</template>

<script>
	// #ifdef APP-PLUS
	import APPUpdate from "@/js_sdk/zhouWei-APPUpdate/APPUpdate";
	// #endif
	
	import simpleAddress from '@/components/simple-address/simple-address.vue';
	import ArticleMain from '../../components/ArticleMain/ArticleMain.vue'
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	import baseURL from '../../config/index.js'
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		onLoad() {
			// #ifdef APP-PLUS
			 APPUpdate()
			   // #endif
			
			if (uni.getStorageSync('cityName')) {
				this.city = uni.getStorageSync('cityName')
				uni.removeStorageSync("cityName")
			}
			if (uni.getStorageSync('adcode')) {
				this.areaCode = uni.getStorageSync('adcode')
			}
			// 获取当前城市
			this.initMyCity()
			// 获取banner
			this.initBanner()
			// 热帖
			this.hotTieZi()
			
			// 对版块进行处理
			if (uni.getStorageSync("token")) {
				this.initMyInfo()
			} else {
				this.initTabConfig()
			}
			// 置顶帖
			this.huatiList()
			
			// this.initIndexAllInfo()
		},
		onShow() {
			
			if (uni.getStorageSync("TabConfigFlag")) {
				uni.removeStorageSync("TabConfigFlag")
				if (uni.getStorageSync("token")) {
					this.initMyInfo()
				} else {
					this.initTabConfig()
				}
			}
			if (uni.getStorageSync('publishSuccess')) {
				uni.removeStorageSync('publishSuccess')
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.ArticleList = []
				this.initArtivleList(this.navIndex, this.headerNav[this.navIndex].id, '', 0)
			
			}
			
			// 登录成功进行操作
	
			if (uni.getStorageSync('loginSuccess')) {
		
				uni.removeStorageSync('loginSuccess')
				this.initIndexAllInfo()
			}
		},
		// onReachBottom () {
		// 	// this.initArtivleList(this.navIndex, this.headerNav[this.navIndex].id, '', 0)
		// },
		onTabItemTap (e) {
			this.headerNav = [{plateName: '推荐',childId: 'child99', id: 'tuijian'}],
			this.fancyArrId= [], // 头部导航ID
			this.tochildView= '',
			this.currentTabIndexId = 0,
			this.navIndex = 0, // 导航index
			this.pageNum = 0,
			this.pageSize = 10,
			this.hasFlag = true,
			this.activeId = '', // 底部切换记录id
			this.typeInIndex = [],
			this.ArticleList =[],
			this.indexMainNavTop = [], // 中部导航顶部
			this.indexMainNavBottom = [{platePic: '../../static/image/ych/index/8.png' , plateName: '商城'}, {platePic: '../../static/image/ych/index/9.png' , plateName: '广场'}], // 中部导航底部
			this.canPush = true
			this.talkArr = [],
			this.tabIndex = 0, // 底部Tab
			this.bannerList = [], // 轮播图
			this.hotTieZiIndex = 0,
			this.hotTieZiList = [] ,// 热门贴
			this.isCreamFlag = 0, // 是否为精华
			
			this.initBanner()
			// 热帖
			this.hotTieZi()
			
			// 对版块进行处理
			if (uni.getStorageSync("token")) {
				this.initMyInfo()
			} else {
				this.initTabConfig()
			}
			// 置顶帖
			this.huatiList()
		},
		onPullDownRefresh () {
			// this.pageNum = 0
			// this.pageSize = 10
			// this.hasFlag = true
			// this.ArticleList = []
			// this.initArtivleList(this.navIndex, this.headerNav[this.navIndex].id, '', 0)
			// setTimeout(() => {
			// 	uni.stopPullDownRefresh()
			// }, 700)
		},
		onHide() {
			
		},
		data() {
			return {
				city: '',
				// 选择城市
				cityPickerValueDefault: [10, 5,0],
				pickerText: '',
				// 头部导航
				headerNav: [{plateName: '推荐',childId: 'child99', id: 'tuijian'}],
				fancyArrId: [], // 头部导航ID
				tochildView: '',
				currentTabIndexId: 0,
				navIndex: 0, // 导航index
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				activeId: '', // 底部切换记录id
				typeInIndex: [],
				ArticleList: [],
				indexMainNavTop: [], // 中部导航顶部
				indexMainNavBottom: [{platePic: '../../static/image/ych/index/8.png' , plateName: '商城'}, {platePic: '../../static/image/ych/index/9.png' , plateName: '广场'}], // 中部导航底部
				
				talkArr: [],
				tabIndex: 0, // 底部Tab
				bannerList: [], // 轮播图
				hotTieZiIndex: 0,
				hotTieZiList: [] ,// 热门贴
				isCreamFlag: 0, // 是否为精华
				weather: {
					area: '',
					wea: '',
					tem2: '',
					tem1: '',
					tip: '',
					weaImg: ''
				},
				weatherImg: {
					yun: '../../static/image/ych/weather/1.png',
					xue: '../../static/image/ych/weather/2.png',
					lei: '../../static/image/ych/weather/3.png',
					shachen: '../../static/image/ych/weather/4.png',
					wu: '../../static/image/ych/weather/5.png',
					bingbao: '../../static/image/ych/weather/6.png',
					yu: '../../static/image/ych/weather/7.png',
					yin: '../../static/image/ych/weather/8.png',
					qing: '../../static/image/ych/weather/9.png'
				},
				upOption: {
					use: false
				},
				downOption: {
					native: false
				},
				canPush: true,
				showFab: true,
				tabShow: true,
				userId: '',
				areaCode: '',
				tuiJian: []
			}
		},
		components: {
		        simpleAddress,
				ArticleMain,
				uniFab
		},
		methods: {
			// 首页偶尔加不出来
			initIndexAllInfo () {
				this.headerNav = [{plateName: '推荐',childId: 'child99', id: 'tuijian'}],
				this.fancyArrId= [], // 头部导航ID
				this.tochildView= '',
				this.currentTabIndexId = 0,
				this.navIndex = 0, // 导航index
				this.pageNum = 0,
				this.pageSize = 10,
				this.hasFlag = true,
				this.activeId = '', // 底部切换记录id
				this.typeInIndex = [],
				this.ArticleList =[],
				this.indexMainNavTop = [], // 中部导航顶部
				this.indexMainNavBottom = [{platePic: '../../static/image/ych/index/8.png' , plateName: '商城'}, {platePic: '../../static/image/ych/index/9.png' , plateName: '广场'}], // 中部导航底部
				this.canPush = true
				this.talkArr = [],
				this.tabIndex = 0, // 底部Tab
				this.bannerList = [], // 轮播图
				this.hotTieZiIndex = 0,
				this.hotTieZiList = [] ,// 热门贴
				this.isCreamFlag = 0, // 是否为精华
				
				this.initBanner()
				// 热帖
				this.hotTieZi()
				
				// 对版块进行处理
				if (uni.getStorageSync("token")) {
					this.initMyInfo()
				} else {
					this.initTabConfig()
				}
				// 置顶帖
				this.huatiList()
			},
			downCallback () {
				// this.pageNum = 0
				// this.pageSize = 10
				// this.hasFlag = true
				// this.ArticleList = []
				// this.hotTieZiIndex = 0,
				// this.hotTieZiList = [] ,// 热门贴
				// this.hotTieZi()
				// this.initArtivleList(this.navIndex, this.headerNav[this.navIndex].id, '', 0)
				this.headerNav = [{plateName: '推荐',childId: 'child99', id: 'tuijian'}],
				this.fancyArrId= [], // 头部导航ID
				this.tochildView= '',
				this.currentTabIndexId = 0,
				this.navIndex = 0, // 导航index
				this.pageNum = 0,
				this.pageSize = 10,
				this.hasFlag = true,
				this.activeId = '', // 底部切换记录id
				this.typeInIndex = [],
				this.ArticleList =[],
				this.indexMainNavTop = [], // 中部导航顶部
				this.indexMainNavBottom = [{platePic: '../../static/image/ych/index/8.png' , plateName: '商城'}, {platePic: '../../static/image/ych/index/9.png' , plateName: '广场'}], // 中部导航底部
				this.canPush = true
				this.talkArr = [],
				this.tabIndex = 0, // 底部Tab
				this.bannerList = [], // 轮播图
				this.hotTieZiIndex = 0,
				this.hotTieZiList = [] ,// 热门贴
				this.isCreamFlag = 0, // 是否为精华
				
				this.initBanner()
				// 热帖
				this.hotTieZi()
				
				// 对版块进行处理
				if (uni.getStorageSync("token")) {
					this.initMyInfo()
				} else {
					this.initTabConfig()
				}
				// 置顶帖
				this.huatiList()
				
				setTimeout(() => {
					this.mescroll.endDownScroll()
				}, 700)
				
			},
			// 获取当前位置
			initMyCity () {
			
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: (res) => {
						console.log(res)
						let city = res.address.district
						if (res.address.district.includes('市')) {
							city = res.address.district.replace('市', '')
						} else if (res.address.district.includes('区')) {
							city = res.address.district.replace('区', '')
						} else if (res.address.district.includes('县')) {
							city = res.address.district.replace('县', '')
						}
						
						uni.request({
							url: `https://tianqiapi.com/api?version=v6&appid=58839827&appsecret=mfXwgT8Q`, //仅为示例，并非真实接口地址。
							data:{
								city: city
							},
							success: (res) => {
								console.log(res);
								this.weather = {
									area: res.data.city,
									wea: res.data.wea,
									tem2: res.data.tem2,
									tem1: res.data.tem1,
									tip: res.data.air_tips,
									weaImg: res.data.wea_img
								}
								this.$set(this.weather, 'area', res.data.city)
								this.$set(this.weather, 'wea', res.data.wea)
								this.$set(this.weather, 'tem2', res.data.tem2)
								this.$set(this.weather, 'tem1', res.data.tem1)
								this.$set(this.weather, 'tip', res.data.air_tips)
								this.$set(this.weather, 'weaImg', res.data.wea_img)
							}
						});
						
						// let location = res.longitude + ',' + res.latitude
						// uni.request({
						//    url: 'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=' + res.longitude + ',' + res.latitude +
						//    	'&key=a88aa9fb1f935caab43d092a6c3a2449&radius=1000&extensions=all',
						// 	method: "GET",
						//     success: (response) => {
						//         console.log(response);
						// 		this.adcode = response.data.regeocode.addressComponent.adcode
						// 		this.city = res.address.district
						// 				// uni.setStorageSync('city', res.address.city)
						// 				let city = uni.getStorageSync('city')
						// 				uni.setStorageSync('cityCode', res.address.cityCode)
						// 				uni.request({
						// 				    url: `https://tianqiapi.com/api?version=v6&appid=58839827&appsecret=mfXwgT8Q`, //仅为示例，并非真实接口地址。
						// 					data:{
						// 						city: city
						// 					},
						// 				    success: (res) => {
						// 				        console.log(res);
						// 						this.weather = {
						// 							area: res.data.city,
						// 							wea: res.data.wea,
						// 							tem2: res.data.tem2,
						// 							tem1: res.data.tem1,
						// 							tip: res.data.air_tips,
						// 							weaImg: res.data.wea_img
						// 						}
						// 						this.$set(this.weather, 'area', res.data.city)
						// 						this.$set(this.weather, 'wea', res.data.wea)
						// 						this.$set(this.weather, 'tem2', res.data.tem2)
						// 						this.$set(this.weather, 'tem1', res.data.tem1)
						// 						this.$set(this.weather, 'tip', res.data.air_tips)
						// 						this.$set(this.weather, 'weaImg', res.data.wea_img)
						// 				    }
						// 				});
						// 			},
						// 			fail: (err) => {
						// 				console.log(err)
						// 			}
						// 		});
						    }
						});
						
					
				
				// this.initCityWeather()
				
				
				
			},
			
			initCityWeather(city) {
				if (uni.getStorageSync('cityCode')) {
					// let location = uni.getStorageSync('location')
					let cityCode = uni.getStorageSync('cityCode')
					console.log(cityCode)
					uni.request({
					    url: `https://tianqiapi.com/api?version=v6&appid=58839827&appsecret=mfXwgT8Q`, //仅为示例，并非真实接口地址。
						data:{
							city: city
						},
						method:"GET",
					    success: (res) => {
					        console.log(res);
							this.weather = {
								area: res.data.city,
								wea: res.data.wea,
								tem2: res.data.tem2,
								tem1: res.data.tem1,
								tip: res.data.air_tips,
								weaImg: res.data.wea_img
							}
							this.$set(this.weather, 'area', res.data.city)
							this.$set(this.weather, 'wea', res.data.wea)
							this.$set(this.weather, 'tem2', res.data.tem2)
							this.$set(this.weather, 'tem1', res.data.tem1)
							this.$set(this.weather, 'tip', res.data.air_tips)
							this.$set(this.weather, 'weaImg', res.data.wea_img)
					    }
					});
				}
			},
			
			// 获取banner
			async initBanner () {
				let res = await this.$fetch(this.$api.getadvertlist, {adcode: this.areaCode, type: 1}, 'POST', 'FORM')
				// console.log(res)
				this.bannerList = res.data
			},
			// 切换头部导航
			handleHeaderNavTabIndex (index) {
				this.navIndex = index
				
				this.tochildView = index == 0 ? this.headerNav[index].childId : this.headerNav[index - 1].childId
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.currentTabIndexId = this.headerNav[index].id
				this.ArticleList = []
				this.bannerList = []
				this.hotTieZiIndex = 0
				this.initLunBo(this.headerNav[index].id)
				this.initArtivleList(index, this.headerNav[index].id, '', 0)
				
				
			},
			swiperChange (e) {
				
				this.handleHeaderNavTabIndex(e.detail.current)
			},
			// 轮播
			async initLunBo (id) {
				let res
				if (id == 'tuijian') {
					res = await this.$fetch(this.$api.getadvertlist, {adcode: this.areaCode, type: 1}, 'POST', 'FORM')
					this.bannerList = res.data
				} else if (id == 'guangchang') {
					this.bannerList = []
				} else {
					res = await this.$fetch(this.$api.getrotationchart, {adcode: this.areaCode, plateTypeId: id}, 'POST', 'FORM')
					res.data.forEach(item => {
						item.titlePic = item.picPath
					})
					this.bannerList = res.data
				}
				console.log(id)
				console.log(res)
				if (id == 'guangchang') {
					this.tabShow = false
				} else {
					this.tabShow = true
				}
			},
			// 轮播图点击
			goToArt (item) {
				console.log(item)
				if (item.relationId) {
					uni.navigateTo({
						url: './ArticleDetail?id=' + item.id + '&userId=' + item.userId
					})
				} else {
					// uni.setStorageSync('RichMainText', item.content)
					// uni.navigateTo({
					// 	url: '../RichText/RichText?RichMain=' + '' + '&title=' + item.title + '&bannerId=' + item.articleId
					// })
					uni.navigateTo({
						url: './ArticleDetail?id=' + item.articleId + '&userId=' + item.userId
					})
				}
			},
			// 文章              // 下标   id  推荐数组 type 1 首次进 0 点击
			async initArtivleList (index, id, arr, type) {
			
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				this.activeId = id
				
				if (id == 'tuijian') {
					console.log('123')
					console.log(arr)
					// type 1 才有 arr 
					if (type == 1) {
						this.typeInIndex = arr
					}
					let DemoArr = []
					
					// let res = await this.$fetch(this.$api.artivle_list, {adcode: this.areaCode,recommendSwitch: 1, typeIn: this.typeInIndex, pageNum: this.pageNum, pageSize: 10,userId: this.userId}, 'POST', 'FORM')
					
					let res = await this.$fetch(this.$api.artivle_list, {adcode: this.areaCode,recommendSwitch: 1, pageNum: this.pageNum, pageSize: 10,userId: this.userId}, 'POST', 'FORM')
					// console.log(res) 
					this.hasFlag = this.pageNum * 10 < res.total
					res.rows.forEach((item, index) => {
						item.content = JSON.parse(item.content)
						item.pics = JSON.parse(item.pics)
						item.isGg = false
					})
					
					DemoArr = res.rows
					
					DemoArr.forEach((item,index) => {
						console.log(index, this.hotTieZiIndex, this.hotTieZiList.length)
						if (index == 0 && this.hotTieZiIndex <= this.hotTieZiList.length -1) {
							console.log('1111')
							DemoArr.splice(0, 0, this.hotTieZiList[this.hotTieZiIndex])
							// console.log(res.rows)
							this.hotTieZiIndex += 1
						} else if (index == 4 && this.hotTieZiIndex <= this.hotTieZiList.length -1) {
							DemoArr.splice(4, 0, this.hotTieZiList[this.hotTieZiIndex])
							this.hotTieZiIndex += 1
						} else if (index == 8 && this.hotTieZiIndex <= this.hotTieZiList.length -1) {
							DemoArr.splice(8, 0, this.hotTieZiList[this.hotTieZiIndex])
							this.hotTieZiIndex += 1
						}
					})
					
					// console.log(this.hotTieZiList)
					
					this.ArticleList = [...this.ArticleList, ...DemoArr]
					console.log(this.ArticleList )
					let obj = {};
					// 要去重的数组
					this.ArticleList = this.ArticleList.reduce((cur,next) => {
					    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
					    return cur;
					},[]) //设置cur默认类型为数组，并且初始值为空的数组
					
	
					
					
					
				} else if (id == 'guangchang') {
					let res = await this.$fetch(this.$api.artivle_list, {adcode: this.areaCode, pageNum: this.pageNum, pageSize: 10, userId: this.userId}, 'POST', 'FORM')
					// console.log(res)
					this.hasFlag = this.pageNum * 10 < res.total
					res.rows.forEach((item, index) => {
						item.content = JSON.parse(item.content)
						item.pics = JSON.parse(item.pics)
					})
					this.ArticleList = [...this.ArticleList, ...res.rows]
					let obj = {};
					// 要去重的数组
					this.ArticleList = this.ArticleList.reduce((cur,next) => {
					    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
					    return cur;
					},[]) //设置cur默认类型为数组，并且初始值为空的数组
					
					
					
				} else {
					
					let res = await this.$fetch(this.$api.artivle_list, {adcode: this.areaCode, isCreamFlag:this.isCreamFlag, type: id, pageNum: this.pageNum, pageSize: 10, userId: this.userId}, 'POST', 'FORM')
					console.log(res)
					this.hasFlag = this.pageNum * 10 < res.total
					res.rows.forEach(item => {
						item.content = JSON.parse(item.content)
						item.pics = JSON.parse(item.pics)
					})
					this.ArticleList = [...this.ArticleList, ...res.rows]
					let obj = {};
					// 要去重的数组
					this.ArticleList = this.ArticleList.reduce((cur,next) => {
					    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
					    return cur;
					},[]) //设置cur默认类型为数组，并且初始值为空的数组
				}
			},
			// 个人信息 获取版块用
			async initMyInfo () {
				let res = await this.$fetch(this.$api.getCurrentUser, {}, 'GET', 'FORM')
				// console.log(res)
				this.fancyArrId = res.data.user.recommendPlate.split(',')
				// console.log(fancyArrId)
				uni.setStorageSync('userId', res.data.userId)
				
				if (res.data.token) {
					uni.setStorageSync('token', res.data.token)
				}
				this.userId = res.data.userId
				this.initTabConfig()
			},
			
			// 获取Tabbar配置
			async initTabConfig () {
				this.headerNav = [{plateName: '推荐',childId: 'child99', id: 'tuijian'}]
				let res = await this.$fetch(this.$api.getAllPlate, {}, 'POST', 'FORM')
					
				this.indexMainNavTop  = res.data.slice(0, 4)
				if (this.canPush) {
					this.indexMainNavBottom.push(...res.data.slice(4, 6))
				}
				
				this.canPush = false
			
				
				
				
				// console.log(res.data.slice(4, 6))
				
				// let obj = {};
				// // 要去重的数组
				// this.indexMainNavBottom = this.indexMainNavBottom.reduce((cur,next) => {
				//     obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
				//     return cur;
				// },[]) //设置cur默认类型为数组，并且初始值为空的数组
				
				// console.log(this.tabInfo)
				
				
				// console.log(res.data.slice(5, 7))
				res.data.forEach((item, index) => {
					if (item.isDefault == 1) {
						this.headerNav.push(item)
					}
					// console.log(this.fancyArrId)
					if (this.fancyArrId.length) {
						this.fancyArrId.forEach((it, i) => {
							if (item.id == it) {
								this.headerNav.push(item)
							}
						}) 
					}
				})
				console.log(this.headerNav)
				this.headerNav = [...new Set(this.headerNav)]
				
				// console.log(this.headerNav.slice(1, this.headerNav.length))
				let tuijian = this.headerNav.slice(1, this.headerNav.length)
				// 获取文章
				let tuijianArr  = []
				tuijian.forEach(item => {
					tuijianArr.push(item.id)
				})
				this.tuiJian = tuijianArr
				this.initArtivleList(0, 'tuijian', tuijianArr, 1)
				this.headerNav.push(({plateName: '广场', id: 'guangchang'}))
				this.headerNav.push(({plateName: '', id: 'kong'}))
				this.headerNav.forEach(item => {
					item.childId = 'child' + item.id
				})
				let obj = {};
				// 要去重的数组
				this.headerNav = this.headerNav.reduce((cur,next) => {
				    obj[next.plateName] ? "" : obj[next.plateName] = true && cur.push(next);
				    return cur;
				},[]) //设置cur默认类型为数组，并且初始值为空的数组
				
			},
			// 文章点击
			ArticleMainClick (id, userId, item) {
				// console.log(index)
				if (item.isGg) {
					// uni.setStorageSync('RichMainText', item.content)
					// uni.navigateTo({
					// 	// url: '../RichText/RichText?RichMain=' + item.content + '&title=' + item.title
					// 	url: '../RichText/RichText?id=' + item.articleId + '&userId=' + item.userId
					// })
					uni.navigateTo({
						url: './ArticleDetail?id=' + item.articleId + '&userId=' + item.userId
					})
				} else {
					uni.navigateTo({
						url: './ArticleDetail?id=' + id + '&userId=' + userId
					})
				}
				
			},
			// 热门帖子广告
			async hotTieZi () {
				// this.hotTieZiIndex
				let res = await this.$fetch(this.$api.getadvertlist, {adcode: this.areaCode, type: 2}, 'POST', 'FORM')
				console.log(res)
				res.data.forEach(item => {
					if (item.content) {
						item.newcontent = this.filterHTMLTag(item.content)
					} else {
						item.newcontent = ''
					}
					item.isGg = true
					// 
					// console.log(JSON.parse(item.pics))
					if (item.pics.length) {
						item.pics = JSON.parse(item.pics)
					}
				})
				this.hotTieZiList = res.data
			
				console.log(this.hotTieZiList)
				
				
				
			},
			// 去除HTML标签
			filterHTMLTag (msg) {
				var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
				msg = msg.replace(/[|]*\n/, '') //去除行尾空格
				msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
				return msg; 
			},
			// 触底
			lower () {
				this.initArtivleList(this.navIndex, this.headerNav[this.navIndex].id, '', 0)
			},
			// 选择城市
			handleCity () {
				this.$refs.simpleAddress.open();
			},
			// 选择城市点击确定
			onConfirm(e) {
				if (e.labelArr[1] !=  '绍兴市') return uni.showToast({
					icon: 'none',
					title: '当前仅开通绍兴市'
				})
				this.pickerText = e;
				console.log(this.pickerText)
				this.city = this.pickerText.labelArr[2]
				let city = ''
				console.log(this.city.includes('区'))
				if (this.city.includes('市')) {
					city = this.city.replace('市', '')
				} else if (this.city.includes('区')) {
					city = this.city.replace('区', '')
				} else if (this.city.includes('县')) {
					city = this.city.replace('县', '')
				}
					
				this.areaCode = this.pickerText.areaCode
				uni.setStorageSync('adcode', this.areaCode)
				let cityName = this.pickerText.labelArr[0] + this.pickerText.labelArr[1] + this.pickerText.labelArr[2]
				uni.request({
				   url: 'https://restapi.amap.com/v3/geocode/geo?output=JSON&address=' + cityName +
				   	'&key=a88aa9fb1f935caab43d092a6c3a2449',
					method: "GET",
				    success: (response) => {
				        console.log(response);
						// console.log(response.data.geocodes)
						uni.setStorageSync('cityCode', response.data.geocodes[0].citycode)
						console.log(city)
						this.initCityWeather(city)
						// this.pageNum = 0
						// this.pageSize = 10
						// this.hasFlag = true
						// this.ArticleList = []
						// this.navIndex = 0
						// this.initArtivleList(0, 'tuijian', this.tuiJian, 1)
						// this.adcode = response.data.regeocode.addressComponent.adcode
						
						this.headerNav = [{plateName: '推荐',childId: 'child99', id: 'tuijian'}],
						this.fancyArrId= [], // 头部导航ID
						this.tochildView= '',
						this.currentTabIndexId = 0,
						this.navIndex = 0, // 导航index
						this.pageNum = 0,
						this.pageSize = 10,
						this.hasFlag = true,
						this.activeId = '', // 底部切换记录id
						this.typeInIndex = [],
						this.ArticleList =[],
						this.indexMainNavTop = [], // 中部导航顶部
						this.indexMainNavBottom = [{platePic: '../../static/image/ych/index/8.png' , plateName: '商城'}, {platePic: '../../static/image/ych/index/9.png' , plateName: '广场'}], // 中部导航底部
						this.canPush = true
						this.talkArr = [],
						this.tabIndex = 0, // 底部Tab
						this.bannerList = [], // 轮播图
						this.hotTieZiIndex = 0,
						this.hotTieZiList = [] ,// 热门贴
						this.isCreamFlag = 0, // 是否为精华
						
						this.initBanner()
						// 热帖
						this.hotTieZi()
						
						// 对版块进行处理
						if (uni.getStorageSync("token")) {
							this.initMyInfo()
						} else {
							this.initTabConfig()
						}
						// 置顶帖
						this.huatiList()
						
						
						
						
				    }
				});
				
				
			},
			// 去搜索
			goToSearch () {
				uni.navigateTo({
					url: '../Search/Search'
				})
			},
			// 去tab添加
			goToIndexTabCongig () {
				uni.navigateTo({
					url: '../IndexTabConfig/IndexTabConfig'
				})
			},
			// 去发布
			trigger(index) {
				if (index == 0) {
					uni.navigateTo({
						url: './Publish?type=' + 0
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: './Publish?type=' + 1
					})
				} else {
					uni.navigateTo({
						url: './Publish?type=' + 2
					})
				}
			},
			// 中部导航跳转
			goToTopPage (id, title) {
				uni.navigateTo({
					url: '../HouseProperty/House?type=' + id + '&title=' + title
				})
			},
			goToMarket () {
				uni.switchTab({
					url: '../Market/Market'
				})
			},
			goToBottomPage (id, title) {
				if (title == '商城') {
					uni.switchTab({
						url: '../Market/Market'
					})
				} else if (title == '广场') {
					id = 'gc'
					uni.navigateTo({
						url: '../HouseProperty/House?type=' + id + '&title=' + title
					})
				} else {
					uni.navigateTo({
						url: '../HouseProperty/House?type=' + id + '&title=' + title
					})
				}
				
				
				
			},
			// 去话题
			goToTopic () {
				uni.navigateTo({
					url: './Topic'
				})
			},
			// 底部导航切换
			async handleNavTabIndex (index) {
				
				this.tabIndex = index
				this.pageNum = 0
				this.hasFlag = true
				this.ArticleList = []
				if (index == 0) {
					this.isCreamFlag = 0
				} else {
					this.isCreamFlag = 1
				}
				this.initArtivleList(this.navIndex, this.headerNav[this.navIndex].id, '', 0)
				
				// this.tabIndex = index
				// this.pageNum = 0
				// this.hasFlag = true
				// this.ArticleList = []
				// if (index == 0) {
				// 	let res = await this.$fetch(this.$api.artivle_list, {type: this.activeId, pageNum: this.pageNum, pageSize: 10}, 'POST', 'FORM')
									
				// 	res.rows.forEach(item => {
				// 		item.content = JSON.parse(item.content)
				// 		item.pics = JSON.parse(item.pics)
				// 	})
				// 	this.ArticleList = [...this.ArticleList, ...res.rows]
					
				// 	this.hasFlag = this.pageNum * 10 < res.total
				// } else {
				// 	let res = await this.$fetch(this.$api.artivle_list, {isCreamFlag:1, type: this.activeId, pageNum: this.pageNum, pageSize: 10}, 'POST', 'FORM')
									
				// 	res.rows.forEach(item => {
				// 		item.content = JSON.parse(item.content)
				// 		item.pics = JSON.parse(item.pics)
				// 	})
				// 	this.ArticleList = [...this.ArticleList, ...res.rows]
					
				// 	this.hasFlag = this.pageNum * 10 < res.total
				// }
			},
			// 去找租房
			goToHouseProperty () {
				uni.navigateTo({
					url: '../HouseProperty/HouseProperty?title=' + '找租房'
				})
			},
			// 去热卖楼盘
			goToHotHouse () {
				uni.navigateTo({
					url: '../HotHouse/HotHouse'
				})
			},
			// 去房产咨询
			goToHouseConsult (index) {
				uni.navigateTo({
					url: '../HouseProperty/HouseConsult?type=' + index
				})
			},
			// 去热卖车款
			goToHotCar () {
				uni.navigateTo({
					url: '../HotHouse/HotCar'
				})
			},
			// 都在讨论
			async huatiList () {
				let res = await this.$fetch(this.$api.new_label, {pageNum: 1, pageSize: 10}, 'POST', 'FORM')
				console.log(res)
				this.talkArr = res.rows
			},
			// 去话题详情
			goToToppicDetail (id, name, titlePic, articleNum) {
				// uni.navigateTo({
				// 	url: './TopicDetail?id=' + id
				// })
				uni.navigateTo({
					url: './TopicDetail?id=' + id + '&name=' + name + '&titlePic=' + titlePic + '&articleNum=' + articleNum
				})
			},
			goToWeather () {
				let w = plus.webview.create("https://apip.weatherdt.com/v2/h5.html?bg=1&md=02345&lc=auto&key=vMJOhhQMjP",'id',{
				     'kernel':'UIWebview',
				     'titleNView':{ // 设置标题栏
				      autoBackButton:true,
				      titleText: '天气'
				     },
				     'backButtonAutoControl':'close'   // 关闭回退
				})
				w.show('pop-in') // 显示
				
				// uni.navigateTo({
				// 	url: '../weather/weather'
				// })
			}
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	.index{
		.index-header{
			width: 100%;
			padding-top: var(--status-bar-height);
			position: fixed;
			z-index: 9;
			padding-bottom:10rpx;
			background-color: #fff;
			.index-header-top{
				width: 100%;
				height: 120rpx;
				display: flex;
				align-items: center;
				padding-left: 32rpx;
				padding-right: 48rpx;
				box-sizing: border-box;
				.index-header-top-left{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					font-weight: bold;
					padding-right: 28rpx;
					box-sizing: border-box;
				}
				.index-header-top-center{
					flex: 1;
					.index-header-top-center-search{
						width: 100%;
						height: 58rpx;
						background: #EFEFEF;
						border-radius: 14.5px;
						display: flex;
						align-items: center;
						padding-left: 18rpx;
						box-sizing: border-box;
						image{
							width: 34rpx;
							height: 34rpx;
							margin-left: 18rpx;
							
						}
					}
				}
				.index-header-top-rihgt{
					display: flex;
					align-items: center;
					padding-left: 20rpx;
					box-sizing: border-box;
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
			.index-header-bottom{
				width: 100%;
				height: 44rpx;
				position: relative;
				// overflow-x: hidden;
				.index-header-bottom-ul{
					width: 100%;
					height: 100%;
					white-space: nowrap;
					display: inline-block;
					// position: relative;
				
					.index-header-bottom-li{
						width: 128rpx;
						height: 100%;
						display: inline-block;
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #141414;
						letter-spacing: -0.39px;
						position: relative;
						text-align: center;
						&::after{
							content: '';
							width: 0;
							height: 0;
							border-bottom: 6rpx solid #FF682D;
							position: absolute;
							bottom: 0;
							left: 50%;
							transform: translateX(-50%);
							transition: all .3s; 
						}
						&.navActive{
							font-size: 16px;
							color: #FF682D;
							&::after{
								width: 50%;
							}
						}
					}
					
				}
				.addli{
					width: 64rpx;
					height: 44rpx;
					position: absolute;
					right: 0;
					transform: translateY(-100%);
					text-align: center;
					background: #FFFFFF;
					box-shadow: -2px 0 2px -1px rgba(167,167,167,0.50);
					image{
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
		}
		.index-banner{
			padding-top: 236rpx;
			box-sizing: border-box;
			
			.index-banner-wrapper{
				width: 100%;
				// height: 336rpx;
				height: 420rpx;
				// overflow:hidden;
				// width:100%;
				// height:0;
				// padding-bottom: calc(750rpx / 336rpx);
				.index-swiper{
					width: 100%;
					// height: 336rpx;
					height: 420rpx;
					.index-swiper-item{
						width: 100%;
						// height: 336rpx;
						height: 420rpx;
						.swiper-item{
							width: 100%;
							// height: 336rpx;
							height: 420rpx;
							position: relative;
							image{
								width: 100%;
								height: 100%;
							}
							.banner-text-title-box{
								position: absolute;
								width: 100%;
								height: 40rpx;
								bottom: 0;
								left: 0;
								z-index: 9999;
								background-color: #000000;
								opacity: 0.3;
							}
							.banner-text-title{
								position: absolute;
								// width: 100%;
								line-height: 40rpx;
								bottom: 0;
								left: 0;
								z-index: 9999;
								color: #FFFFFF;
								padding-left: 20rpx;
								box-sizing: border-box;
								display: -webkit-box;    
								-webkit-box-orient: vertical;    
								-webkit-line-clamp: 1;    //控制行数
								overflow: hidden;
							}
							
						}
					}
					
				}
				
			}
		}
		
		.index-main-nav{
			padding: 22rpx 64rpx 22rpx 58rpx;
			box-sizing: border-box;
			.index-main-nav-top, .index-main-nav-bottom{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.index-main-nav-top-item{
					display: flex;
					flex-direction: column;
					align-items: center;
					image{
						width: 92rpx;
						height: 92rpx;
					}
					.index-main-nav-top-item-text{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #545454;
						letter-spacing: -0.29px;
					}
				}
			}
			.index-main-nav-bottom{
				padding-top: 38rpx;
				box-sizing: border-box;
			}
		}
		
		.index-talk{
			width: 100%;
			padding: 22rpx 38rpx;
			box-sizing: border-box;
			.index-talk-top{
				display: flex;
				align-items: center;
				padding-bottom: 30rpx;
				box-sizing: border-box;
				image{
					width: 28rpx;
					height: 28rpx;
				}
				text{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding-left: 14rpx;
					box-sizing: border-box;
				}
			}
			.index-talk-bottom{
				.index-talk-bottom-item{
					display: inline-block;
					// width: 33%;
					// text-align: center;
					// margin-right: 180rpx;
					margin-right: 60rpx;
					color: rgb(0, 122, 255);
					&:last-child{
						margin-right: 0;
					}
				}
			}
		}
		.index-weather{
			width: 100%;
			height: 72rpx;
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			padding: 0 38rpx;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			image{
				width: 32rpx;
				height: 32rpx;
			}
			.index-weather-main{
				flex: 1;
				padding-left: 20rpx;
				box-sizing: border-box;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.29px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		
		.fangchan-page{
			.fangchan-banner{
				width: 100%;
				height: 152rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				image{
					width: 220rpx;
					height: 106rpx;
				}
			}
			.car-banner{
				width: 100%;
				height: 152rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				box-sizing: border-box;
				image{
					width: 332rpx;
					height: 106rpx;
					&:nth-child(2){
						// margin-left: 22rpx;
					}
				}
			}
		}
		
	}
</style>
<style>
	.uni-fab__circle{
		transform: scale(0.6);
	}
	.uni-fab{
		transform: scale(0.9);
	}
	::-webkit-scrollbar {
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    color: transparent;
	    background: transparent;  
	}
</style>