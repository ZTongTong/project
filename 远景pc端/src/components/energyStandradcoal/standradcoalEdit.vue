<template>
	<div style='text-align: center;'>
		<h1>编辑折标煤系数</h1>
		<el-row>
		  <el-col :span="24"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入能源类别' v-model='energetype'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="24"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入系数' v-model='ratio'></el-input> </el-col>
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
				energetype:"",   //能源类别
				ratio:"",   //系数
				sid:"",   //设备类别
				list:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/energyStandradcoal/update"
				// 传递给后端的数据
				var data = {energetype:this.energetype,ratio:this.ratio,sid:this.sid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/standradcoalList'});
				})
			},
			lists(){
				// 后端网址
					var url = this.baseUrl+"/energyStandradcoal/list"   //调用后端查询方法
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
			},cancel(){
				this.$router.go(-1);
			}
		},mounted(){
				this.lists();				
				// 接收路由传递的数据
				var row = this.$route.params.row;
				// 回显
				this.sid=row.sid;
				this.energetype=row.energetype;
				this.ratio=row.ratio;
		}
		
	}
</script>

<style>

</style>
