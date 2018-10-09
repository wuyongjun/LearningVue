<template>
	<div id="user">
		<h1>{{user.title}}</h1>
		<h3>{{user.body}}</h3>
		<button @click="$router.go(-1)">返回</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				user: {}
			}
		},
		mounted () {
			this.fetchData()
		},
		methods: {
			fetchData () {
				let _this = this
				let userId = this.$route.params.user_id
				this.$http.get(`http://jsonplaceholder.typicode.com/posts/${userId}`)
					.then(res => {
						_this.user = res.data
					}).catch(err => {
						return new Promise.reject('err')
					})
			}
		}
	}
</script>