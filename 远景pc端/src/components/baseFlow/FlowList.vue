<template>
	<div>
		<h1 style="text-align: center">流程信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='请输入流程名称' v-model='flowname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="flowid" label="Id" width="80"></el-table-column>
				<el-table-column prop="flowname" label="流程名称" width="120"></el-table-column>
				<el-table-column prop="dljname" label="斗轮机" width="120"></el-table-column>
				<el-table-column prop="zcjname" label="装船机" width="120"></el-table-column>
				<el-table-column prop="pdjname" label="皮带机" width="120"></el-table-column>
				<el-table-column prop="compname" label="所属企业" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.flowid)">删除</el-button>
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
				flowname:'',
				list:[]
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/baseFlow/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {flowname:this.flowname};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list = res.data;
					}).catch(error=>{
						alert('错误')
						console.log(error)
					})
			},add(){
				this.$router.push({path:"FlowAdd"});
			},update(row){
				this.$router.push({name:"UserEdit",params:{row:row}});
			},del(id){
				var url = this.baseUrl+"/baseFlow/delete"   //调用后端查询方法
				// 传递给后端的数据
				var data = {flowid:id};
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
			}
		},
		mounted(){
			this.search();
		}
		
	}
</script>

<style>

</style>
