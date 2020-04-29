<template>
	<div class="result">
		<div class="top">
			<van-nav-bar :title="value" left-arrow>
			  <template #left>
				<van-icon name="arrow-left" size="34" @click="goReturn" />&ensp;
				<van-icon name="search" size="30" @click="goSearch" />
			  </template>
			  <template #right>
				<van-icon name="apps-o" size="30" />
			  </template>
			</van-nav-bar>
			<!-- <van-tabbar fixed v-show="show" v-model="actives" active-color="#333" inactive-color="#999">
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
			</van-tabbar> -->
			<van-tabs v-model="active">
			  <van-tab v-for="(item,index) in titles" :key="index">
				<template #title>{{item}}</template>
				<div class="container">
					<div class="product" v-for="(item,index) in datas">
						<img :src="item.img" alt="">
						<div class="van-multi-ellipsis--l2">{{item.desc}}</div>
						<div class="price">¥&nbsp;{{item.price}}</div>
					</div>
				</div>
			  </van-tab>
			</van-tabs>		
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fixed:false,
				show:true,
				active:0,
				value:"",
				titles:['综合','价格','销量','筛选'],
				actives:0,
				datas:[],
				icon:{
					active:require("../assets/images/shouye-s.png"),
					inactive:require("../assets/images/shouye.png"),
					category:require("../assets/images/categorys.png"),
					incategory:require("../assets/images/category.png"),
					cart:require("../assets/images/carts.png"),
					incart:require("../assets/images/cart.png"),
					mine:require("../assets/images/mines.png"),
					inmine:require("../assets/images/mine.png")
				}
			}
		},
		methods:{
			goReturn(){
				this.$router.go(-1)
			},
			goSearch(){
				this.$router.push("/Search")
			}
		},
		created(){
			this.value = this.$route.query.key;
			this.value = this.$route.params.name;
			this.$api.searchAPI({
				key:this.$route.query.key
			}).then(res=>{
				console.log(res.data)
				this.datas = res.data
			}).catch(err=>{
				this.$toast("搜索异常,请重试!")
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.result{
		position: relative;
		.top{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			.container{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				padding: 20px 10px 0;
				background-color: #f6f6f6;
				.product{
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 49%;
					margin-bottom: 10px;
					padding-bottom: 10px;
					border-radius: 8px;
					background-color: #fff;
					img{
						width: 100%;
						border-radius: 8px;
					}
					.van-multi-ellipsis--l2{
						margin-top: 15px;
						padding: 0 10px;
						text-align: start;
						font-size: 14px;
						color: #313131;
					}
					.price{
						width: 100%;
						margin-top: 10px;
						padding: 0 10px;
						text-align: start;
						font-size: 14px;
						color: #313131;
					}
				}
			}
		}
	}
</style>
