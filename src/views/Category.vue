<template>
	<div class="category">
		<div class="top">
			<van-nav-bar left-arrow >
				<van-tabs slot="title" @click="onClickf(1)">
				  <van-tab title="分类" @click="onClickf">  
					</van-tab>
				  <van-tab title="品牌" @click="onClickp"></van-tab>
				</van-tabs>
				<template #left>
				  <van-icon name="arrow-left" color="#323232" size="34" @click="goReturn" />
				</template>
			  <template #right>
			    <van-icon name="search" size="34" color="#323232" @click="goSearch" />
			  </template>
			</van-nav-bar>	
		</div>
			<van-tabs v-model="active" animated sticky v-show="show1">
			  <van-tab v-for="(item,index) in navs" :title="item.name">
			    <div class="group" v-if="active==index" v-for="(data,index) in datas">
					<div class="content" v-for="(list,index) in data.data.categoryList">
						<div class="box">
							<div class="top">
								<img :src="list.image" alt="">
							</div>
							<div class="bottom">
								<router-link :to="{name:'Detail',params:{id:pro.id}}" class="product" v-for="(pro,index) in list.childs">
									<img :src="pro.image" alt="">
									<div class="name">{{pro.name}}</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			  </van-tab>
			</van-tabs>
	</div>
</template>

<script>
	import {cate,category} from '../data'
	export default{
		data(){
			return{
				show1:true,
				show2:false,
				navs:null,
				datas:[],
				active:0
			}
		},
		methods:{
			goReturn(){
				this.$router.go(-1)
			},
			onClickf(a){
				console.log("点击了分类",this)
				this.show1 = true;
				this.show2 = false;
			},
			onClickp(){
				console.log("点击了品牌")
				this.show1 = false;
				this.show2 = true;
			},
			goSearch(){
				this.$router.push("/search")
			}
		},
		created(){
			// console.log(cate[0].data)
			// console.log(category);
			this.navs = cate[0].data;
			this.datas = category;
			console.log(this.datas)
		}
	}
</script>

<style scoped="scoped" lang="less">
	.category{
		position: relative;
		.van-sticky{
			position: fixed;
			top: 100px;
			left: 0;
			right: 0;
		}
		.group{
			padding: 10px 0 50px;
			.content{
				padding-top: 10px;
				.box{
					.top{
						img{
							width: 100%;
						}
					}
					.bottom{
						display: flex;
						flex-wrap: wrap;
						.product{
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 25%;
							padding: 10px 0;
							img{
								width: 1.02rem;
								height: 1.02rem;
							}
							.name{
								font-size: 12px;
								color: #5d5d5d;
							}
						}
					}
				}
			}
		}
	}
</style>
