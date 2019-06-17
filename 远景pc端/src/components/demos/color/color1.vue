<!-- html部分 -->
<template>
	<div>
		<el-input style='width:120px' v-model='color'></el-input>
		<el-button @click='fn'>更改颜色</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				color:''
			};
		},
		methods:{
			fn(){
				// 更改store中的数据
				this.$store.commit('changeColor',this.color);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
