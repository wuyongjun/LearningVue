import Vue from 'vue'
import Vuex from 'vuex'
import { types } from './mutationTypes'

Vue.use(Vuex)

const state = {
	products: [{ id: 1, name: '马云', price: '200'},
        { id: 2, name: '马化腾', price: '140'},
        { id: 3, name: '马冬梅', price: '50'},
        { id: 4, name: '马荣', price: '20'}]
}

const getters = {
	saleProducts (state) {
		return state.products.map(product => {
			return {
				id: product.id,
				name: product.name,
				price: product.price / 2
			}
		})
	},
	addPrice (state) {
		return state.products.map(product => {
			return {
				id: product.id,
				name: product.name,
				price: product.price * 2
			}
		})
	}
}

const mutations = {
	[types.REDUCE_PRICE] (state, payload) {
		state.products.forEach(product => {
			product.price -= payload.amount;
		})
	}
}

const actions = { // context为拥有store state和方法的对象 此处可以进行异步操作
	reducePrice (context, payload) {
		setTimeout(function () {
			context.commit('REDUCE_PRICE', payload)
		}, 3000)
	}
}

export const store = new Vuex.Store({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
})	