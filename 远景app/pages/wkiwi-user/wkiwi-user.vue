<template>
	<view>
		<view class="header">
			<view class="bg" :style="{background:color}">
				<view class="box">
					<view class="box-hd">
						<view class="avator">
							<img src="../../static/user/face.jpg">
						</view>
						<view class="phone-number">18909XXXX67</view>
					</view>
					<view class="box-bd">
						<view class="item">
							<view class="icon"><img src="../../static/user/message.png"></view>
							<view class="text">我的通知</view>
						</view>
						<view class="item">
							<view class="icon"><img src="../../static/user/favorite.png"></view>
							<view class="text">我的收藏</view>
						</view>
						<view class="item" @click="qiandao">
							<view class="icon"><img :src="msgsrc"></view>
							<view class="text">{{msg}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder" >
					<view class="icon"><image src="../../static/user/card.png"></image></view>
					<view class="text">我的名片</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li " @click="changeSkin">
					<view class="icon"><image src="../../static/user/skin.png"></image></view>
					<view class="text">主题切换</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li " >
					<view class="icon"><image src="../../static/user/help.png"></image></view>
					<view class="text">帮助中心</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li " >
					<view class="icon"><image src="../../static/user/about.png"></image></view>
					<view class="text">关于我们</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li " >
					<view class="icon"><image src="../../static/user/opinion.png"></image></view>
					<view class="text">意见反馈</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li noborder" >
					<!-- <view class="icon"><image src="../../static/user/set.png"></image></view> -->
					<view class="text" @click="logout">退出登录</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				color:"",
				msg:"每日签到",
				msgsrc:"../../static/user/qd.png"
			};
		},
		onLoad() {
			this.fns()
		},
		methods: {
			changeSkin(){
				uni.navigateTo({
						url: '../skin-change/skin-change'
				});
			},fn(){
				uni.getStorage({
					key: "colors",
					success:(res)=>{
						this.color=res.data;
					}
				});
			},fns(){
				uni.getStorage({
					key: "colors",
					success:(res)=>{
						if(res.data){
							this.fn()
						}else{
							console.log("当前无值")
						}
					}
				})
			},qiandao(){
				this.msg="今日已签"
				this.msgsrc="../../static/user/qd0.png"
				uni.navigateTo({
						url: '../index/qiandao/ss-calendar'
				});
			},
			logout() {
				uni.showModal({
					title: '提示',
					content: '确认退出登陆？',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorage({
								key: 'token',
								success(res) {
									uni.redirectTo({
										url: '/pages/home/login'
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color:#f1f1f1;
	font-size: 30upx;
}
.header{
	background: #fff;
	height: 290upx;
	padding-bottom: 110upx;
	.bg{
		width: 100%;
		height:200upx;
		padding-top:100upx;
		background-color:#4191ea;
	}
}
.box{
	width: 650upx;
	height: 280upx;
	border-radius: 20upx;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, .2); 
	.box-hd{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		.avator{
			width: 160upx;
			height: 160upx;
			background: #fff;
			border: 5upx solid #fff;
			border-radius: 50%;
			margin-top: -80upx;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.phone-number{
			width: 100%;
			text-align: center;
		}
	}
	.box-bd{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		.item{
			flex: 1 1 auto;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			border-right: 1px solid #f1f1f1;
			margin: 15upx 0;
			&:last-child{
				border: none;
			}
			.icon{
				width: 60upx;
				height: 60upx;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				width: 100%;
				text-align: center;
				margin-top: 10upx;
			}
		}
	}
}
.list-content{
	background: #fff;
}
.list{
	width:100%;
	border-bottom:15upx solid  #f1f1f1;
	background: #fff;
	&:last-child{
		border: none;
	}
	.li{
		width:92%;
		height:100upx;
		padding:0 4%;
		border-bottom:1px solid rgb(243,243,243);
		display:flex;
		align-items:center;
	&.noborder{
		border-bottom:0
		}
		.icon{
			flex-shrink:0;
			width:50upx;
			height:50upx;
			image{
				width:50upx;
				height:50upx;
			}
		}
		.text{
			padding-left:20upx;
			width:100%;
			color:#666;
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
	}
}
</style>
