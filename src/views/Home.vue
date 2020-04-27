<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<van-search
	  v-model="value"
	  shape="round"
	  disabled
	  @click="onSearch"
	  background="#f6f6f6"
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
  },
  methods:{
	  onSearch(){
		  this.$router.push("/Search")
	  }
  }
}
</script>
<style scoped="scoped" lang="less">
	.home{
		.van-search__content--round{
			background-color: #fff;
			
		}
		.van-search{
			.van-cell{
				font-size: 24px;
				.van-field__left-icon{
					.van-icon .van-field__left-icon{
					font-size: 24px;
				}
				}
			}
			
		}
		
		background-color: #f6f6f6;
	}
</style>