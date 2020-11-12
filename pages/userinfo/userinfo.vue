<template>
	<view>
		<!-- 按钮吊起授权，并监控用户授权状态-->
		<button open-type="getUserInfo" @getuserinfo="getuserinfo">授权登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//监控用户授权
			getuserinfo(result){
				if(result.detail.errMsg!="getUserInfo:fail auth deny"){
					//将用户信息存储缓存内
					uni.setStorageSync('userInfo', JSON.stringify(result.detail.userInfo));				
				}else{
					uni.setStorageSync('userInfo', "");
				}	
				//跳转tab页
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
