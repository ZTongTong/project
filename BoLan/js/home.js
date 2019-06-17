$(function() {
	$('#myCarousel').carousel({
		interval: 1500
	})
	myCarousel();
	show();
})

function myCarousel(){
	let $carousel_indicators = $(".carousel-indicators");
	let arr = [
		{num:0,liClass:"active"},
		{num:1,liClass:""},
		{num:2,liClass:""},
		{num:3,liClass:""},
		{num:4,liClass:""},
		{num:5,liClass:""},
		{num:6,liClass:""},
		{num:7,liClass:""},
		{num:8,liClass:""}
	];
	for (i in arr) {
		let $li = $('<li data-target="#myCarousel" data-slide-to="'+arr[i].num+'" class="'+arr[i].liClass+'"></li>');
		$li.appendTo($carousel_indicators);
	};
	let $carousel_inner = $(".carousel-inner");
	let arrImg = [
		{imgSrc:"../img/1.jpg",divclass:"item active"},
		{imgSrc:"../img/2.jpg",divclass:"item"},
		{imgSrc:"../img/3.jpg",divclass:"item"},
		{imgSrc:"../img/4.jpg",divclass:"item"},
		{imgSrc:"../img/5.jpg",divclass:"item"},
		{imgSrc:"../img/6.jpg",divclass:"item"},
		{imgSrc:"../img/7.jpg",divclass:"item"},
		{imgSrc:"../img/8.jpg",divclass:"item"}
	];
	for (a in arrImg) {
		let $div = $('<div class="'+arrImg[a].divclass+'"><img src="'+arrImg[a].imgSrc+'"></div>');
		$div.appendTo($carousel_inner);
	};
};
function show(){
	let $show = $(".show");
	let arr = [
		{bookName:"雅典的胜利",img:"../img/book1.jpg",autorName:"[英]安东尼·艾福瑞特",price:"￥80.20 ",old_price:" ￥88.20"},
		{bookName:"汪曾祺散文精选集:",img:"../img/book2.jpg",autorName:"汪曾祺 著 时代华语 ",price:"￥37.40 ",old_price:" ￥42.20"},
		{bookName:"虎妈战歌",img:"../img/book3.jpg",autorName:"蔡美儿",price:"￥43.50 ",old_price:" ￥58.00"},
		{bookName:"摆渡人3",img:"../img/book4.jpg",autorName:"[英]克莱儿·麦克",price:"￥9.90 ",old_price:" ￥9.90"},
		{bookName:"事实",img:"../img/book5.jpg",autorName:"（瑞典）汉斯？罗斯",price:"￥28.99 ",old_price:" ￥30.00"},
		{bookName:"半小时漫画唐诗",img:"../img/book6.jpg",autorName:"陈磊·半小时漫画团",price:"￥43.90 ",old_price:" ￥49.90"},
		{bookName:"你的情商决定你的",img:"../img/book7.jpg",autorName:"[日]心屋仁之助 著，",price:"￥35.60 ",old_price:" ￥45.00"},
		{bookName:"小孩",img:"../img/book8.jpg",autorName:"大冰",price:"￥29.80 ",old_price:" ￥39.60"}
	];
	for (i in arr) {
		let $div = $('<div class="col-md-3"><a href=""><img src="'+arr[i].img+'" ><br><span>'+arr[i].bookName+'</span></a><br><span class="autor">'+arr[i].autorName+'</span><br><span class="price">'+arr[i].price+'</span><span class="old_price">'+arr[i].old_price+'</span></div>');
		$div.appendTo($show);
	}
}