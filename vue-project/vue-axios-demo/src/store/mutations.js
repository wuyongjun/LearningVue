import * as types from './types'
import getters from './getters'

const state = {
	loadingShow: false
}

const mutations = {
	[types.SHOWLOADING] (state) {
		state.loadingShow = true
	},
	[types.HIDELOADING] (state) {
		state.loadingShow = false
	}
}

export default {
	state,
	getters,
	mutations
}

