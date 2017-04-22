<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="最新" @click='clickNews'/>
    <mu-tab value="tab2" title="攻略" @click='clickStrategy'/>
    <mu-tab value="tab3" title="官方" @click='clickGm'/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
  </div>
  <div v-if="activeTab === 'tab2'">
  </div>
  <div v-if="activeTab === 'tab3'">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    clickNews:function(){
    	window.location.href='#/index/panel'
    },
     clickGm:function(){
    	window.location.href='#/index/gm'
    },
     clickStrategy:function(){
    	window.location.href='#/index/strategy'
    }
  }
}
</script>
<style>
	.mu-tab-text{
		font-size: 22px;
		font-weight: bold;
	}
</style>