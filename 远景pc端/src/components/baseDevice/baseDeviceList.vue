<template>
	<div>
		<h1 style="text-align: center">设备信息</h1>
		<div style="text-align: left;margin:20px 0 20px 50px;">
			<el-input style='width:160px' placeholder='设备名称查询' v-model='devname'></el-input>
			<el-select v-model="typeid" placeholder="请选择设备类别">
				<el-option v-for="item in list2" :key="item.typeid" :value="item.typeid" :label="item.typename"></el-option>
			</el-select>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="baseDevtype.typename" label="设备类别" width="120"></el-table-column>
				<el-table-column prop="devdate" label="投入时间" width="120"></el-table-column>
				<el-table-column prop="devuser" label="责任人" width="120"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="所属企业" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
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
				devname:'',
				typeid:'',
				list:[],
				list2:[{"typeid":"","typename":""}]
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/baseDevice/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {devname:this.devname,typeid:this.typeid};
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
				this.$router.push({path:"baseDeviceAdd"});
			},update(row){
				this.$router.push({name:"baseDeviceEdit",params:{row:row}});
			},del(id){
				var url = this.baseUrl+"/baseDevice/delete"   //调用后端查询方法
				// 传递给后端的数据
				var data = {devid:id};
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
					var url = this.baseUrl+"/baseDevtype/list"   //调用后端查询方法
					// 传递给后端的数据
					this.$axios.post(url,this.$qs.stringify(),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list2 = this.list2.concat(res.data);
					}).catch(error=>{
						alert('错误')
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
