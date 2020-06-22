<template>
	<view class="ArticleMain ">
		<view class="ArticleMain-info">
			<!-- 数据展示 -->
			<view class="ArticleMain-info-item" v-for="(item, index) in ArticleList" :key = "index" @click="ArticleMainClick(index)">
				<!-- 第一条 -->
				<view class="ArticleMain-info-item-first" v-if="item.pics.length == 1">
					<view class="ArticleMain-info-item-first-left">
						<view class="ArticleMain-info-item-first-left-top u-skeleton-rect">{{item.title}}</view>
						<view class="ArticleMain-info-item-first-left-bottom">
							<view class="ArticleMain-info-item-first-left-bottom-read u-skeleton-rect">{{item.browseNum}}阅读量</view>
							<view class="ArticleMain-info-item-first-left-bottom-timer u-skeleton-rect">{{item.createTime}}</view>
						</view>
					</view>
					<view class="ArticleMain-info-item-first-right">
						<image :src="item.pics[0]" mode="aspectFill"></image>
					</view>
				</view>
				<!-- 剩余的 -->
				<view class="ArticleMain-info-item-else" v-else>
					<view class="ArticleMain-info-item-else-top">{{item.title}}</view>
					<view class="ArticleMain-info-item-else-center"   v-if="item.pics.length">
						<image :src="itemImg" mode="aspectFill" v-for="(itemImg, i) in item.pics" :key = "i"></image>
					</view>
					<view class="ArticleMain-info-item-else-bottom">
						<view class="ArticleMain-info-item-else-bottom-left">{{item.browseNum}}阅读量</view>
						<view class="ArticleMain-info-item-else-bottom-right">{{item.createTime}}</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				ArticleMainArr: [
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854']	
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457'
							]
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854']	
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457'
							
							]
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854']	
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457'
							
							]
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854']	
					},
					{
						title: "两会今日看点：人大会议闭幕 李克强会见中外记者",
						reader: '88',
						timer: "2020年05月28日 00:07",
						image: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=f5d2fbefe05d20bb072e110a1cb43926&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D29311073%2C358824429%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457',
							'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591878427657&di=399de37eb633f437eea5f354844a2129&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D747431361%2C2735836448%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3682%26h%3D2457'
							
							]
					}
				]
			}
		},
		methods: {
			ArticleMainClick (index) {
				this.$emit('ArticleMainClick', index)
			}
		},
		props:{
			ArticleList: {
				type: Array,
				default: () => [],
				redirect: true
			}
		}
	}
</script>

<style lang="less">
	.ArticleMain{
		width: 100%;
		.ArticleMain-info{
			.ArticleMain-info-item{
				padding-top: 20rpx;
				padding-left: 34rpx;
				padding-right: 34rpx;
				box-sizing: border-box;
				&:last-child{
					.ArticleMain-info-item-else{
						border-bottom: 0;
						padding-bottom: 30rpx;
					}
				}
				.ArticleMain-info-item-first{
					width: 100%;
					padding-bottom: 25rpx;
					display: flex;
					border-bottom: 1rpx solid #D8D8D8;
					box-sizing: border-box;
					.ArticleMain-info-item-first-left{
						padding-right: 22rpx;
						box-sizing: border-box;
						.ArticleMain-info-item-first-left-top{
							width: 412rpx;
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
							font-weight: bold;
							display: -webkit-box;    
							-webkit-box-orient: vertical;    
							-webkit-line-clamp: 2;    //控制行数
							overflow: hidden;
						}
						.ArticleMain-info-item-first-left-bottom{
							display: flex;
							font-family: PingFangSC-Regular;
							font-size: 10px;
							color: #686868;
							letter-spacing: -0.24px;
							padding-top: 58rpx;
							box-sizing: border-box;
						}
					}
					.ArticleMain-info-item-first-right{
						width: 250rpx;
						height: 166rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			
				.ArticleMain-info-item-else{
					width: 100%;
					padding-top: 34rpx;
					padding-bottom: 25rpx;
					border-bottom: 1rpx solid #D8D8D8;
					box-sizing: border-box;
					&:last-child{
						// border-bottom: 0;
						// padding-bottom: 30rpx;
					}
					.ArticleMain-info-item-else-top{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
						font-weight: bold;
						padding-bottom: 18rpx;
						box-sizing: border-box;
					}
					.ArticleMain-info-item-else-center{
						width: 100%;
						display: flex;
						// justify-content: space-between;
						flex-wrap: wrap;
						image{
							width: 216rpx;
							// flex: 1;
							// width: 216rpx;
							height: 144rpx;
							margin-right: 16rpx;
							margin-bottom: 18rpx;
							box-sizing: border-box;
							&:nth-child(3n){
								margin-right: 0;
							}
							
						}
					}
					.ArticleMain-info-item-else-bottom{
						width: 100%;
						display: flex;
						justify-content: space-between;
						font-family: PingFangSC-Regular;
						font-size: 10px;
						color: #686868;
						letter-spacing: -0.24px;
						
					}
				}
			}
		}
	}
</style>
