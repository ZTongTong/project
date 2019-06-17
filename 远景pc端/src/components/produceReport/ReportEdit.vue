<template>
	<div style='text-align: center;'>
		<h1>编辑报岗信息</h1>
		<el-row>
			<el-col :span="12">
			  <el-select v-model="devid" placeholder="请选择设备" style='width:300px;margin-top: 20px;'>
					<el-option v-for="item in list" :key="item.devid" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
			</el-col>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修费用' v-model='cost'></el-input> </el-col>
			<el-col :span="12"> <el-date-picker style='width:300px;margin-top: 20px;' v-model="repairdate" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker> </el-col>
		</el-row>	
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	  
	</div>
</template>

<!-- repairid devid cause cost repairdate devname -->
<script>
	export default {
		name:'',
		data() {
			return {
				repairid:"",//维修id
				devid:"",//设备名称
				cause:"",   //维修原因
				cost:"", //维修费用
				repairdate:"",  //维修时间
				list:[],
				list2:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/RepairList'});
				})
			},
			lists(){
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
						alert('错误')
						console.log(error)
					})
			},
			listss(){
				// 后端网址
					var url = this.baseUrl+"/baseDevice/list"   //调用后端查询方法
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
			},
			cancel(){
				this.$router.go(-1);
			}
		},mounted(){
				this.lists();
				this.listss();
				
				// 接收路由传递的数据  repairid devid cause cost repairdate devname
				var row = this.$route.params.row;
				// 回显
				this.repairid=row.repairid;
				this.devid=row.devid;
				this.cause=row.cause;
				this.cost=row.cost;
				this.repairdate=row.repairdate;
		}
		
	}
</script>

<style>

</style>
