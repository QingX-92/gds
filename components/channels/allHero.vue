<template>
	<div class="gridlist-demo-container">
		<mu-grid-list class="gridlist-demo" style='height: 100%;'>
			<mu-grid-tile v-for='list in lists'>
				<img v-lazy="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+list.id+'.png'" />
				<span slot="title">{{list.cname}}</span>
				<span slot="subTitle">{{list.title}}</span>

			</mu-grid-tile>
		</mu-grid-list>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				lists: {},
				tab:3
			}
		},
		methods: {
			getZmHero: function() {
				this.$http.get('http://lolapi.games-cube.com/champion', {
					headers: {
						'DAIWAN-API-TOKEN': 'DB35E-353B1-E6041-F4141'
					}
				}).then(function(data) {
					this.lists = data.data.data
					//console.log(data.data.data)
				})
			}
		},
		mounted: function() {
			this.getZmHero()
		}
	}
</script>
<style type="text/css">
	img[lazy=loading] {
		border: 10px solid red;
	}
</style>