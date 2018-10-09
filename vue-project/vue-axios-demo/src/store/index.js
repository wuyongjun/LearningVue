import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
	// 注意这里的配置modules
	modules: {
		mutations
	},
	actions
})