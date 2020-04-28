<template>
	<div class="detail">
		<van-nav-bar left-arrow  @click-left="onClickLeft"
  @click-right="onClickRight">
			<template #left>
			  <van-icon name="arrow-left" color="#3D3D3D" size="30" />
			</template>
		  <template #right>
		    <van-icon name="wap-home-o" color="#3D3D3D" size="30" />
		  </template>
		</van-nav-bar>
		<!-- 轮播 -->
		<div class="gallery">
			<van-swipe :autoplay="3000" indicator-color="#fff" class="myswipe">
			  <van-swipe-item v-for="(image, index) in selectGood.goodsDetail.imgs" :key="index">
			    <img v-lazy="image" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<!-- 轮播end -->
		<!-- 产品价格 -->
		<div class="much">
			<span>¥{{selectGood.salePrice}}</span>
			<span>¥{{selectGood.marketPrice}}</span>
		</div>
		<!-- 产品价格end -->
		<div class="name">
			{{selectGood.name}}
		</div>
	</div>
</template>

<script>
	import {details} from '../data/detail.js'
	export default{
		data(){
			return{
				goods:null,
				selectGood:null
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickRight(){
				this.$router.push("/")
			}
		},
		created(){
			// console.log(details)
			details.forEach((item,index)=>{
				if(item.data.id==this.$route.params.id){
					this.selectGood = item.data
				}
			})
			console.log(this.selectGood)
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.detail{
		.gallery{
			img{
				width: 100%;
			}
		}
		.much{
			padding: 20px 0 20px 20px;
			border-top: 0.0005rem solid #999;
			border-bottom: 0.0005rem solid #999;
			text-align: start;
			span:nth-child(1){
				font-size: 22px;
				color: #000;
			}
			span:nth-child(2){
				margin-left: 10px;
				text-decoration: line-through;
				font-size: 14px;
				color: #666;
			}
		}
		.name{
			text-align: start;
			padding-top: 10px;
			font-size: 14px;
			color: #333;
			text-indent: 0.2rem;
		}
	}
</style>
