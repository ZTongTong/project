<!-- html部分 -->
<template>
	<div>
		<div class="block" style="text-align: left;margin:20px 0 20px 20px;">
			<span>请选择年份</span>
		  <el-date-picker v-model="years" type="year" placeholder="选择日期"  value-format="yyyy" @change="fn()"></el-date-picker>
		</div>
		<h1>设备类别能耗比对比图</h1>
		<ve-radar :data="flowConsume"></ve-radar>
		<h1>设备能耗比对比图</h1>
		<ve-bar :data="devTypeConsume"></ve-bar>
		<h1>流程能耗比对比图</h1>
		<ve-scatter :data="devConsume"></ve-scatter>
		<h1>设备单位作业量耗电量对比图</h1>
		<ve-waterfall :data="electricConsume"></ve-waterfall>
		<h1>设备单位作业量耗水量对比图</h1>
		<ve-histogram :data="waterConsume"></ve-histogram>
		<h1>设备单位作业量耗油量对比图</h1>
		<ve-line :data="oilConsume"></ve-line>

	</div>
</template>
<!-- js部分 -->
<script>
	    
	export default {
		name:'',
		data() {
			return {
				flowConsume: {
				  columns: [],
				  rows: []
				},
				devTypeConsume: {
				  columns: [],
				  rows: []
				},
				devConsume:{
					columns: [],
					rows:[]
				},
				electricConsume: {
				  columns: [],
				  rows: []
				},
				waterConsume: {
				  columns: [],
				  rows: []
				},
				oilConsume:{
					columns: [],
					rows:[]
				},
				years:'2018'
			};
		},
		methods:{
			flowConsumes(){
			// 后端网址
				var url = this.baseUrl+"/energyConsume/flowConsume"   //调用后端查询方法
				// 传递给后端的数据
				var data = {year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.flowConsume = res.data;
				}).catch(error=>{
					//alert('错误')
					console.log(error)
				})
			},devTypeConsumes(){
			// 后端网址
				var url = this.baseUrl+"/energyConsume/devTypeConsume"   //调用后端查询方法
				// 传递给后端的数据
				var data = {year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.devTypeConsume = res.data;
				}).catch(error=>{
					//alert('错误')
					console.log(error)
				})
			},devConsumes(){
			// 后端网址
				var url = this.baseUrl+"/energyConsume/devConsume"   //调用后端查询方法
				// 传递给后端的数据
				var data = {year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.devConsume = res.data;
				}).catch(error=>{
					//alert('错误')
					console.log(error)
				})
			},electricConsumes(){
			// 后端网址
				var url = this.baseUrl+"/energyConsume/electricConsume"   //调用后端查询方法
				// 传递给后端的数据
				var data = {year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.electricConsume = res.data;
				}).catch(error=>{
					//alert('错误')
					console.log(error)
				})
			},waterConsumes(){
			// 后端网址
				var url = this.baseUrl+"/energyConsume/waterConsume"   //调用后端查询方法
				// 传递给后端的数据
				var data = {year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.waterConsume = res.data;
				}).catch(error=>{
					//alert('错误')
					console.log(error)
				})
			},oilConsumes(){
			// 后端网址
				var url = this.baseUrl+"/energyConsume/oilConsume"   //调用后端查询方法
				// 传递给后端的数据
				var data = {year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.oilConsume = res.data;
				}).catch(error=>{
					//alert('错误')
					console.log(error)
				})
			},fn(){
				this.flowConsumes();
				this.devTypeConsumes();
				this.devConsumes();
				this.electricConsumes();
				this.waterConsumes();
				this.oilConsumes();
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
