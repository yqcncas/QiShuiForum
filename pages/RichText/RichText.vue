<template>
	<view class="rich-text">
		<jyf-parser :html="html" ref="article"></jyf-parser>
		<view class="ArticleDetail-footer-main-item-advertising-center" v-if="!isRichText">
			<image :src="gGPic" mode="aspectFill" v-for="(gGPic, i) in pics" :key = "i" @click = "bigImg(gGPic, pics)"></image>
							
		</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		components: {
		    jyfParser
		},
		onLoad(options) {
			if (options.RichMain) {
				this.html = options.RichMain
				var reg = /<\/?[^>]*>/g
				this.isRichText =  reg.test(this.html)
			}
			if (options.title) {
				this.title = options.title
				uni.setNavigationBarTitle({
					title: this.title
				})
			}
			if (options.pics) {
				this.pics = JSON.parse(options.pics)
			}
			if (options.id) {
				this.id = options.id
				this.initRichText()
			}
			
		},
	    data() {
		    return {
		      html: '',
			  title: '',
			  isRichText: false,
			  pics: [],
			  id: 0
		    }
	    },
		methods: {
			bigImg (img, imgList) {
				uni.previewImage({
					current: img,
					urls: imgList
				})
			},
			async initRichText () {
				let res = await this.$fetch(this.$api.get_all_explain, {}, 'GET', 'FROM')
				console.log(res)
				if (this.id == 14) {
					this.html = res.data[0].content
					uni.setNavigationBarTitle({
						title: res.data[0].title
					})
				} else if (this.id == 15) {
					this.html = res.data[1].content
					uni.setNavigationBarTitle({
						title: res.data[1].title
					})
				} else if (this.id == 16) {
					this.html = res.data[2].content
					uni.setNavigationBarTitle({
						title: res.data[2].title
					})
				}
			}
		}
	}
</script>

<style lang="less">
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
</style>
