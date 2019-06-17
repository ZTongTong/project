import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Login from '@/components/home/Login'

import chick from '@/components/demos/chick/chick'
import chick1 from '@/components/demos/chick/chick1'
import chick2 from '@/components/demos/chick/chick2'

import Welcome from '@/components/home/Welcome'  //子组件
import Test1 from '@/components/home/Test1'  //子组件
import Test2 from '@/components/home/Test2'  //子组件

import parent from '@/components/demos/test/parent'  
import color from '@/components/demos/color/color'  

import CompAdd from '@/components/baseInfo/CompAdd'  
import CompEdit from '@/components/baseInfo/CompEdit'  
import CompList from '@/components/baseInfo/CompList'

import UserAdd from '@/components/baseUser/UserAdd'  
import UserEdit from '@/components/baseUser/UserEdit'  
import UserList from '@/components/baseUser/UserList'

import BaseDevTypeAdd from '@/components/baseDevType/BaseDevTypeAdd'  
import BaseDevTypeEdit from '@/components/baseDevType/BaseDevTypeEdit'  
import BaseDevTypeList from '@/components/baseDevType/BaseDevTypeList'

import baseDeviceAdd from '@/components/baseDevice/baseDeviceAdd'  
import baseDeviceEdit from '@/components/baseDevice/baseDeviceEdit'  
import baseDeviceList from '@/components/baseDevice/baseDeviceList'

import FlowList from '@/components/baseFlow/FlowList'  
import FlowAdd from '@/components/baseFlow/FlowAdd'  
/*import baseDeviceList from '@/components/baseFlow/baseDeviceList' */

import FaultList from '@/components/produceFault/FaultList'  
import FaultAdd from '@/components/produceFault/FaultAdd' 
import FaultEdit from '@/components/produceFault/FaultEdit'

import RepairList from '@/components/produceRepair/RepairList'
import RepairAdd from '@/components/produceRepair/RepairAdd'
import RepairEdit from '@/components/produceRepair/RepairEdit'

import Control from '@/components/control/Control'

import ReportList from '@/components/produceReport/ReportList'

import JobAmount from '@/components/reports/JobAmount'
import energyConsume from '@/components/reports/energyConsume'
import Usage from '@/components/devInfo/Usage'
import IntactRatio from '@/components/devInfo/IntactRatio'
import Cost from '@/components/devInfo/Cost'
import Consume from '@/components/devInfo/Consume'

import consumeList from '@/components/energyConsume/consumeList'  
import consumeAdd from '@/components/energyConsume/consumeAdd' 
import consumeEdit from '@/components/energyConsume/consumeEdit'


import standradcoalList from '@/components/energyStandradcoal/standradcoalList'  
import standradcoalAdd from '@/components/energyStandradcoal/standradcoalAdd' 
import standradcoalEdit from '@/components/energyStandradcoal/standradcoalEdit'

import jobList from '@/components/produceJob/jobList'
import jobAdd from '@/components/produceJob/jobAdd'
import jobEdit from '@/components/produceJob/jobEdit'

import EnergyModel from '@/components/energyModel/EnergyModel'

Vue.use(Router)

export default new Router({
  routes: [
		{path:'/Login',component:Login,name:'Login'},
		{
			path: '/', name: 'Index',component: Index,children:[
				{path:'/',component:Welcome,name:'Welcome'},
				// {path:'Login',component:Login},
// 				{path:'Test2',component:Test2}
			]
			
				
		},
		{
			path: '/chick', name: 'chick',component: chick,children:[
				 {path:'chick1',component:chick1},
				 {path:'chick2',component:chick2}
			]
		},
		{
			path:'/parent',component:parent
		},{
			path:'/color',component:color
		}
		,{
		  path: '/',name: 'Index',component: Index,
				children:[
						{path:'/',component:Welcome},
						{path:'CompList',component:CompList,name:'CompList'},
						{path:'CompAdd',component:CompAdd},
						{path:'CompEdit',component:CompEdit,name:'CompEdit'},
						{path:'/',component:Welcome},
						{path:'UserAdd',component:UserAdd,name:'UserAdd'},
						{path:'UserList',component:UserList},
						{path:'UserEdit',component:UserEdit,name:'UserEdit'},
						{path:'BaseDevTypeAdd',component:BaseDevTypeAdd,name:'BaseDevTypeAdd'},
						{path:'BaseDevTypeList',component:BaseDevTypeList},
						{path:'BaseDevTypeEdit',component:BaseDevTypeEdit,name:'BaseDevTypeEdit'},
						{path:'baseDeviceAdd',component:baseDeviceAdd,name:'baseDeviceAdd'},
						{path:'baseDeviceList',component:baseDeviceList},
						{path:'baseDeviceEdit',component:baseDeviceEdit,name:'baseDeviceEdit'},
						{path:'FlowList',component:FlowList,name:'FlowList'},
						{path:'FlowAdd',component:FlowAdd,name:'FlowAdd'},
						
						{path:'FaultList',component:FaultList,name:'FaultList'},
						{path:'FaultAdd',component:FaultAdd,name:'FaultAdd'},
						{path:'FaultEdit',component:FaultEdit,name:'FaultEdit'},
						{path:'RepairList',component:RepairList,name:'RepairList'},
						{path:'RepairAdd',component:RepairAdd,name:'RepairAdd'},
						{path:'RepairEdit',component:RepairEdit,name:'RepairEdit'},
						{path:'Control',component:Control,name:'Control'},
						{path:'ReportList',component:ReportList,name:'ReportList'},
						{path:'JobAmount',component:JobAmount,name:'JobAmount'},
						{path:'consumeList',component:consumeList,name:'consumeList'},
						{path:'consumeAdd',component:consumeAdd,name:'consumeAdd'},
						{path:'consumeEdit',component:consumeEdit,name:'consumeEdit'},
						{path:'standradcoalList',component:standradcoalList,name:'standradcoalList'},
						{path:'standradcoalAdd',component:standradcoalAdd,name:'standradcoalAdd'},
						{path:'standradcoalEdit',component:standradcoalEdit,name:'standradcoalEdit'},
						{path:'jobList',component:jobList,name:'jobList'},
						{path:'jobAdd',component:jobAdd,name:'jobAdd'},
						{path:'jobEdit',component:jobEdit,name:'jobEdit'},
						{path:'energyConsume',component:energyConsume,name:'energyConsume'},
						{path:'Usage',component:Usage,name:'Usage'},
						{path:'IntactRatio',component:IntactRatio,name:'IntactRatio'},
						{path:'Cost',component:Cost,name:'Cost'},
						{path:'Consume',component:Consume,name:'Consume'},
						{path:'EnergyModel',component:EnergyModel,name:'EnergyModel'}
						
						// , {path:'MainTable',component:MainTable}
					]
		 }	
		
	
	
  ]
})
