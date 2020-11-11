<template>
	<view>
		<!-- 顶部菜单 -->
		<view class="top">
			<view @click="open(1)">
				<text>{{condition.boottypeName}}</text>
				<van-icon v-if="type!=1" name="arrow-down" />
				<van-icon v-else name="arrow-up" />
				<!-- 分类下拉 -->
				<view class="type" v-show="type==1">
					<view class="gonggebody">
						 <view class="gongge" @click.stop="changeBookType(0,'分类')">
							 <view v-if="condition.boottype==0" style="width: 30px; text-align: center; color:#D4237A;">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/qb1.png" />
							 	<text>全部</text>
							 </view>
							 <view  v-else style="width: 30px; text-align: center; color:#1296DB">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/qb.png" />
							 	<text>全部</text>
							 </view>
						 </view>
						 <view class="gongge" v-for="i in 10" :key="i" @click.stop="changeBookType(i+1,'文'+i)">
							 <view v-if="condition.boottype==(i+1)" style="width: 30px; text-align: center; color:#D4237A;">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/book1.png" />
							 	<text>文{{i}}</text>
							 </view>
							 <view v-else style="width: 30px; text-align: center; color:#1296DB;">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/book.png" />
							 	<text>文{{i}}</text>
							 </view>
						 </view>
					</view>
	
				</view>
			</view>
			<view @click="open(2)">
				<text>作者</text>
				<van-icon v-if="type!=2" name="arrow-down" />
			</view>
			<view @click="open(3)">
				<text>价格</text>
				<van-icon v-if="type!=3" name="arrow-down" />
			</view>
			<view style="padding:0; width: 40%;">
				<van-search custom-class="search" value="" placeholder="书籍名" />
			</view>
		</view>
		<scroll-view scroll-y="true" :style="{'height':windowHeight-36+'px','margin-top':'36px'}">
			<view v-for="i in 30" :key="i" @click="xiangqing()">
				<van-card tag="标签" price="10.00" desc="描述信息" title="商品标题" thumb="https://bookpic.lrts.me/27ae72ad5de748bca5858f910eb413a6_112x150.jpeg">
				</van-card>
			</view>
		</scroll-view>
		<van-overlay :show="show" @click="hide()" />
	</view>
</template>

<script>
	var pageObj;
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
				show: false,
				type: 0,
				condition: {
					boottype: 0,//记录分类编号
					boottypeName:"分类"//记录分类名
				}
			}
		},
		onLoad() {
			pageObj = this;
			uni.getSystemInfo({
				success: function(res) {
					pageObj.windowWidth = res.windowWidth;
					pageObj.windowHeight = res.windowHeight;
				}
			});
		},
		methods: {
			shoucang() {
				console.log("shoucang")
			},
			xiangqing() {
				console.log("xiangqiang")
			},
			open(type) {
				this.show = true
				this.type = type
			},
			hide() {
				this.show = false
				this.type = 0
			},
			changeBookType(type,typeName){	
				this.condition.boottype=type//更改记录分类编号
				this.condition.boottypeName=typeName //更记录的分类名字
				this.show=false //关闭遮罩
				this.type=0 //收起下拉
			}
			
		}
	}
</script>

<style>
	@import '@/static/css/index.css';
</style>
