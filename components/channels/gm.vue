<template>
	<div class='panel' :style="{height:listHeight-302+'px'}">
		<mu-list>
			<a :href="list.article_url" v-for='list in lists'>
				<mu-list-item :title="list.title" >
					<mu-avatar :src="list.image_url_small" slot="leftAvatar" />
					<span slot="describe">
		        		{{list.summary}}
		      		</span>
				</mu-list-item>
			</a>

			<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getNews()" />
		</mu-list>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				lists: [],
				listHeight: '',
				scroller: null,
				loading: false,
				page:'0'
			}

		},
		methods: {
			getNews: function() {
				this.loading = true;
				this.$http.jsonp('http://localhost:81/vue-lol/list.php', {
					params:{
						callback: 'JSON_CALLBACK',
						page:this.page,
						id:13
					}
					
				}).then(function(data) {
					console.log(data);
					this.page+=1
					this.loading = false;
					this.lists = this.lists.concat(data.data.list);
					/*console.log(this.lists)
					console.log(window.screen);*/
				})
			},

			getClientHeight: function() {
				var self = this;
				this.listHeight = window.screen.height;
				window.addEventListener('resize', function() {
					self.listHeight = window.screen.height;
				})
			}
		},
		mounted: function() {
			console.log(this);

			this.scroller = this.$el;
			this.getNews();
			this.getClientHeight()
		}
	}
</script>
<style type="text/css">
	.panel {
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		min-height: 54.72263%;
	}
	
	.panel img {
		border-radius: 0%!important;
	}
	.panel .mu-item-title{
		color: brown;
	}
	.mu-item-text span{
		color: #666
	}
</style>