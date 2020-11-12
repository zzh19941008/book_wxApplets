<script>
	export default {
		onLaunch: function() {
			//全局获取用户信息
			uni.getUserInfo({
				"lang":"zh_CN",
				"timeout":2000,
				success(result) {//如果成功
					//将用户信息存储缓存内
					uni.setStorageSync('userInfo', JSON.stringify(result.userInfo));
				},
				fail(err){//如果失败
				    //跳转授权界面授权
					uni.navigateTo({
						url:"/pages/userinfo/userinfo"
					})
				}
				
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
