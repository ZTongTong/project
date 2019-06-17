<!-- html部分 -->
<template>
	<div id="app">
		<el-input v-model='msg' style='width: 120px;'></el-input>
		<h1>{{msg}}</h1>
		<el-button @click='fn' type='primary'>打印</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				msg:'hello'
			};
		},
		methods:{
			fn:function(){
				console.log(this.msg)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
