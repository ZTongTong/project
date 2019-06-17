<!-- html部分 -->
<template>
	<div id="app">
		<!-- <el-date-picker
		  v-model="pdate"
		  type="date"
		  placeholder="选择日期">
		</el-date-picker> -->
		<el-input style='width:120px;' placeholder='请输入日期' v-model="pdate"></el-input>
		<el-input style='width:120px;' placeholder='请输入姓名' v-model="name"></el-input>
		<el-input style='width:120px;' placeholder='请输入地址' v-model="address"></el-input>
		<el-button @click='add'>添加</el-button>
		<el-input style='width:160px;' placeholder='请输入查询的姓名' v-model="sname"></el-input>
		<el-table
		  :data="search()"
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
		  <el-table-column
			  fixed="right"
			  label="操作"
			  width="120">
			  <template slot-scope="scope">
				<el-button
				  @click.native.prevent="deleteRow(scope.$index,scope.row, tableData)"
				  type="text"
				  size="small">
				  移除
				</el-button>
			  </template>
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
				name:'',pdate:'',address:'',sname:'',
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
			add:function(){
				this.tableData.push({pdate:this.pdate,name:this.name,address:this.address});
				this.name=this.pdate=this.address='';
			},
			search:function(){
				var newArr = [];
				for(var obj of this.tableData){
					if(obj.name.indexOf(this.sname)!=-1){
						newArr.push(obj);
					}
				}
				return newArr;
			},
			deleteRow:function(index,row,arr){
				console.log("index=="+index+",row=="+row.address);
				for(var i in arr){
					if(arr[i].address==row.address){
						arr.splice(i,1);
					}
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
