<!-- html部分 -->
<template>
	<div>
		<div class="block" style="text-align: left;margin:20px 0 20px 20px;">
			<span>请选择年份</span>
		  <el-date-picker v-model="years" type="year" placeholder="选择日期"  value-format="yyyy" @change="fn()"></el-date-picker>
		</div>
		<h1>设备完好率对比图</h1>
		<ve-line :data="intactRatio"></ve-line>
		
	</div>
</template>
<!-- js部分 -->
<script>
	    
	export default {
		name:'',
		data() {
			return {
				intactRatio: {
				  columns: [],
				  rows: []
				},
				years:'2018'
			};
		},
		methods:{
			intactRatios(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/intactRatio"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.intactRatio = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			},fn(){
				this.intactRatios();
			}
		},
		mounted() {
			this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
