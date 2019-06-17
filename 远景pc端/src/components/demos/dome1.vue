<!-- html部分 -->
<template>
	<div id="app">
		<el-input style="width: 120px;" placeholder="请输入日期" v-model="pdate"></el-input>
		<el-input style="width: 120px;" placeholder="请输入姓名" v-model="name"></el-input>
		<el-input style="width: 120px;" placeholder="请输入地址" v-model="address"></el-input>
		<el-button @click="fn">添加</el-button>
		<el-table
			 :data="tableData"
			 style="width: 100%">
			 <el-table-column
				prop="pdate"
				label="日期"
				width="180">
			 </el-table-column>
			 <el-table-column
				prop="name"
				label="姓名"
				width="180">
			 </el-table-column>
			 <el-table-column
				prop="address"
				label="地址">
		</el-table-column>
    </el-table>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				pdate:'',name:'',address:'',
				tableData: [{
					pdate: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				  }, {
					pdate: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				  }, {
					pdate: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				  }, {
					pdate: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			};
		},
		methods:{
			fn:function(){
				this.tableData.push({pdate:this.pdate,name:this.name,address:this.address});
				this.address='',this.address='',this.pdate='',
			}
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
