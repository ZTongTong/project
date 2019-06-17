<template>
	<div>
		<h1 style="text-align: center">折标煤系数</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='请输入能源类别' v-model='energetype'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<!--
			private Integer sid;    //主键 
			private String energetype;    //能源类别 
			private Float ratio;    //系数
		 -->
		<center>
			<el-table :data="list">
				<el-table-column prop="energetype" label="能源类别" width="120"></el-table-column>
				<el-table-column prop="ratio" label="系数" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.sid)">删除</el-button>
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
				energetype:'',
				sid:'',
				list:[],
				list2:[]
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/energyStandradcoal/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {energetype:this.energetype};
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
				this.$router.push({path:"standradcoalAdd"});
			},update(row){
				this.$router.push({name:"standradcoalEdit",params:{row:row}});
			},del(id){
				var url = this.baseUrl+"/energyStandradcoal/delete"   //调用后端查询方法
				// 传递给后端的数据
				var data = {sid:id};
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
					var url = this.baseUrl+"/energyStandradcoal/list"   //调用后端查询方法
					// 传递给后端的数据
					this.$axios.post(url,this.$qs.stringify(),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list2 = res.data;
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
