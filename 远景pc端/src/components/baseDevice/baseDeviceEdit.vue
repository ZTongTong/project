<template>
	<div style='text-align: center;'>
		<h1>编辑设备信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='devname' placeholder="请输入设备名称"></el-input> </el-col>
		  <el-select v-model="typeid" placeholder="请选择设备类别" style='width:300px;margin-top: 20px;'>
		  		<el-option v-for="item in list2" :key="item" :value="item.typeid" :label="item.typename"></el-option>
		  </el-select>
		</el-row>
		<el-row>
			<el-date-picker v-model="devdate" type="date" placeholder="选择日期" value-format='yyyy-MM-dd' style='width:300px;margin-top: 20px;'></el-date-picker>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='devuser' placeholder="请输入责任人"></el-input> </el-col>
		</el-row>
		<el-select v-model="compid" placeholder="请选择所属企业名称">
			<el-option v-for="item in list" :key="item" :value="item.compid" :label="item.compname"></el-option>
		</el-select>
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
				devid:"",
				devname:"",   //设备名称
				typeid:"",   //设备类别
				devdate:"",    //投入时间
				devuser:"",    //责任人
				compid:"",   //所属企业
				list:[],
				list2:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/baseDeviceList'});
				})
			},
			lists(){
				// 后端网址
					var url = this.baseUrl+"/baseCompany/list"   //调用后端查询方法
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
					var url = this.baseUrl+"/baseDevtype/list"   //调用后端查询方法
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
				
				// 接收路由传递的数据
				var row = this.$route.params.row;
				// 回显
				this.devid=row.devid;
				this.devname=row.devname;
				this.typeid=row.typeid;
				this.devdate=row.devdate;
				this.devuser=row.devuser;
				this.compid=row.compid;
		}
		
	}
</script>

<style>

</style>
