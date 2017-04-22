<template>
	<div class="gridlist-demo-container">
		<mu-grid-list class="gridlist-demo" style='height: 100%;'>
			<mu-grid-tile v-for="tile in lists">
				<a :href="'#/heroDetailed/'+tile.key"><img :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+tile.key+'.png'" /></a>
				<span slot="title">{{tile.name}}</span>
				<span slot="subTitle">{{tile.title}}</span>
				
			</mu-grid-tile>
		</mu-grid-list>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lists: {},
				tab:2,
				token:''
			}
		},
		methods:{
			getZmHero: function() {
				this.$http.get('http://lolapi.games-cube.com/Free',{
					headers:{
						'DAIWAN-API-TOKEN': 'DB35E-353B1-E6041-F4141' 
					}
				}).then(function(data) {
					this.lists=data.data.data[0]
					console.log(this.lists)
				})
			},
/*			ship:function(){
				this.$http.get('http://apps.game.qq.com/lol/act/website2013/video.php?page=1&p4=0&p2=0&p3=9999&r1=1&pagesize=10&source=lolapp'
					
				).then(function(data){
					console.log(data)
				})
			}*/
		},
		computed:{
			token:function(){
				return this.$store.state.token
			}
		},
		mounted:function(){
			this.getZmHero()
			//this.ship()
			console.log(this.token)
		}
	}
</script>

<style>
	.gridlist-demo-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.gridlist-demo {
		width: 500px;
		height: 450px;
		overflow-y: auto;
	}
	.mu-grid-tile img {
		width: 100%;
		display: block;
	}
</style>