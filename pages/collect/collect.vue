<template>
	<view>
		<view class="collect-top">
			<text style="font-size: 16px; padding: 0; font-weight: bold;">我的收藏</text>
			<text v-if="!manage" @click="manage=!manage;checked=false">管理</text>
			<text v-else @click="manage=!manage">完成</text>
		</view>
		<!-- 展示区域 -->
		<van-checkbox-group :value="result">
			<view class="body" :style="{'height':windowHeight+'px'}" @click="link()">
				<label v-for="i in list" :key="i">
					<view class="photo">
						<image src="https://bookpic.lrts.me/27ae72ad5de748bca5858f910eb413a6_112x150.jpeg"></image>
						<text class="bookname">一号战尊</text>
						<text class="author">莫奈何<text style="margin-left: 3px; font-size: 11px; color: gray;">著</text></text>
						<view style="margin-top: 5px;display: flex; justify-content: space-between; width: 100%;">
							<view>
								<text style="font-size: 11px; color: red;">￥</text>
								<text style="font-size: 12px; color: red;">70.00</text>
							</view>
							<view v-if="manage" style="margin-right: -5px; display: inline-block;"  @click.stop="changeCollect(i)">
								<van-checkbox :name="i" checked-color="#F9273F"></van-checkbox>
							</view>
						</view>
					</view>
				</label>
			</view>
		</van-checkbox-group>
		<!-- 底部菜单 -->
		<view class="bottom" v-show="manage">
			<van-checkbox checked-color="#F9273F" :value="checked" @change="change">全选</van-checkbox>
			<button class="deleteButton" @click="removeList()" size="mini">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				manage: false,
				checked: false,
				result: [],//存储选中的数据
				list:['0','1','2','3','4','5','6','7','8','9','10']//总数据包
			}
		},
		methods: {
			change() {
				//this.checked==true 全选，false放弃全选
			
				this.checked = !this.checked;
				if(this.checked){//全选
					this.result=new Array().concat(this.list);
				}else{//放弃
					this.result=[];//清空
				}
			},
			changeCollect(i) {
				//找一下数组中是否存在该元素
				//数组.indexOf(元素)——判断数组是否包含该元素，包含返回!-1,不包含返回-1
				//返回的是一个下标
				var index=this.result.indexOf(i);
				if(index!=-1){//存在
					//splice移除： 数组.splice(从那个下标开始,完后数几个元素【包含自身】)
					this.result.splice(index, 1); 
					this.checked=false
				}else{//不存在
				    //插入
					this.result.push(i)
					//result和list内容一致时候——全选
					if(this.result.length==this.list.length){
						this.checked=true
					}
				}
			},
			link(){
				console.log('跳转')
			},
			removeList(){
	
			}
		}
	}
</script>

<style>
	@import '@/static/css/index.css';
</style>
