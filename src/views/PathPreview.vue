<template>
	<metainfo>
		<meta
			name="apple-itunes-app"
			content="app-id=1589702536, app-clip-bundle-id=com.soprachev.polymap.clip, app-clip-display=card"
		/>
	</metainfo>

	<div class="abs-full">
		<div class="card">
			<div v-if="data.from">
				<h2>С вами поделились маршрутом</h2>
				<p>Из: {{ data.from }}</p>
				<p>В: {{ data.to }}</p>
				<div v-if="data.helloText">
					<hr />
					<h4>Сообщение автора</h4>
					<p>{{ data.helloText }}</p>
				</div>
				<hr />
				<p class="warning">
					Для просмотра карты вам необходимо приложение
					<a href="https://apps.apple.com/ru/app/polymap/id1589702536" target="_blank">PolyMap</a>,
					сейчас оно доступно только на iOS.
				</p>
			</div>
			<div v-else class="empty">
				<h2>Нет данных</h2>
				<p>Кажется такого маршрута у нас в системе нет, возможно вы ошиблись ссылкой</p>
			</div>
		</div>
		<div class="space"></div>
	</div>
</template>

<script>
import Axios from 'axios';
export default {
	data() {
		return {
			data: {},
		};
	},
	metaInfo() {
		return {
			title: 'PolyMap',
			meta: [
				{
					property: 'og:title',
					content: `Маршрут по кампусу СПбПУ`,
				},
				{
					property: 'og:description',
					content: this.subject,
				},
				{
					property: 'og:url',
					content: `polymap.ru${this.$route.fullPath}`,
				},
				{
					property: 'og:image',
					content: `${window.location.origin}/ogimage.jpg`,
				},
			],
		};
	},
	methods: {},
	computed: {
		subject() {
			if (this.data.from && this.data.to) {
				return `from: ${this.data.from}, to: ${this.data.to}`;
			}
			return 'subject';
		},
	},
	async mounted() {
		let id = this.$route.params.id;
		if (id) {
			let result = await Axios.get('https://polymap.ru/api/load/' + id);

			this.data = result.data;
		}
	},
};
</script>

<style lang="scss">
h2 {
	text-align: center;
	margin: 0px 20px 30px 20px;
}

h4 {
	margin: 8px 0px;
}

p {
	margin: 8px 0;
	font-weight: 300;
}

.warning {
	text-align: center;
	font-style: italic;
	font-size: smaller;
}

.empty {
	p {
		text-align: center;
	}
}

.space {
	height: 200px;
}

.abs-full {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 20px;
	display: flex;

	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #d399ff;
	background-image: radial-gradient(at 41% 6%, hsla(309, 87%, 79%, 1) 0px, transparent 50%),
		radial-gradient(at 10% 41%, hsla(270, 81%, 73%, 1) 0px, transparent 50%),
		radial-gradient(at 19% 91%, hsla(330, 78%, 73%, 1) 0px, transparent 50%),
		radial-gradient(at 24% 7%, hsla(19, 85%, 75%, 1) 0px, transparent 50%),
		radial-gradient(at 95% 40%, hsla(228, 84%, 68%, 1) 0px, transparent 50%),
		radial-gradient(at 2% 55%, hsla(169, 96%, 71%, 1) 0px, transparent 50%),
		radial-gradient(at 79% 70%, hsla(221, 73%, 70%, 1) 0px, transparent 50%);
}

.card {
	background-color: rgba(255, 255, 255, 0.271);
	border-radius: 20px;
	padding: 20px;
	max-width: 500px;
	backdrop-filter: blur(100cm);
	-webkit-backdrop-filter: blur(5cm);

	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 80px;
}
</style>
