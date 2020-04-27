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
				  <van-icon name="arrow-left" size="34" @click="goReturn" />
				</template>
			  <template #right>
			    <van-icon name="search" size="34" />
			  </template>
			</van-nav-bar>	
		</div>
			<van-tabs v-model="active" animated sticky v-show="show1">
			  <van-tab v-for="(item,index) in navs" :title="item.name">
			    内容 {{ index }}
			  </van-tab>
			</van-tabs>
	</div>
</template>

<script>
	import {cate} from '../data'
	export default{
		data(){
			return{
				show1:true,
				show2:false,
				navs:null,
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
			}
		},
		created(){
			// console.log(cate[0].data)
			this.navs = cate[0].data
		}
	}
</script>

<style scoped="scoped" lang="less">
	.category{
		
		.van-nav-bar__title .van-ellipsis{
			position: relative;
		}
		.van-tabs__content{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 1000px;
		}
	}
</style>
