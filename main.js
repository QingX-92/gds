import Vue from 'vue'; //ES6写法  es5:   Vue=require('vue')

import vueRouter from 'vue-router'; //导入
Vue.use(vueRouter); //引用

import vueResource from 'vue-resource';
Vue.use(vueResource)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import Vuex from 'vuex'
Vue.use(Vuex);

import VueLazyload from 'vue-lazyload'

var stroe = new Vuex.Store({
	state: {
		token: "'DAIWAN-API-TOKEN': '45178-47841-1858F-55485'"
	},
	mutations: {
		setToken: function(state, data) {
			state.token = data
		}
	}
})

Vue.use(VueLazyload, {
	error: 'dist/error.png',
	loading: 'dist/loading.png',
	/* try: 3 // default 1*/
})

import Index from './components/index.vue'
import Panel from './components/channels/panel.vue'
import Hero from './components/hero.vue'
import Zm from './components/channels/zm.vue'
import HeroDetailed from './components/channels/heroDetailed.vue'
import AllHero from './components/channels/allHero.vue'
import Tv from './components/tv.vue'
import Strategy from './components/channels/strategy.vue'
import Gm from './components/channels/gm.vue'
//路由
var router = new vueRouter({
	routes: [{
		path: '/index',
		component: Index,
		children: [{
			path: 'panel',
			component: Panel
		},{
			 path:'strategy',
			 component:Strategy
		},{
			 path:'gm',
			 component:Gm
		}]
	}, {
		path: "/hero",
		component: Hero,
		children: [{
			path: 'zm',
			component: Zm
		}, {
			path: 'allHero',
			component: AllHero
		}]
	},{
		path:'/tv',
		component:Tv
	}, {
		path: '/heroDetailed/:id',
		component: HeroDetailed,
		/*		children:[{
					path:'jn',
					component:
				
				}]*/
	}, {
		//默认是跳转路由 重向点位
		path: "/",
		redirect: '/index/panel'
	}]
})
//过滤器
Vue.filter('my-filter',function(input){
	var time=new Date();
	var t;
	time=Date.parse(time);
	input=Date.parse(input);
	var pastTime=(time-input)/1000/60/60
	if (pastTime>24) {
		t=pastTime/24
		t=Math.floor(input)+'天前'
		
	}else if (pastTime<1) {
		t=Math.floor(pastTime*60)+'分钟前'
	}else if(pastTime>=1&&pastTime<24){
		t=Math.floor(pastTime)+'小时前'
	}
	return t
})

new Vue({
	router: router,
	//store: store
}).$mount('#lol')