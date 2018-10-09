import * as types from './types'

export default {
	increment: ({ commit }) => {
		commit(types.INCREMENT)
	},
	decrement: ({ commit }) => {
		commit(types.DECREMENT)
	},
	oddIncrement: ({ commit, state }) => {
		state.count % 2 === 0 ? commit(types.INCREMENT) : ''
	},
	asyncIncrement: ({ commit }) => {
		new Promise(resolve => {
			setTimeout(function () {
				commit(types.INCREMENT)
			}, 1000)
		}, reject => {

		})
	},
	multiplication: ({ commit }, payload) => {
		commit(types.MULTIPLICATION, payload)
	}
}