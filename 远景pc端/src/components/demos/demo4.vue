<!-- html部分 -->
<template>
	<div id="app">
		<el-input style='width:120px' placeholder='请输入内容' v-model="msg"></el-input>
		<el-input style='width:120px;'
		  type="textarea"
		  :rows="10"
		  v-model="textarea">
		</el-input>
		<el-button @click='add'>添加</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				msg:'',
				textarea:''
			};
		},
		methods:{
			add:function(){
				this.textarea+=this.msg+"\r\n";
				this.msg='';
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
