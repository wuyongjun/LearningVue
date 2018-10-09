export default {
	count (state) {
		console.log(state)
		return state.count
	},
	getOdd (state) {
		return state.count % 2 === 0 ? '偶 数' : '奇 数'
	}
}