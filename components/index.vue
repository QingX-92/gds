<template>
	<div>
		<swiper></swiper>
		<wnav></wnav>
		<router-view></router-view>
		
		<wfooter></wfooter>		
	</div>
	
</template>
<script>
	var wfooter = require('./wfooter.vue');
	var swiper = require('./swiper.vue');
	var wnav=require('./wnav.vue')
	module.exports={
		components:{
			swiper:swiper,
			wfooter:wfooter,
			wnav:wnav
		}
	}
</script>