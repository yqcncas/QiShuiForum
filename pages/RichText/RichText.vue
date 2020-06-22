<template>
	<view class="rich-text">
		<jyf-parser :html="html" ref="article"></jyf-parser>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		components: {
		    jyfParser
		},
	    data() {
		    return {
		      html: ''
		    }
	    },
	}
</script>

<style>
</style>
