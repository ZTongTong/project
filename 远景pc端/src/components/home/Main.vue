<!-- html部分 -->
<template>
	<div>
		<div style="text-align:left;">
			<!-- Tags -->
			<el-tag v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" style='margin-left: 10px;'
				@click='fn(tag,index)' @close='fn2(tag,index)'>
				{{tag.name}}
			</el-tag>
		</div>
		<!-- 动态显示各个子组件 -->
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
			fn(tag,index){
				// 路由跳转
				this.$router.push({path:tag.url});
				// 改变type
				this.$store.commit('updateTag',index);
				this.$store.commit('changeDefaultActive',tag.index);
			},
			fn2(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message("最后一个标签不能被删除");
				}else{
					debugger
					// 关闭的是否是当前type
					var flag = this.$store.state.tags[index].type=='warning';
					// 删除tag
					this.$store.commit('delTag',index);
					
					if(flag){  //判断type='warning'
						if(index==0){
							this.$store.commit('updateTag',0);
							this.$router.push({path:this.$store.state.tags[0].url});
							this.$store.commit('changeDefaultActive',this.$store.state.tags[index-1].index);
							alert(this.$store.state.tags[index-1].index);
						}else{
							this.$store.commit('updateTag',index-1);
							this.$router.push({path:this.$store.state.tags[index-1].url});
							this.$store.commit('changeDefaultActive',this.$store.state.tags[index-1].index);
						}	
					}
					
					
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>
*{
	margin: 0px;
	padding: 0px;
}
</style>
