import LoadingComponent from './Loading.vue'

const Loading = {
	install (vue) {
		vue.component('loading', LoadingComponent)
	}
}

export default Loading