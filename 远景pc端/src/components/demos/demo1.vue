<!-- html部分 -->
<template>
	<div id="app">
		<input type="text" v-model="msg"/>
		<h1>{{msg}}</h1>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				msg:'hello'
			};
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
