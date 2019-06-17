<template>
	<view class="content">
		<view>
			<input type="text" placeholder="请输入姓名" v-model="cname">
			<input type="text" placeholder="请输入用户名" v-model="username">
			<view>
				<input type="password" placeholder="请输入密码" v-model="password">
				<uni-icon type="eye" size="30" @click="fn2()"></uni-icon>
			</view>
			<input type="text" placeholder="请输入手机号" v-model="telno">
			<input type="text" placeholder="请输入邮箱" v-model="email">
			<radio-group @change="fn">
				<label class="radio"><radio value="男" checked="true" />男</label>
                <label class="radio"><radio value="女" />女</label>
			</radio-group>
			<view>
				<picker @change="bindPickerChange" :value="index" :range="arr" range-key="compname">
					<view class="uni-input">{{arr[index].compname}}</view>
				</picker>
			</view>
			<button @click="register">注册</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data() {
			return {
				username: '',
				password:'',
				cname:'',
				telno:'',
				email:'',
				sex:'男',
				flag:'password',
				arr:[{compname:''}],
				index:0
			}
		},
		onLoad() {
			this.fn3();
		},
		methods: {
			fn(obj){
				this.sex=obj.detail.value;
			},
			fn2(){
				if(this.flag == 'password'){
					this.flag = 'text'
				}else{
					this.flag = 'password'
				}
			},
			register(){
				uni.request({
					url: "http://47.100.205.249:3670/baseUser/insert", //仅为示例，并非真实接口地址。
					data: {
						username: this.username,
						password: this.password,
						cname: this.cname,
						telno: this.telno,
						email: this.email,
						sex: this.sex,
						compid:this.arr[this.index].compid
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						uni.showToast({
							title: '注册成功',
							duration: 2000  
						});
						
					}
				});
			},
			bindPickerChange(e){
				this.index=e.target.value;
			},
			fn3(){
				uni.request({
					url:"http://47.100.205.249:3670/baseCompany/search",
					header:{
						'custom-header': 'hello'
					},
					success:(res) =>{
						this.arr = res.data;
					}
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/register.css");
</style>
