<template>
	<div id="component_one">
		<h2>{{header}}</h2>	
		<ul>
			<li v-for="product in increment" :key="product.id">
				<span v-text="product.name"></span> | $<span v-text="product.price"></span>
			</li>
		</ul>
		<button @click="reducePrice({ amount: 1 })">降 价</button>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		// props: {
		// 	products: {
		// 		type: Array
		// 	}
		// },
		data () {
			return {
				header: 'component one list'
			}
		},
		computed: { // 注意：数据属性应该放在计算属性内
			// products () {
			// 	return this.$store.state.products;
			// },
			// saleProducts () {
			// 	return this.$store.getters.saleProducts;
			// }
			// 此处为vuex提供给我们的getters调用的简写方式
			...mapState([
				'products'
			]),
			// ...mapGetters([
			// 	'saleProducts'
			// ])
			...mapGetters({
				sales: 'saleProducts',
				increment: 'addPrice'
			})
		},
		methods: {
			// reducePrice (payload) {
			// 	// this.$store.commit('reducePrice', payload);
			// 	// this.$store.dispatch('reducePrice', payload)

			// }
			// 此处是调用actions中的方法的简便方式
			...mapActions([
				'reducePrice'
			])
		}
	}
</script>