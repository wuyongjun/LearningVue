/**
 * Vuex的一个结构拆分目录
 * 目录结构：store
 *				--index.js
 *				--types.js
 *				--states.js
 *				--getters.js
 *				--mutations.js
 *				--actions.js
 * 主要应用es6的import/export以及解构相关知识点,
 * 官方提供的项目结构是将数据根据业务逻辑分成多个模块数据，每个模块包含上述所用部分在一个文件中，
 * 应用于大型数据复杂项目
 * 可以通过 modules: {...}属性实现
 * 官方示例地址：https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
 * @constructor wuyongjun
 * 
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
	state,
	getters,
	// 注意这里，导出的如果是多个模块可以用下面的配置
	// modules: {
	// 	mutations
	// },
	mutations,
	actions
})