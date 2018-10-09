<template>
	<div id="home">
		<h1>this is home page</h1>
		<ul>
			<li class="pb-10" v-for="(item, index) in list" :key="item.id" v-cloak>
				<router-link :to="{name: 'User', params: {user_id: item.id}}">
					NO.{{index + 1}} {{item.name}}-{{item.email}}
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list: []
			}
		},
		mounted () {
			// get data
			this.fetchData()
		},
		methods: {
			fetchData () {
				let _this = this;
				this.$http.get('http://jsonplaceholder.typicode.com/users')
					.then(data => {
						console.log(data)
						_this.list = data.data;
					}).catch(error => {
						console.log(err)
					})
			}
		}
	}
</script>
<style scoped>
	[v-cloak] {
	  display: none;
	}
	#home {
		text-align: center
	}
	ul {
		list-style: none;
	}
	.pb-10 {
		padding-bottom: 10px;
	}
</style>