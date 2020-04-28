<template>
	<div class="cart">
		<van-nav-bar title="购物车" left-arrow @click-left="onClickLeft">
		  <template #left>
		    <van-icon name="arrow-left" color="#3D3D3D" size="30" />
		  </template>
		  <template #right>
		    <span style="font-size: 18px;">编辑</span>
		  </template>
		</van-nav-bar>
		<div class="content">
			<van-card v-for="(good,index) in $store.getters.getGoodList"
			  :num="good.num"
			  :price="good.price"
			  :title="good.name"
			  :thumb="good.image"
			>
			<div slot="desc" class="van-ellipsis">{{good.desc}}</div>
			  <template #footer>
			    <van-button size="mini" @click="changeNum(good.goodid,good.skuid,good.num-1)" :disabled="good.num<=1">-</van-button>
			    <van-button size="mini" @click="changeNum(good.goodid,good.skuid,good.num+1)">+</van-button>
				<van-button size="mini" @click="remove(good.goodid,good.skuid)">删除</van-button>
			  </template>
			</van-card>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			changeNum(goodid,skuid,num){
				this.$store.dispatch("changeNumAsync",{
					id:goodid,
					skuid:skuid,
					num:num
				}).then(()=>{
					// this.$toast("修改数量成功")
					console.log("修改了商品数量")
				})
			},
			remove(goodid,skuid){
				this.$store.dispatch("removeAsync",{
					id:goodid,
					skuid:skuid
				}).then(()=>{
					this.$toast("删除成功!")
				})
			}
		},
		created(){
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.cart{
		.van-nav-bar{
			background-color: #f2f2f2;
		}
		.content{
			margin:0 0 50px;
			.van-card{
				margin: 10px;
				text-align: left;
				font-size: 14px;
				.van-ellipsis{
					margin-top: 10px;
				}
			}
		}
	}
</style>
