<template>
	<view>
		<!-- 顶部菜单 -->
	     <view class="top">
			 <view>
				<text>分类</text>
				<van-icon name="arrow-down" />
			 </view>
			 <view>
			 	<text>作者</text>
			 	<van-icon name="arrow-down" />
			 </view>
			 <view>
			 	<text>价格</text>
			 	<van-icon name="arrow-down" />
			 </view>
			 <view style="padding:0; width: 40%;">
				 <van-search
				   custom-class="search"
				   value="" placeholder="书籍名" 
				 />
			 </view>
		 </view>
		 <scroll-view scroll-y="true" :style="{'height':windowHeight-36+'px','margin-top':'36px'}">
			 <van-card v-for="i in 30" :key="i"
			   tag="标签"
			   price="10.00"
			   desc="描述信息"
			   title="商品标题"
			   thumb="https://bookpic.lrts.me/27ae72ad5de748bca5858f910eb413a6_112x150.jpeg"
			 >
			 </van-card>
		 </scroll-view>
	</view>
</template>

<script>
	var pageObj;
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight:0
			}
		},
		onLoad() {
			pageObj=this;
			uni.getSystemInfo({
				success: function (res) {
					pageObj.windowWidth=res.windowWidth;
					pageObj.windowHeight=res.windowHeight;
				}
			});
		},
		methods: {

		}
	}
</script>

<style>
	@import '@/static/css/index.css';
</style>
