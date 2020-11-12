<template>
	<view class="userBody">
		<view v-if="userinfo!=''" class="userBody">
			 <image :src="userinfo.avatarUrl"></image>
		</view>
		<view v-else>
			<button @click="link()">去授权</button>
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
			link(){
				//跳转授权界面授权
				uni.navigateTo({
					url:"/pages/userinfo/userinfo"
				})
			}
		},
		onShow(){
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
