<template>
	<div style='text-align: center;'>
		<h1>添加流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入流程名称' v-model='flowname'></el-input> </el-col>
		  <el-col :span="12"> 
			  <el-select v-model="dljid" placeholder="请选择斗轮机" style='width:300px;margin-top: 20px;'>
					<el-option v-for="item in list" :key="item.devid" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
			  <el-select v-model="zcjid" placeholder="请选择装船机" style='width:300px;margin-top: 20px;'>
					<el-option v-for="item in list2" :key="item.devid" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
		  </el-col>
		  <el-col :span="12"> 
			  <el-select v-model="pdjid" placeholder="请选择皮带机" style='width:300px;margin-top: 20px;'>
					<el-option v-for="item in list3" :key="item.devid" :value="item.devid" :label="item.devname"></el-option>
			  </el-select>
		  </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	  
	</div>
</template>

<!-- 	private Integer flowid;    //主键 
		private String flowname;    //流程名称 
		private Integer dljid;    //斗轮机 
		private Integer zcjid;    //装船机 
		private Integer pdjid;    //皮带机 
		private Integer compid;    //所属企业 
		private String compname;
		private String dljname;
		private String zcjname;
		private String pdjname; -->

<script>
	export default {
		name:'',
		data() {
			return {
				flowname:"",//流程名称 
				dljid:"",    //斗轮机名称 
				zcjid:"",    //装船机名称 
				pdjid:"",   //皮带机名称 
				list:[],
				list2:[],
				list3:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/insert"
				// 传递给后端的数据
				var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/FlowList'});
				})
			},
		
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted(){
				var a = this.baseUrl+"/baseDevice/findDljByCompid"   //调用后端查询方法
				// 传递给后端的数据
				this.$axios.post(a,this.$qs.stringify(),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				});
					var b = this.baseUrl+"/baseDevice/findCzjByCompid"   //调用后端查询方法
				// 传递给后端的数据
				this.$axios.post(b,this.$qs.stringify(),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list2 = res.data;
				});
					var c = this.baseUrl+"/baseDevice/findPdjByCompid"   //调用后端查询方法
				// 传递给后端的数据
				this.$axios.post(c,this.$qs.stringify(),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list3 = res.data;
				})
				
		}
		
	}
</script>

<style>

</style>
