<!-- html部分 -->
<template>
	<div>
		<h1>这是父组件 萌萌小鸡</h1>
		<h2>下方可以切换不同的子组件</h2>
		<el-button @click='fn1'>麦琪</el-button>
		<el-button @click='fn2'>愤怒的小鸟</el-button>
		<router-view/>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn1(){
				this.$router.push({path:'/chick/chick1'})
			},
			fn2(){
				this.$router.push({path:'/chick/chick2'})
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
