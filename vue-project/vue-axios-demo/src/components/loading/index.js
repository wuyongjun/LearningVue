import LoadingComponent from './loading.vue'

const Loading = {
	install (Vue) {
		Vue.component('loading', LoadingComponent)
	}
}

export default Loading