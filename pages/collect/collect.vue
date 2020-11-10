<template>
	<view>
		<view class="collect-top" >
			<text style="font-size: 16px; padding: 0; font-weight: bold;">我的收藏</text>
		    <text v-if="manage" @click="manage=!manage;checked=false">管理</text>
			<text v-else @click="manage=!manage">完成</text>
		</view>
		<!-- 展示区域 -->
		<checkbox-group>
			<view class="body" :style="{'height':windowHeight+'px'}">
			
					<view v-for="i in 30" :key="i">
						<image src="https://bookpic.lrts.me/27ae72ad5de748bca5858f910eb413a6_112x150.jpeg"></image>
						<text class="bookname">一号战尊</text>
						<text class="author">莫奈何<text style="margin-left: 3px; font-size: 11px; color: gray;">著</text></text>
						<view style="margin-top: 5px;display: flex; justify-content: space-between; width: 100%;">
							<view>
								<text style="font-size: 11px; color: red;">￥</text>
								<text style="font-size: 12px; color: red;">70.00</text>
							</view>
							<view style="margin-right: -5px;">
								<checkbox style="transform:scale(0.7)" :value="i" :checked="checked"></checkbox>
							</view>
						</view>
					</view>
			</view>
		</checkbox-group>
		<!-- 底部菜单 -->
		<view class="bottom" v-if="!manage">
			<van-checkbox  checked-color="#F9273F" :value="checked" @change="change">全选</van-checkbox>
			<button class="deleteButton" size="mini">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                 manage:true,
				 checked:false
				 
			}
		},
		methods: {
            change(){
				this.checked=!this.checked;
			}
		}
	}
</script>

<style>
    @import '@/static/css/index.css';
</style>
