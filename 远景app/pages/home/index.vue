<template>
	<view>
		<view class="content">
			<view>
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#1296db"></uni-segmented-control>
				<view class="content">
					<view v-show="current === 0">
						<energy></energy>
					</view>
					<view v-show="current === 1">
						<produce></produce>
					</view>
					<view v-show="current === 2">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue"
	import energy from "../index/energy.vue"
	import produce from "../index/produce.vue"
	export default {
		components: {uniSegmentedControl,energy,produce},
		data(){
			return{
				items:['能耗','产销','排名'],
				current:0
			}
			
		},
		mounted() {
			
		},
		methods:{
			onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
            }
        }
		}
	}
</script>

<style>
	.content {
		margin-top: 50upx;
		text-align: center;
		height: 400upx;
	}
	@import url("../../static/css/index.css");
</style>
