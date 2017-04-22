<template>
	<div class="tvload">
		<header id="title">
			<b @click='back()'><</b>
		</header>
		<ul class="tvs">
			<li v-for='tv in tvs' class="tv">
				<a :href="tv.appurl"><img v-lazy="tv.appthumb" alt="" /></a>
				<p class="title">{{tv.title}}</p>
				<p><span class="plays">播放：{{tv.play}}</span><span class="pastTime">{{tv.pubdate|my-filter}}</span></p>
			</li>

		</ul>
		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getTv()" />
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				tvs: [],
				page: 0,
				scroller: null,
				loading: false
			}
		},
		methods: {
			getTv: function() {
				this.page += 1;
				this.loading = true
				this.$http.jsonp('http://localhost:81/vue-lol/tv.php', {

					params: {
						callback: "JSON_CALLBACK",
						page: this.page
					}

				}).then(function(data) {
					this.loading = false
					console.log(this.page)
					console.log(data.data.msg.result)
					this.tvs = this.tvs.concat(data.data.msg.result)

				})
			},
			back: function() {
				window.history.go(-1)
			},
			scroll: function() {

			}

		},
		mounted: function() {
			this.getTv();
			console.log(window.screen)
			this.scroller = this.$el;

		}
	}
</script>
<style type="text/css">
	ul,
	li,
	img {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.tvs {
		margin-top: 60px;
	}
	
	.tv {
		float: left;
		width: 48%;
		padding: 10px 0 0 4%;
	}
	
	.tv img {
		min-height: 85.05px;
		width: 100%;
	}
	
	#title {
		width: 100%;
		height: 60px;
		background: black;
		position: fixed;
		top: 0;
	}
	
	#title b {
		height: 70px;
		line-height: 70px;
	}
	
	.tvs .title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.pastTime {
		float: right;
		color: orangered;
	}
	
	.plays {
		color: orangered;
	}
	
	.tvload {
		overflow: auto;
		height: 667px;
		-webkit-overflow-scrolling: touch;
	}
</style>