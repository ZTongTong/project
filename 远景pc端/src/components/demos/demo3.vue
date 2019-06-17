<!-- html部分 -->
<template>
	<div id="app">
		<el-input style='width:120px' placeholder='请输入用户名' v-model="username"></el-input>
		<el-input style='width:120px' placeholder='请输入密码' v-model="password"></el-input>
		<el-button @click='login'>登录</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				username:'',
				password:''
			};
		},
		methods:{
			login:function(){
				if(this.username=='admin' && this.password=='123'){
					this.$message('登录成功');
				}else{
					this.$message('登录失败');
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
