<script>
	export default {
		onLaunch: function() {
			//获取设备信息
			uni.getSystemInfo({
					success: function(res) {
						uni.setStorageSync("windowWidth",res.windowWidth)
						uni.setStorageSync("windowHeight",res.windowHeight)
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
