<!-- html部分 -->
<template>
	<div class="block" style="text-align: left;margin:20px 0 20px 20px;">
		<h1>成本核算信息</h1>
		<span>请选择年份</span>
		<el-date-picker v-model="years" type="year" placeholder="选择日期"  value-format="yyyy" @change="lists()"></el-date-picker>
		<el-table :data="list">
			<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
			<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
			<el-table-column prop="consume" label="能耗" width="140"></el-table-column>
			<el-table-column prop="cost" label="维修成本" width="120"></el-table-column>
		</el-table>
	</div>

	
</template>
<!-- js部分 -->
<script>
	    
	export default {
		name:'',
		data:function() {
			return {
				years:'2018',
				list:[]
			};
		},
		methods:{
			lists(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/cost"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.years}
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list = res.data;
					}).catch(error=>{
						//alert('错误')
						console.log(error)
					})
			}
		},
		mounted() {
			this.lists();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
