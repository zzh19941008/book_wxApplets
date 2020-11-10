import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var vuexObj={
	state:{
		username:"admin"
	}
}

var store=new Vuex.Store(vuexObj);

export default store;