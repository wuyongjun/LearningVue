import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 状态数据
let state = {
	count: 10
}
// 函数方法
const getters = {
	['count'] (state) {
		return state.count
	},
	getOdd (state) {
		return state.count % 2 === 0 ? '偶 数' : '奇 数'
	}
}
// 更改state中的数据 *****mutation要使用getter
const mutations = {
	['increment'] (state) {
		state.count++;
	},
	['decrement'] (state) {
		state.count--;
	},
	['multiplication'] (state, payload) {
		console.log(typeof payload)
		state.count = state.count * payload.mul
	}
}
// 和vue componet 交互，提交mutations
const actions = {
	increment: ({ commit }) => {
		commit('increment')
	},
	decrement: ({ commit }) => {
		commit('decrement')
	},
	oddIncrement: ({ commit, state }) => {
		state.count % 2 === 0 ? commit('increment') : '';
	},
	asyncIncrement: ({ commit }) => {
		new Promise(resolve => {
			setTimeout(function () {
				commit('increment')
			}, 1000)
		}, reject => {

		})
	},
	multiplication: ({ commit }, payload) => {
		commit('multiplication', payload)
	}
}
// ***注意***如果采用对象简写的方式添加对象属性，那么定义的变量名一定要和对象的属性值
// 完全一致
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})