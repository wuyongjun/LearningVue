<template>
	<div id="component_two">
		<h2>{{header}}</h2>	
		<ul>
			<li v-for="product in products" :key="product.id">
				<span v-text="product.name"></span> | $<span v-text="product.price"></span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		// props: {
		// 	products: {
		// 		type: Array
		// 	}
		// },
		data () {
			return {
				header: 'component two list'
			}
		},
		computed: {
			products () {
				return this.$store.state.products
			},
			saleProducts () {
				return this.$store.getters.saleProducts;
			}
		}
	}
</script>