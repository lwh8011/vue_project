<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<van-search
	  v-model="value"
	  shape="round"
	  background="#f6f6f6"
	  placeholder="请输入搜索关键词"
	/>
	<HomeTable></HomeTable>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeTable from '@/components/HomeTable.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
	HomeTable
  },
  data(){
	  return{
		  value:""
	  }
  }
}
</script>
<style scoped="scoped" lang="less">
	.home{
		.van-search__content--round{
			background-color: #fff;
		}
		background-color: #f6f6f6;
	}
</style>