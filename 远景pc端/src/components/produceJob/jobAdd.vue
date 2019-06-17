<template>
	<div style='text-align: center;'>
		<h1>添加作业信息</h1>
		<el-row>
		  <el-col :span="12">
			  <el-select v-model="devid" placeholder="请选择设备名称" style='width:300px;margin-top: 20px;'>
			  		<el-option v-for="item in list2" :key="item.devid" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
		  </el-col>
		  <el-date-picker v-model="starttime" type="datetime" placeholder="请选择开始日期时间" style='width:300px;margin-top: 20px;' value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
		</el-row>
		<el-row>
			<el-date-picker v-model="completetime" type="datetime" placeholder="请选择结束日期时间" style='width:300px;margin-top: 20px;' 
			value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入运行时长' v-model='duration'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入作业量' v-model='amount'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	  
	</div>
</template>
<!--    private Integer jobid;    //主键 
		private Integer devid;    //设备id 
		private String starttime;    //开始作业时间 
		private String completetime;    //结束作业时间 
		private Double duration;    //运行时长 
		private Double amount;    //作业量 
		private Integer reportid;    //报岗id 
		private String devname;   //设备名称
-->
<script>
	export default {
		name:'',
		data() {
			return {
				devid:"",   //设备名称
				starttime:"",   //开始时间
				completetime:"",    //结束时间
				duration:"",    //运行时长
				amount:"",   //作业量
				list:[],
				list2:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,starttime:this.starttime,completetime:this.completetime,duration:this.duration,amount:this.amount};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/jobList'});
				})
			},
			lists(){
				// 后端网址
					var url = this.baseUrl+"/produceJob/list"   //调用后端查询方法
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
		}
		
	}
</script>

<style>

</style>
