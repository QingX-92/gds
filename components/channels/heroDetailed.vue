<template>
	<div id="detailed" >
		<b @click="back()"><</b>
		<img :src='img' style="width: 100%;" />
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab value="tab1" title="技能" />
			<mu-tab value="tab2" title="皮肤" />
			<mu-tab value="tab3" title="故事" />
			<mu-tab value="tab4" title="攻略" />
		</mu-tabs>
		<div v-if="activeTab === 'tab2'">
			<div v-for='skin in skins' class="skinBox">
				<h3>{{skin.name}}</h3>
			<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+skin.id+'.jpg'" alt="" class='skins' />
			</div>
		</div>
		<div v-if="activeTab === 'tab1'">
			<div>
				<img :src="'http://ossweb-img.qq.com/images/lol/img/passive/'+jnImg+''" />
				<span class='sp'>{{name}}</span><br />
				<span>{{description}}</span>
			</div>
			<ul>
				<li v-for='spell in spells'>
					<img :src="'http://ossweb-img.qq.com/images/lol/img/spell/'+spell.image.full+''" />
					<span class="sp">{{spell.name}}</span><br />
					<span>{{spell.tooltip}}</span>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'tab1',
				img: '',
				skinid: '',
				jnImg: '',
				spells: '',
				description: '',
				name: '',
				skins:[],
				key:''
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			},
			handleActive() {
				window.alert('tab active')
			},
			getHero() {
				this.$http.get('http://lolapi.games-cube.com/GetChampionDetail?champion_id=' + this.$route.params.id, {
					headers: {
						'DAIWAN-API-TOKEN': 'DB35E-353B1-E6041-F4141'
					}
				}).then(function(data) {
					console.log(data.data.data)
					var hero = data.data.data;
					this.key=hero[0].key
					this.skinid = hero[0].skins[0].id;//默认皮肤ID
					hero[0].skins.splice(0,1);
					this.skins=hero[0].skins;//皮肤
					console.log(this.skins);
					this.jnImg = hero[0].passive.image.full;//被动技能描述图标
					this.name = hero[0].passive.name;//被动技能名
					this.description = hero[0].passive.description;//被动技能描述
					this.spells = hero[0].spells//技能
					console.log(this.spells)
					this.$http.get('http://lolapi.games-cube.com/GetChampionSkin?champion_id=' + this.$route.params.id + '&skinid=' + this.skinid + '', {
						headers: {
							'DAIWAN-API-TOKEN': 'DB35E-353B1-E6041-F4141'
						}
					}).then(function(data) {
						console.log(data.data.data)
						this.img = data.data.data[0].return
					})
				})
			},
			back(){
				window.history.back()
				console.log(111)
			}
		},
		mounted: function() {
			this.getHero()

		}
	}
</script>
<style type="text/css">
	h3,p,ul,li,div,b{
		margin: 0;
		padding: 0;
	}
	ul,
	li {
		list-style: none;
		
	}
	
	#detailed {
		color: orangered;
	}
	
	.sp {
		font-size: 22px;
	}
	.skins{
		width: 100%;
	}
	.skinBox{
		position:relative;
	}
	.skinBox h3{
		color: ;
		position: absolute;
		left: 10px;
		top: 20px;
	}
	b{
		width: 50px;
		height: 60px;
		line-height: 60px;
		font-size: 38px;
		text-align: center;
		color: white;
		background: rgba(0,0,0,0.5);
		position: absolute;
		left: 0px;
		top: -10px;
	}

</style>