<!-- html部分 -->
<template>
	<div>
		<div class="block" style="text-align: left;margin:20px 0 20px 20px;">
			<span>请选择年份</span>
		  <el-date-picker v-model="years" type="year" placeholder="选择日期"  value-format="yyyy" @change="fn()"></el-date-picker>
		</div>
		<h1>流程作业对比图</h1>
		<ve-heatmap :data="flowAmount"></ve-heatmap>
		
		<h1>设备类别作业量对比图</h1>
		<ve-waterfall :data="devTypeAmount"></ve-waterfall>
		
		<h1>设备作业量对比图</h1>
		<ve-bar :data="devAmount"></ve-bar>
		
	</div>
</template>
<!-- js部分 -->
<script>
	    
	export default {
		name:'',
		data() {
			return {
				flowAmount: {
				  columns: [],
				  rows: []
				},
				devTypeAmount: {
				  columns: [],
				  rows: []
				},
				devAmount:{
					columns: [],
					rows:[]
				},
				years:'2018'
			};
		},
		methods:{
			flowAmounts(){
				// 后端网址
					var url = this.baseUrl+"/jobAmount/flowAmount"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.flowAmount = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			},
			devTypeAmounts(){
				// 后端网址
					var url = this.baseUrl+"/jobAmount/devTypeAmount"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.devTypeAmount = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			},devAmounts(){
				// 后端网址
					var url = this.baseUrl+"/jobAmount/devAmount"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.devAmount = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			},fn(){
				this.flowAmounts();
				this.devTypeAmounts();
				this.devAmounts();
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
