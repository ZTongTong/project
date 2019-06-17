<!-- html部分 -->
<!-- 二级联动 -->
<template>
	<div id="app" style="display: inline-block;">
		<el-select v-model='v1' placeholder='请选择' @change='v2=""'>
			<el-option v-for='(obj,index) in arr' :label='obj.label' :value='index'>
			</el-option>
		</el-select>
		<!-- <el-select v-model='v2' placeholder='请选择'>
			<el-option v-for='(obj,index) in arr[v1].children' :label='obj.label' :value='obj.value'>
			</el-option>
		</el-select>
		<el-button @click='print'>打印</el-button>
		<el-input style='width:150px' v-model='sf'></el-input>
		<el-button @click='fn1'>添加省份</el-button>
		<el-input style='width:150px' v-model='cs'></el-input>
		<el-button @click='fn2'>添加城市</el-button> -->
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				v1:0,
// 				v2:'',
// 				sf:'',
// 				cs:'',
				arr:[
					{label:'河南',value:'p01',children:[{label:'周口',value:'c01'},{label:'信阳',value:'c02'}]},
					{label:'河北',value:'p02',children:[{label:'保定',value:'c03'},{label:'邢台',value:'c04'}]},
					{label:'安微',value:'p03',children:[{label:'合肥',value:'c05'},{label:'淮北',value:'c06'}]}
				]
			};
		},
		methods:{
			print(){
				console.log(this.arr[this.v1].value);
				console.log(this.v2);
			},
			fn1(){
				// 将省份输入框中的内容，封装成对象
				var arr = this.sf.split(",");
				var obj = {label:arr[1],value:arr[0],children:[]};
				// 将对象放到数组中
				this.arr.push(obj);
				this.sf='';
			},
			fn2(){
				// 将城市输入框中的内容，封装成对象
				var arr = this.cs.split(",");
				var obj = {label:arr[1],value:arr[0]};
				// 将对象放到数组中
				this.arr[this.v1].children.push(obj);
			}
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
