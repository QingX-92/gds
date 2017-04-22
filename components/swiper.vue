<template>
	<div class="swiper-container have_header">
		<swiper :options="swiperOption">
			<swiper-slide v-for="swiper in swipers" :key="swiper.id">
				<a :href="swiper.article_url" style="height: 200px;"><img :src="swiper.image_url_big" class="banner-item" alt="" height="20%" width="100%"></a>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	module.exports = {
		data:function() {
			return {
				swipers:[],
				swiperOption: {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: 2500,
					autoplayDisableOnInteraction: false
				}
			}
		},
		methods: {
			getBanner: function() {
				this.$http.jsonp('http://localhost:81/vue-lol/banner.php', {
					params: {
						callback: 'JSON_CALLBACK'
					}
				}).then(function(data) {
					console.log(data)
					this.swipers=data.data.list
				})
			}
		},
		mounted: function() {
			this.getBanner()
			console.log(this.swiperOption)
		}
	}
</script>//错误：没闭合导致不能打包
<style type="text/css">
	.swiper-container{
		min-height: 194px;
	}
</style>