import Vue from 'vue'
import store from './store'
import Axios from 'axios'
Vue.prototype.$http = Axios

const interceptorConfig = {
	requestInterceptor: Axios.interceptors.request.use(config => {
		store.dispatch('showLoading')
		return config
	}, error => {
		return new Promise.reject(err)
	}),
	responseInterceptor: Axios.interceptors.response.use(response => {
		store.dispatch('hideLoading')
		return response
	}, error => {
		return new Promise.reject(error)
	})
}

export default interceptorConfig