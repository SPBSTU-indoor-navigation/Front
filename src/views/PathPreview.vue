<template>
	<div>Preview</div>
	<div>{{ data }}</div>
</template>

<script>
import Axios from 'axios';
export default {
	data() {
		return {
			data: {},
		};
	},
	methods: {},
	computed: {},
	async mounted() {
		let id = this.$route.params.id;
		if (id) {
			let result = await Axios.get('https://polymap.ru/api/load/' + id);

			this.data = result.data;
		}
	},
};
</script>
