<template>
	<div class="hometable">
		<div v-for="(good,index) in goods">
			<!-- 轮播 -->
			<div v-if="good.positionCode=='P12T1'">
				<van-swipe :autoplay="3000">
				  <van-swipe-item v-for="(image, index2) in good.positionList" :key="index2">
				    <img :style="{width:'350px',height:'140px'}" v-lazy="image.bigImage" />
				  </van-swipe-item>
				</van-swipe>
			</div>
			<!-- 轮播end -->
			<!-- 图文链接 -->
			<div v-else-if="good.positionCode=='P12T2'" class="banner">
				<div class="pic" v-for="item in good.positionList">
					<img :src="item.bigImage" alt="">
					<span>{{item.advTitle}}</span>
				</div>
				
			</div>
			<!-- 图文链接end -->
			<!-- 新人超值专享 -->
			<div v-else-if="good.positionCode=='P12T3'" class="news">
				<a href="#" class="news-top">
					<span>新人超值专享</span>
				</a>
				<div class="news-con">
					<div v-for="(item,index) in good.positionList" class="box">
						<div class="top">
							<span>{{item.advTitle}}</span>
							<span>{{item.advDescribes}}</span>
						</div>
						<div class="bottom">
							<a href="#" v-for="(pic,index) in item.productList">
								<img :src="pic.goodsImage" alt="">
								<span>¥{{pic.salePrice}}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div v-else-if="good.positionCode=='P12T4'" class="adver">
				<img v-for="imgs in good.positionList" :src="imgs.bigImage" alt="">
			</div>
			<!-- 新人超值专享end -->
			<!-- 每日拼团 -->
			<!-- <div v-else-if="good.positionCode=='P12T6'">
				<div class="group" v-for="(group,index) in good.positionList">
					<div class="left">
						<img :src="group.goodsImage" alt="">
					</div>
					<div class="right">
						<div class="desc">{{group.goodsName}}</div>
						<div class="hot">已拼{{group.groupBookingCount}}件</div>
						<div class="bottom">
							<div class="price">
								<span>¥{{group.activityPrice}}</span>
								<span>¥{{group.salePrice}}</span>
							</div>
							<div class="btn"></div>
						</div>
					</div>
				</div>
			</div> -->
			<!-- 每日拼团end -->
			<div v-else>
				需要显示一个组件{{good.positionCode}}
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);
	import data from '../data'
	export default{
		data(){
			return{
				goods:null
			}
		},
		created(){
			// console.log(data[0].data.advList)
			this.goods = data[0].data.advList
			console.log(this.goods)
		}
	}
</script>

<style scoped="scoped" lang="less">
	.hometable{	
		.banner{
			display: flex;
			flex-wrap: wrap;
			padding-top: 10px;
			background-color: #fff;
			.pic{
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 20%;
				margin-bottom: 10px;
				img{
					width: 40px;
					height: 40px;
				}
				span{
					font-size: 12px;
					color: #666;
				}
			}
		}
		.news{
			margin: 0 5px;
			background-color: #fff;
			border-radius: 5px;
			.news-top{
				display:block;
				width: 100%;
				font-size: 18px;
				color: #fff;
				height: 0.64rem;
				text-align: start;
				line-height: 0.64rem;
				background:url(../assets/images/newPer.png) no-repeat ;
				background-size: 100%;
				span{
					margin-left: 0.2rem;
				}
			}
			.news-con{
				display: flex;
				.box:nth-child(1){
					border-right: 2px solid #F6F6F6;
				}
				.box{
					width: 50%;
					.top{
						display: flex;
						justify-content: space-between;
						padding-top: 10px;
						span:nth-of-type(1){
							font-size: 14px;
							margin-left: 10px;
						}
						span:nth-of-type(2){
							display: block;
							padding:0 5px;
							font-size: 12px;
							color: #bb361f;
							border-radius: 2px;
							background-color: #ffeceb;
						}
					}
					.bottom{
						display: flex;
						justify-content: space-between;
						padding-bottom: 20px;
						a{
							display: flex;
							flex-direction: column;
							width: 50%;
							img{
								width: 88px;
								height: 88px;
							}
							span{
								font-size: 12px;
								color: #bb361f;
							}
						}
					}
				}
			}
		}
		.adver{
			margin: 0 5px;
			padding:0 10px 10px;
			background-color: #fff;
			img{
				width: 100%;
				border-radius: 10px;
			}
		}
	}
</style>
