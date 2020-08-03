<template>
	<uni-fab
		:pattern="pattern"
		:content="content"
		:horizontal="horizontal"
		:vertical="vertical"
		:direction="direction"
		:show = "show"
		@trigger="trigger"
		@fabClick = "fabClick"
	></uni-fab>
</template>

<script>
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	export default {
		data () {
			return {
				left: 0,
				right: 80,
				bottom: 100,
				bgColor: "#5677fc",
				// directionStr: '垂直',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'vertical',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#7A7E83',
					buttonColor: '#007AFF'
				},
				content: [{
						text: '长文',
						active: false
					},
					{
						text: '短文',
						active: false
					},
					{
						text: '视频',
						active: false
					}
				]
			}
		},
		methods:{
			// 去发布
			trigger(e) {
				console.log(e)
				if (e.index == 0) {
					this.$emit("trigger", 0)
				} else if (e.index == 1) {
					this.$emit("trigger", 1)
				} else {
					this.$emit("trigger", 2)
				}
			},
			fabClick() {
				
			}
		},
		onHide() {
			console.log('1231313')
		},
		comments:{
			uniFab
		},
		props:{
			show: {
				type: Boolean
			}
		}
	}
</script>

<style>
	.uni-fab__circle{
		transform: scale(0.6) !important;
	}
	.uni-fab{
		transform: scale(0.9) !important;
	}
</style>
