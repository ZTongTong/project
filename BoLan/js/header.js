$(function(){
	collapse();
	pull_right();
	nav_2();
	nav_3();
});
function collapse(){
	let $ul = $("#nav_1");
	let arr = [
		{name:"登录",spanClass:""},
		{name:"成为会员",spanClass:""},
		{name:"我的云书房",spanClass:""},
		{name:"我的博览",spanClass:"glyphicon glyphicon-menu-down"},
		{name:"小说投稿",spanClass:" "},
		{name:"我要出书",spanClass:""},
		{name:"企业采购",spanClass:"glyphicon glyphicon-menu-down"},
		{name:"客户服务",spanClass:"glyphicon glyphicon-menu-down"}
	]
	for (i in arr) {
		let $li = $('<li><a href="">'+arr[i].name+'<span class="'+arr[i].spanClass+'"></span></a></li>');
		$li.appendTo($ul);
	}
};
function pull_right(){
	let $ul = $(".pull-right");
	let arr = ["全部分类","尾品汇","图书","电子书","音像","影视","时尚美妆","母婴用品","玩具","孕婴服饰",
			   "童装童鞋","家居日用","家具装饰","服装","鞋"];
	for (i in arr) {
		let $li = $('<li><a href="#">'+arr[i]+'</a></li>');
		$li.appendTo($ul);
	}
};
function nav_2(){
	let $ul = $("#nav_2");
	let arr = [{name:"图书",href:"",liClass:"avtive"},{name:"电子书",href:"",liClass:""},{name:"网络文学",href:"",liClass:""},{name:"服装",href:"",liClass:""},{name:"运动户外",href:"",liClass:""},{name:"孕婴童",href:"",liClass:""},{name:"家居",href:"",liClass:""},{name:"拍卖",href:"",liClass:""},{name:"食品",href:"",liClass:""},{name:"Apple",href:"",liClass:""},{name:"电器城",href:"",liClass:""}];
	for (i in arr) {
		let $li = $('<li class="all-1 '+arr[i].liClass+'"><a href="">'+arr[i].name+'</a></li>');
		$li.appendTo($ul);
	}
};
function nav_3(){
	let $ul = $("#nav_3");
	let arr = ["图书排行榜","童书","教辅","小说","文学","青春文学","传记","成功励志",
			   "管理","历史","亲子家教","保健养生","考试","科技","进口原版","电子书","网络文学"];
	for (i in arr) {
		let $li = $('<li><a href="">'+arr[i]+'</a></li>');
		$li.appendTo($ul);
	}
};