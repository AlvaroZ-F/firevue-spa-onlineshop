<template>
	<div class="container">
		<div class="col-md-12">

			<div v-if="isProductLoading" class="text-center">
				<grid-loader :loading="isProductLoading" :color="loaderColor" :size="loaderSize" class="d-inline-block"></grid-loader>
			</div>

			<div v-else class="card">
				<div class="row">
					<div class="col-md-12 col-md-4 offset-md-4">
						<div class="intrisic">
							<img class="img-fluid intrisic-item" :src="item.thumbnail_url" alt="" />
						</div>
					</div>
				</div>

				<div class="caption-full">
					<h4 class="pull-right">{{ item.price }} €</h4>
					<h4>{{ item.title }}</h4>
					<p>{{ item.description }}</p>
				</div>

				<div class="ratings">
					<span>Stock: {{ item.quantity }}</span>
					<p class="pull-right">
						<button @click="addItem" :disabled="item.quantity === 0" class="btn btn-success">
							Add to cart
						</button>
					</p>
					<div class="clearfix"></div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import GridLoader from 'vue-spinner/src/GridLoader.vue';

	export default {
		components: {
			GridLoader
		},

		data() {
			return {
				loaderColor: "#5cb75c",
				loaderSize: "50px"
			}
		},

		computed: {
			...mapGetters(['isProductLoading', 'product']),
			item() {
				let id = this.$route.params.id;
				if (this.products.length >= id) {
					let firterArr = this.products.filter((item) => {
						return item.id == id
					});
					if (filterArr.length > 0) {
						return filterArr[0];
					}
				}
				return {};
			}
		},

		methods: {
			...mapActions(['updateCart']),
			addItem() {
				const order = {
					item: Object.assign({}, this.item),
					quantity: 1,
					isAdd: true
				};
				this.updateCart(order);
			}
		}
	}

</script>

<style scoped>

	.caption-full {
		padding-left: 10px;
		padding-right: 10px;
	}

	.ratings {
		padding-right: 10px;
		padding-left: 10px;
		color: #d17581;
	}

</style>