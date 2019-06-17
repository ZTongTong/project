<!-- html部分 -->
<template>
	<div>
		<h1>父组件</h1>
		<child1></child1>
		<child2></child2>
	</div>
</template>
<!-- js部分 -->
<script>
	import child1 from './child1'
	import child2 from './child2'
	export default {
		name:'',
		components:{child1,child2},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
