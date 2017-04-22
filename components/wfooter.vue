<template>
	<mu-paper>
	  <mu-bottom-nav :value="bottomNav" @change="handleChange">
	    <a href="#/index/panel"><mu-bottom-nav-item value="recents" title="资讯" icon="book"/></a>
	    <a href="#/hero/zm"><mu-bottom-nav-item value="favorites" title="英雄" icon="people"/></a>
	    <a href="#/tv"><mu-bottom-nav-item value="nearby" title="视频" icon="tv"/></a>
	  </mu-bottom-nav>
	</mu-paper>
</template>

<script>
	export default {
		data() {
				return {
					bottomNav: 'recents'
				}
			},
			methods: {
				handleChange(val) {
					this.bottomNav = val
				}
			}
	}
</script>
<style type="text/css">
	mu-paper{
		position: fixed;
		bottom: 0;
		padding-bottom: 56px;
	}
	.mu-bottom-item-icon{
		color:orangered
	}
	.mu-bottom-item-text{
		color: orangered;
	}
</style>