import TestComponent from './Test.vue'

export default {
	install (vue) {
		vue.component('test', TestComponent);
	}
}