<template>
	<view class="userBody">
		<view class="login">
			  <view >
				 <view class="avatarUrl">
					 <image v-if="userinfo!=''" :src="userinfo.avatarUrl"></image>
					 <image v-else src="@/static/defult.jpg"></image>
				 </view>
                 <view style="margin-top: 5px;">
					 <text v-if="userinfo!=''" >{{userinfo.nickName}}</text>
					  <button v-else class="loginButton" open-type="getUserInfo" @getuserinfo="getuserinfo">授权登录</button>
				 </view> 
             </view>
		</view>
		<view class="li" @click="swicthTo('/pages/collect/collect')">
			<van-icon name="star-o" />
			<text style="margin-left: 10px;">我的收藏</text>
		</view>
		<view class="li">
			<van-icon name="orders-o" />
			<text style="margin-left: 10px;">我的订单</text>
		</view>
		<view class="li" @click="linkto()">
			<van-icon name="location-o" />
			<text style="margin-left: 10px;">地址管理</text>
		</view>
		<view class="li" @click="logout()">
			<van-icon name="share-o" />
			<text style="margin-left: 10px;">退出登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:"",
			}
		},
		methods: {
			getuserinfo(result){
				console.log(result.detail.userInfo)
				if(result.detail.userInfo){
					//将用户信息存储缓存内
					uni.setStorageSync('userInfo', JSON.stringify(result.detail.userInfo));		
					this.userinfo=result.detail.userInfo;
				}else{
					uni.setStorageSync('userInfo', "");
				}	
			},
			linkto(){
				uni.navigateTo({
					url:"/pages/address/address"
				})
			},
			swicthTo(url){
				uni.switchTab({
					url:url
				})
			},
			logout(){
				//请了缓存
				uni.removeStorageSync("userInfo");
				this.userinfo=""
			}
			
		},
		onLoad(){
			var usinfo=uni.getStorageSync("userInfo");
			if(usinfo!=""){
				this.userinfo=JSON.parse(usinfo);
			}
		}
	}
</script>

<style>
    @import '@/static/css/index.css';
</style>
