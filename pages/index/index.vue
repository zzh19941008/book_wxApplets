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
							 <view v-if="condition.booktypeid==''" style="width: 30px; text-align: center; color:#D4237A;">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/qb1.png" />
							 	<text>全部</text>
							 </view>
							 <view  v-else style="width: 30px; text-align: center; color:#1296DB">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/qb.png" />
							 	<text>全部</text>
							 </view>
						 </view>
						 <view class="gongge" v-for="(item,index) in book_typeArray" :key="index" @click.stop="changeBookType(item.typeid,item.typename)">
							 <view v-if="condition.booktypeid==book_typeArray.typeid" style="width: 30px; text-align: center; color:#D4237A;">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/book1.png" />
							 	<text>{{item.typename}}</text>
							 </view>
							 <view v-else style="width: 30px; text-align: center; color:#1296DB;">
							 	<image style="width: 30px; height: 30px;" src="../../static/icon/book.png" />
							 	<text>{{item.typename}}</text>
							 </view>
						 </view>
					</view>
	
				</view>
			</view>
			<view @click="open(2)">
				<text>作者</text>
				<van-icon v-if="type!=2" name="arrow-down" />
				<van-icon v-else name="arrow-up" />
			</view>
			<view @click="open(3)">
				<text>价格</text>
				<van-icon v-if="type!=3" name="arrow-down" />
				<van-icon v-else name="arrow-up" />
			</view>
			<view style="padding:0; width: 40%;">
				<van-search custom-class="search" value="" placeholder="书籍名" />
			</view>
		</view>
		<scroll-view scroll-y="true" :style="{'height':windowHeight-36+'px','margin-top':'36px'}">
			<view v-for="(item,index) in array" :key="index" @click="xiangqing(item.bookid)">
				<van-card tag="标签" :price="item.bookprice" desc="描述信息" :title="item.bookname" thumb="https://bookpic.lrts.me/27ae72ad5de748bca5858f910eb413a6_112x150.jpeg">
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
					booktypeid:"",//记录分类编号
					boottypeName:"分类",//记录分类名
					bookauthorid:"",//记录作者编号
					moneyStart:"",//记录价格区间
					moneyEnd:""//记录价格区间
				},
				page:1,
				array:[],//书籍数据包
				book_typeArray:[]//分类数据包
			}
		},
		onLoad() {
			pageObj = this;
			this.windowWidth=uni.getStorageSync("windowWidth")
			this.windowHeight=uni.getStorageSync("windowHeight")
			this.showLimit();
		},
		methods: {
			shoucang() {
				console.log("shoucang")
			},
			xiangqing() {
				uni.navigateTo({
					url:"/pages/details/details"
				})
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
				this.condition.booktypeid=type//更改记录分类编号
				this.condition.boottypeName=typeName //更记录的分类名字
				this.show=false //关闭遮罩
				this.type=0 //收起下拉
			
				this.showLimit();
			},
			showLimit(){
				console.log(this.condition.booktypeid)
				this.$axios.post(
					"/book/showLimit",
					{ 
						condition:this.condition,
						page:this.page,
						pagesize:10
					}
				).then(function(result){
					pageObj.array=result.data.array
					pageObj.book_typeArray=result.data.book_typeArray
				}).catch(function(err){
					console.log(err)
				})
			}
			
			
		}
	}
</script>

<style>
	@import '@/static/css/index.css';
</style>
