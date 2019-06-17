<!-- html部分 -->
<!-- 进度条 -->
<template>
	<div id="app">
		<!-- 百分比外显 -->
		<el-progress :percentage="num"></el-progress>
		<!-- 百分比内显 -->
		<el-progress :text-inside="true" :stroke-width="18" :percentage="num"></el-progress>
		<!-- 圆形 -->
		<el-progress type="circle" :percentage="num"></el-progress>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				num:5,
				timer:null
			};
		},
		methods:{
			fn:function(){
				if(this.num==100){
					clearInterval(this.timer);
				}else{
					this.num+=5;
				}
			}
		},
		mounted:function(,
		
		){
			this.timer = setInterval(this.fn,1000)
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
