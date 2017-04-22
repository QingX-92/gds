<template>
	<div>
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab value="tab1" title="周免" href="#/hero/zm" />
			<mu-tab href="#/hero/allHero" value="tab2" title='全部英雄' />
			<mu-tab value="tab3" title="我的英雄" />
		</mu-tabs>
		<p class="p" @click="back()">
			<</p>
				<router-view></router-view>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'tab1',
				avtive:false
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val	
				//console.log(this)
			},
			zmClick: function() {
				window.location.href = '#/hero/zm'
			},
			back() {
				window.history.back()
				
				this.avtive=true
				console.log(this.$route)
				console.log(this.$route.fullPath)
			}
		},
		mounted: function() {

			
		}
	}
</script>
<style type="text/css">
	.mu-tabs {
		background: #0c0b0c;
	}
	
	.mu-tabs a {
		display: inline-block;
	}
	
	.p {
		width: 50px;
		height: 60px;
		line-height: 60px;
		font-size: 38px;
		text-align: center;
		color: white;
		position: absolute;
		left: 0px;
		top: -10px;
		z-index: 999;
	}
	
	.mu-tab-active {
		color: red;
	}
</style>