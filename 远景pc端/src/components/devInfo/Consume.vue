<!-- html部分 -->
<template>
	<div>
		<div class="block" style="text-align: left;margin:20px 0 20px 20px;">
			<span>请选择年份</span>
		  <el-date-picker v-model="years" type="year" placeholder="选择日期"  value-format="yyyy" @change="fn()"></el-date-picker>
		</div>
		<h1>港口能耗对比图</h1>
		<ve-radar :data="consume"></ve-radar>
		<h1>港口间作业量对比图</h1>
		<ve-line :data="amount"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	    
	export default {
		name:'',
		data() {
			return {
				consume: {
				  columns: [],
				  rows: []
				},
				amount: {
				  columns: [],
				  rows: []
				},
				years:'2018'
			};
		},
		methods:{
			consumes(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/consume"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.consume = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			},amounts(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/amount"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.amount = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			},fn(){
				this.consumes();
				this.amounts();
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
