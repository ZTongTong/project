<!-- html部分 -->
<template>
	<div>
		<div id="tt" :style="{background:$store.state.color}"></div>
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
			
		}
	}
</script>
<!-- css部分 -->
<style>
#tt{
	display: inline-block;width:300px;height: 300px;border:1px solid red;
}
</style>
