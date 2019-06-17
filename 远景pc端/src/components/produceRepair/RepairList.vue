<template>
	<div>
		<h1 style="text-align: center">维修记录</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='维修原因查询' v-model='cause'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="repairid" label="Id" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="160"></el-table-column>
				<el-table-column prop="cause" label="维修原因" width="120"></el-table-column>
				<el-table-column prop="cost" label="维修费用" width="120"></el-table-column>
				<el-table-column prop="repairdate" label="维修日期" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.repairid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				repairid:'',
				cause:'',
				list:[],
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/produceRepair/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {cause:this.cause};
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
			},add(){
				this.$router.push({path:"RepairAdd"});
			},update(row){
				this.$router.push({name:"RepairEdit",params:{row:row}});
			},del(id){
				var url = this.baseUrl+"/produceRepair/delete"   //调用后端查询方法
				// 传递给后端的数据
				var data = {repairid:id};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
					this.$message("删除成功");
					this.search();
				}).catch(error=>{
					alert('删除失败')
					console.log(error)
				})
			},lists(){
				// 后端网址
					var url = this.baseUrl+"/produceRepair/list"   //调用后端查询方法
					// 传递给后端的数据
					this.$axios.post(url,this.$qs.stringify(),{
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
		mounted(){
			this.search();
			this.lists();
		}
		
	}
</script>

<style scoped="scoped">
	
</style>
