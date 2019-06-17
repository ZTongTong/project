<!-- html部分 -->
<!-- 树形组件tree -->
<template>
	<div id="app">
		<el-tree :data="arr" ></el-tree>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[
					{label:'事件',children:[{label:'最近'},{label:'本周'},{label:'本月'}]},
					{label:'娱乐',children:[{label:'游戏'},{label:'电影'},{label:'电视'}]},
					{label:'人物',children:[{label:'美女'},{label:'帅哥'},{label:'明星'}]},
					{label:'体育'}
				]
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
