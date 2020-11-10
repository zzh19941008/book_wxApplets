import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// axios
import axios from '@/utils/request.js'
Vue.prototype.$axios=axios;
// vuex
import store from "@/store/index"

const app = new Vue({
    ...App,
	store
})
app.$mount()
