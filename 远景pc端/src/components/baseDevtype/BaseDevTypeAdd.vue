<template>
	<div style='text-align: center;'>
		<h1>添加人员信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入需要添加的设备类别' v-model='typename'></el-input> </el-col>
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
				typename:"",
				list:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/insert"
				// 传递给后端的数据
				var data = {typename:this.typename};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/BaseDevTypeList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},mounted(){
				// this.lists();
		}
		
	}
</script>

<style>

</style>
