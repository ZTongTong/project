<template>
	
	<!-- 
		private Integer faultId;    //主键故障id 
		private Integer devid;    //设备名称 
		private String cause;    //故障原因 
		private String faultuser;    //报告人 
		private Integer faulttime;    //故障时间(分钟) 
		private String devname;
	 -->
	<div style='text-align: center;'>
		<h1>添加故障信息</h1>
		<el-row>
			<el-col :span="12">
			  <el-select v-model="devid" placeholder="请选择设备" style='width:300px;margin-top: 20px;'>
					<el-option v-for="item in list" :key="item.devid" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
			</el-col>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='faultuser'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障时间' v-model='faulttime'></el-input> </el-col>
		</el-row>	
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	  
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				devid:"",   //设备名称
				cause:"",   //故障原因
				faultuser:"",    //报告人
				faulttime:"",    //故障时间
				list:[],
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/FaultList'});
				})
			},
			lists(){
				// 后端网址
					var url = this.baseUrl+"/baseDevice/list"   //调用后端查询方法
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
			cancel(){
				this.$router.go(-1);
			}
		},mounted(){
				this.lists();
		}
		
	}
</script>

<style>

</style>
