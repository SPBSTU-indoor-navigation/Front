<template>
	<h1>Polymap</h1>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: 'PolyMap',
			meta: [
				{
					property: 'og:title',
					content: `Карта кампуса СПбПУ`,
				},
				{
					property: 'og:description',
					content: 'Помещение и прилигающая территория',
				},
				{
					property: 'og:url',
					content: `polymap.ru${this.$route.fullPath}`,
				},
				{
					property: 'og:image',
					content: `${window.location.origin}/ogimage.jpg`,
				},
				{
					name: 'apple-itunes-app',
					content:
						'app-id=1589702536, app-clip-bundle-id=com.soprachev.polymap.clip, app-clip-display=card',
				},
			],
		};
	},
};
</script>
