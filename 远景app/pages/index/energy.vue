<template>
	<view>
		<!-- 获取当前时间 -->
		<view class="top">
			<text>{{cdate}}</text>
		</view>
		<!-- 总的能耗 -->
		<view>
			<view class="num">426.10</view>
			<view class="dw">总KW/h</view>
		</view>
		<!-- 能耗分类展示 -->
		<view class="cal">
			<view class="cla1">
				<image src="../../static/images/water.png" mode=""></image>
				<view>418.76</view>
				<view>水耗:t</view>
			</view>
			<view class="cla1">
				<image src="../../static/images/electricity.png" mode=""></image>
				<view>7.34</view>
				<view>电耗:KW/h</view>
			</view>
			<view class="cla1">
				<image src="../../static/images/oil.png" mode=""></image>
				<view>411.43</view>
				<view>油耗:L</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="buttons">
			<button class="day dates" :style="{background:bgColor1}" @click="fn('day')">日</button>
			<button class="month dates" :style="{background:bgColor2}" @click="fn('month')">月</button>
		</view>
		<!-- 图表 -->
		<chart01></chart01>
	</view>
</template>

<script>
	import chart01 from "../charts/chart01.vue"
	export default {
		components:{chart01},
		data(){
			return{
				cdate:'',
				bgColor1:'#0066FF',
				bgColor2:'#9999CC'
			}
			
		},
		mounted() {
			this.caleDate();
		},
		methods:{
			caleDate(){
				var date = new Date();
				var month = date.getMonth()+1;
				var day = date.getUTCDate()
				this.cdate = month+"月"+day+"日"
			},
			fn(type){
				if(type=='day'){
					this.bgColor1='#0066FF';
					this.bgColor2='#9999CC';
					this.caleDate();
				}else{
					this.bgColor1='#9999CC';
					this.bgColor2='#0066FF';
					this.caleMonth();
				}
			},
			caleMonth(){
				var date = new Date();
				var month = date.getMonth()+1;
				this.cdate = month+"月";
			}
		}
	}
</script>

<style>
	@import url("../../static/css/energy.css");
</style>
