<template>
	<div>
		<h1 style="text-align: center">人员信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='手机号' v-model='search_telno'></el-input>
			<el-input style='width:160px' placeholder='姓名' v-model='search_cname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="cname" label="姓名" width="80"></el-table-column>
				<el-table-column prop="username" label="用户名" width="120"></el-table-column>
				<el-table-column prop="password" label="密码" width="120"></el-table-column>
				<el-table-column prop="telno" label="手机号" width="120"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="180"></el-table-column>
				<el-table-column prop="sex" label="性别" width="120"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="所属企业" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.userid)">删除</el-button>
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
				search_telno:'',
				search_cname:'',
				list:[]
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/baseUser/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {telno:this.search_telno,cname:this.search_cname};
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
				this.$router.push({path:"UserAdd"});
			},update(row){
				this.$router.push({name:"UserEdit",params:{row:row}});
			},del(id){
				var url = this.baseUrl+"/baseUser/delete"   //调用后端查询方法
				// 传递给后端的数据
				var data = {userid:id};
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
