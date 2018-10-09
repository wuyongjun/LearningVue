import { 
	INCREMENT,
	DECREMENT,
	MULTIPLICATION
} from './types'
// *****注意这里mutation要使用getter，所以在这里需导入
// import getters from './getters'

// const state = {
// 	count: 10
// }

const mutations = {
	[INCREMENT] (state) {
		state.count++
	},
	[DECREMENT] (state) {
		state.count--
	},
	[MULTIPLICATION] (state, payload) {
		state.count = state.count * payload.mul
	}
}

// export default {
// 	// state,
// 	// getters,
// 	mutations
// }
export default mutations