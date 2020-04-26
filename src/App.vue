<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
	<van-tabbar v-show="$route.meta.showtabbar" v-model="active" active-color="#333" inactive-color="#999">
	    <van-tabbar-item to="/">
		    <span>首页</span>
		      <template #icon="props">
		        <img :src="props.active ? icon.active : icon.inactive" />
		    </template>
		</van-tabbar-item>
	    <van-tabbar-item to="/category">
		    <span>分类</span>
		    <template #icon="props">
		       <img :src="props.active ? icon.category : icon.incategory" />
		    </template>
		</van-tabbar-item>
	    <van-tabbar-item to="/cart">
		    <span>购物车</span>
		     <template #icon="props">
		        <img :src="props.active ? icon.cart : icon.incart" />
		    </template>
		</van-tabbar-item>
	    <van-tabbar-item to="/mine">
		    <span>我的</span>
		    <template #icon="props">
		        <img :src="props.active ? icon.mine : icon.inmine" />
		    </template>
		</van-tabbar-item>
	</van-tabbar>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				active:0,
				icon:{
					active:require("./assets/images/shouye-s.png"),
					inactive:require("./assets/images/shouye.png"),
					category:require("./assets/images/categorys.png"),
					incategory:require("./assets/images/category.png"),
					cart:require("./assets/images/carts.png"),
					incart:require("./assets/images/cart.png"),
					mine:require("./assets/images/mines.png"),
					inmine:require("./assets/images/mine.png")
				}
			}
		}
	}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
