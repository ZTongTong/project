<template>
	<!-- private Integer devid;    //主键
		private Integer consumeid;    //主键能耗id 
		private Integer devid;        //设备id
		private Double electric;    //电耗(kw.h) 
		private Double water;    //水耗(吨) 
		private Double oil;    //油耗(L) 
		private Integer reportid;    //报岗id
		private String devname;     //设备名称
	 -->
	<div style='text-align: center;'>
		<h1>添加能耗信息</h1>
		<el-row>
		  <el-col :span="12">
			  <el-select v-model="devid" placeholder="请选择设备名称" style='width:300px;margin-top: 20px;'>
			  		<el-option v-for="item in list2" :key="item" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
		  </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电耗(kw.h)' v-model='electric'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入水耗(吨)' v-model='water'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入油耗(L)' v-model='oil'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报岗id' v-model='reportid'></el-input> </el-col>
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
				electric:"",   //电耗
				water:"",    //水耗
				oil:"",    //油耗
				reportid:"",   //报岗id
				list:[],
				list2:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/consumeList'});
				})
			},
			lists(){
				// 后端网址
					var url = this.baseUrl+"/energyConsume/list"   //调用后端查询方法
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
