<template>
	<view>
		<view class="list-content">
			<radio-group @change="radioChange">
				<label class="list" v-for="(item, index) in items" :key="item.value" >
					<view class="text">{{item.name}}</view>
					<view>
						<radio :value="item.value"/>
					</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'radio',
				items: [{
						value: 'USA',
						name: '经典蓝',
						checked: 'true',
						color:"#033EBE"
					},
					{
						value: 'CHN',
						name: '魅力红',
						color:"#8D2722"
					},
					{
						value: 'BRA',
						name: '活力蓝',
						color:"#0290E2"
					},
					{
						value: 'JPN',
						name: '孔雀绿',
						color:"#005A5B"
					}
				],
				current: 0
			}
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						console.log(this.items[this.current].color)
						console.log(this.items[this.current].name)
						break;
					}
				}
				uni.setStorage({
					key: "colors",
					data: this.items[this.current].color,
					success:()=>{
						console.log('保存成功 颜色：'+this.items[this.current].name+"十六进制："+this.items[this.current].color);
					}
				})
				uni.navigateTo({
					url:"../wkiwi-user/wkiwi-user"
				})
			}
		}
	}
</script>

<style>
	.list-content{
		padding: 20upx;
		font-size: 30upx;
	}
	.list{
		display:flex;
		height: 100upx;
		line-height: 100upx;
		width: 100%;
		border-bottom:1px solid rgb(243,243,243);
	}
	.text{
		flex:1 1 auto;
	}
	
</style>