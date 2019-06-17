<!-- html部分 -->
<template>
	<div>
		<el-tag  v-for="(tag,index) in tags" :key="tag.name" closable :type="tag.type" style="margin-left:20px" @close='fn(index)'>
			{{tag.name}}
		</el-tag>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				tags: [
				  { name: '标签一', type: '' },
				  { name: '标签二', type: 'success' },
				  { name: '标签三', type: 'info' },
				  { name: '标签四', type: 'warning' },
				  { name: '标签五', type: 'danger' }
				]
			};
		},
		methods:{
			fn(index){
				this.tags.splice(index,1);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
