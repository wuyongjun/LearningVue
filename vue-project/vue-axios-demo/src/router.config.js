import Home from './components/Home.vue'
import News from './components/News.vue'
import User from './components/User.vue'

export default [{
	path: '/', name: 'Home', component: Home
}, {
	path: '/news/:new_id', name: 'News', component: News
}, {
	path: '/user/:user_id', name: 'User', component: User
}, {
	path: '*', redirect: '/'
}]