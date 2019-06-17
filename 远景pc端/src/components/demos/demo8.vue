<!-- html部分 -->
<template>
	<div id="app">
		<el-steps :active="active" finish-status="success">
		  <el-step title="活动信息"></el-step>
		  <el-step title="报名签到"></el-step>
		  <el-step title="分享设置"></el-step>
		  <el-step title="个性设置"></el-step>
		</el-steps>
		<div v-show="active==0">
			<el-input style='width:180px' v-model="msg"></el-input>
		</div>
		<div v-show="active==1">
			<el-radio v-model="radio" label="1">男</el-radio>
			<el-radio v-model="radio" label="2">女</el-radio>
		</div>
		<div v-show="active==2">
			<el-checkbox-group v-model="checkList">
				<el-checkbox label="java"></el-checkbox>
				<el-checkbox label="js"></el-checkbox>
				<el-checkbox label="jquery"></el-checkbox>
			  </el-checkbox-group>
		</div>
		<div v-show="active==3">
			<h1>最后一步</h1>
		</div>
		<el-button style="margin-top: 12px;"  @click="pre">上一步</el-button>
		<el-button style="margin-top: 12px;" type='primary' @click="next">下一步</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				active: 0,
				msg:'',
				radio:'',
				checkList:[]
			};
		},
		methods:{
			next() {
				if(this.msg){
					++this.active==4?this.active=0:'';
				}else{
					this.$message("请输入内容");
				}
				console.log(this.radio);
				console.log(this.checkList);
				
			  },
			  pre(){
				this.active==0?'':this.active--;
			  }
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
