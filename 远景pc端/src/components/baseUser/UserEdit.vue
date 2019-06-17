<template>
	<div style='text-align: center;'>
		<h1>修改人员信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='cname'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户名' v-model='username'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入手机号' v-model='telno'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入性别' v-model='sex'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入邮箱' v-model='email'></el-input> </el-col>
		</el-row>
		<el-select v-model="compid" placeholder="请选择企业名称">
				<el-option
				  v-for="item in list"
				  :key="item"
				  :value="item.compid"
				  :label="item.compname"
				  >
				</el-option>
		</el-select>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				username:'',
				password:'',
				telno:'',
				email:'',
				userid:"",
				cname:"",
				compid:"",
				sex:"",
				list:[]
			};
		},

		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/update"
				// 传递给后端的数据
				var data = {sex:this.sex,username:this.username,password:this.password,telno:this.telno,email:this.email,userid:this.userid,cname:this.cname,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/UserList'});
				})
			},lists(){
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
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			this.lists();
			var row = this.$route.params.row;
			// 回显
			this.username = row.username;
			this.password = row.password;
			this.telno = row.telno;
			this.email = row.email;
			this.cname=row.cname;
			this.userid=row.userid;
			this.compid=row.compid;
			this.sex=row.sex;
		}
	}
</script>

<style>

</style>
