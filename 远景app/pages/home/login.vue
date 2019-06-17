<template>
	<view class="content">
		<view>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<view>
				<input type="password" placeholder="请输入密码" v-model="password">
			</view>
			<button @click="login">登录</button>
		</view>
		
	</view>
</template>

<script>
	import uniIcon from "@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data(){
			return{
				username:'',
				password:'',
				flag:'password'
			}
			
		},
		mounted() {
			
		},
		methods:{
			login(){
				if(this.username!=""&&this.password!=""){
					uni.request({
						url: "http://47.100.205.249:3670/baseUser/login",
						data: {username: this.username,password: this.password},
						header: {'custom-header': 'hello'},
						success: (res) => {
							if(res.data){
								//成功提示
								uni.switchTab({
									url:'index'
								})}else{
								// 失败提示
								console.log("登录失败")
							}
						}
					});	
				}else{
					console.log("登录失败")
				}
			}
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>
