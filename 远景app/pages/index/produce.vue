<template>
	<view>
		<view class="circle">
			<view class="days">
				<text>21</text> 
				<text class="">天</text> 
			</view>
			<view class="">安全用机</view>
			<view class="strip"> 
				<text class="">10</text> 
				<text class="">条</text> 
			</view>
			<view>异常设备</view>
		</view>
		<view class="line">
			<image src="../../static/images/line.png" mode=""></image>
			<text>警告统计</text>
		</view>
		<view class="bottom-list">
			<uni-list>
				<uni-list-item title="标题文字" show-arrow="false"></uni-list-item>
				<uni-list-item title="标题文字"></uni-list-item>
				<uni-list-item title="标题文字" show-badge="true"></uni-list-item>
			</uni-list> 
		</view>
	</view>
</template>

<script>
	import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue'
	import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem},
		data(){
			return{

			}
			
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style>
	@import url("../../static/css/produce.css");
</style>
