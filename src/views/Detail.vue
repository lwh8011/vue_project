<template>
	<div class="detail" v-if="selectGood">
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
		<!-- 产品价格end -->
		<!-- 产品参数 -->
		<div class="param" @click="select" v-if="selectGood.goodsDetail.goodsPriceDetail.attr[0]">
			<div class="left">
				<div class="dote"></div>
				<div class="select">
					<span>已选</span>
					<span v-if="selectGood.goodsDetail.goodsPriceDetail.attr[1]">
					"{{selectGood.goodsDetail.goodsPriceDetail.attr[0].list[0].name}},
					{{selectGood.goodsDetail.goodsPriceDetail.attr[1].list[0].name}}"</span>
					<span v-else>"{{selectGood.goodsDetail.goodsPriceDetail.attr[0].list[0].name}}"</span>
				</div>
			</div>
			<van-icon name="arrow" />
		</div>
		<!-- 产品参数end -->
		<!-- 品牌 -->
		<div class="brand">
			<div class="left">
				<img :src="selectGood.brandImage" alt="">
				<div class="text">
					<p>{{selectGood.brandName}}</p>
					<span>在售商品{{selectGood.brandGoodsCount}}个</span>
				</div>
			</div>
			<van-button size="small" color="#bb361f" plain>进入品牌</van-button>
		</div>
		<!-- 品牌end -->
		<!-- 配送及关税 -->
		<div class="type">
			<p>{{selectGood.goodsDetail.typeName}}</p>
			<div class="box"v-for="(item,index) in selectGood.goodsDetail.type">
				<div class="left">
					{{item.name}}：
				</div>
				<div class="right">
					{{item.content}}
				</div>
			</div>
		</div>
		<!-- 配送及关税end -->
		<van-sku
		  v-model="show"
		  style="text-align: start;"
		  :sku="sku"
		  :goods="goods"
		  :goods-id="selectGood.id"
		  :hide-stock="sku.hide_stock"
		  @sku-selected="onSkuSelect"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked">
		</van-sku>
		<van-goods-action>
		<van-goods-action-icon icon="service-o" text="客服"  @click="onClickService" />
		  <van-goods-action-icon icon="like-o" text="收藏"  @click="onClickLike" />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart" />
		  <van-goods-action-button
		    type="warning"
		    text="加入购物车"
		    @click="AddCartClicked"
		  />
		  <van-goods-action-button
		      type="danger"
		      text="立即购买"
		      @click="onBuyClicked"
		    />
		</van-goods-action>
	</div>
</template>

<script>
	import {details} from '../data/detail.js'
	export default{
		data(){
			return{
				selectGood:null,
				show:false,
				sku: {
					  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
					  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
					  tree: [
						// {
						//   k: '规格', // skuKeyName：规格类目名称
						//   v: [
						// 	{
						// 	  id: '15923', // skuValueId：规格值 id
						// 	  name: '1件装', // skuValueName：规格值名称
						// 	}
						//   ],
						//   k_s: 's4' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
						// },
						// {
						//   k: '有效期至', // skuKeyName：规格类目名称
						//   v: [
						// 	{
						// 	  id: '16630', // skuValueId：规格值 id
						// 	  name: '2021-11', // skuValueName：规格值名称
						// 	}
						//   ],
						//   k_s: 's8' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
						// }
					  ],
					  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
					  list: [
						// {
						//   id: 1184028505088724994, // skuId，下单时后端需要
						//   price: 133.00*100, // 价格（单位分）
						//   s4: '15923', // 规格类目 k_s 为 s1 的对应规格值 id
						//   s8: '16630', // 规格类目 k_s 为 s2 的对应规格值 id
						//   stock_num: 110 // 当前 sku 组合对应的库存
						// }
					  ],
					  price: '0.00', // 默认价格（单位元）
					  hide_stock: true,
				  },
				goods: {
					picture: ''
				  },
				messageConfig: {
						 
				 },
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickRight(){
				this.$router.push("/")
			},
			onClickService(){
				this.$toast('点击了客服')
			},
			onClickLike(){
				this.$toast('点击了收藏')
			},
			onClickCart(){
				this.$router.push("/cart")
			},
			onBuyClicked(good){
				this.$toast('点击了购买')
			},
			onAddCartClicked(good){
				// console.log("=====",good)
				this.$store.dispatch("addGoodAsync",{
					goodid:this.selectGood.id,
					skuid:this.selectGood.id,
					name:this.selectGood.brandName,
					price:this.selectGood.salePrice,
					desc:this.selectGood.name,
					image:this.selectGood.goodsDetail.imgs[0],
					num:good.selectedNum
				}).then(()=>{
					this.$toast('成功加入购物车'); 
				})
			},
			AddCartClicked(){
				this.$store.dispatch("addGoodAsync",{
					goodid:this.selectGood.id,
					skuid:this.selectGood.id,
					name:this.selectGood.brandName,
					price:this.selectGood.salePrice,
					desc:this.selectGood.name,
					image:this.selectGood.goodsDetail.imgs[0],
					num:1
				}).then(()=>{
					this.$toast('成功加入购物车'); 
				})
			},
			onSkuSelect(good){
				console.log("======",good)
				// if(good.selectedSkuComb){
				// 	if(this.selectGood.id==good.selectedSkuComb.id){
						
				// 	}
				// }
			},
			select(){
				this.show = true;
			}
		},
		created(){
			// console.log(details)
			details.forEach((item,index)=>{
				if(item.data.id==this.$route.params.id){
					this.selectGood = item.data
					this.goods.picture = this.selectGood.goodsDetail.imgs[0]
					//初始化sku tree规格参数
					if(this.selectGood.goodsDetail.goodsPriceDetail.attr){
						this.selectGood.goodsDetail.goodsPriceDetail.attr.forEach(cat=>{
							console.log(cat)
							let lists = [];
							cat.list.forEach(prop=>{
								lists.push({
									id:prop.code,
									name:prop.name
								})
							})
							this.sku.tree.push({
								k:cat.name,
								v:lists,
								k_s:`s${cat.typeId}`
							})
						})
						//初始化sku list规格商品列表
						let product = {
							id:this.selectGood.id,
							price:this.selectGood.salePrice*100,
							stock_num:Math.floor(this.selectGood.brandGoodsCount)
						}
						this.selectGood.goodsDetail.goodsPriceDetail.attr.forEach(brand=>{
							brand.list.forEach(att=>{
								product['s'+brand.typeId] = att.code
							})
						})
						this.sku.list.push(product)
					}
					
				}
			})
			// console.log(this.selectGood)
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.detail{
		padding-bottom: 50px;
		background-color: #F4F4F4;
		.gallery{
			img{
				width: 100%;
			}
		}
		.much{
			padding: 20px 0 20px 20px;
			background-color: #fff;
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
			padding: 10px 0;
			background-color: #fff;
			font-size: 14px;
			color: #333;
			text-indent: 0.2rem;
		}
		.param{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px;
			margin: 10px 0;
			background-color: #fff;
			.left{
				display: flex;
				align-items: center;
				.dote{
					width: 24px;
					height: 24px;
					background-color: #f00;
					border-radius: 50%;
				}
				.select{
					margin-left: 30px;
					span:nth-child(1){
						color: #999;
						font-size: 15px;
					}
					span:nth-child(2){
						color: #333;
						font-size: 16px;
					}
				}
			}
		}
		.brand{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px;
			margin: 10px 0;
			background-color: #fff;
			.left{
				display: flex;
				align-items: center;
				img{
					width: 68px;
					height: 65px;
				}
				.text{
					margin-left: 15px;
					text-align: start;
					p{
						margin: 0;
						font-size: 16px;
						color: #333;
					}
					span{
						margin: 0;
						font-size: 14px;
						color: #999;
					}
				}
			}
		}
		.type{
			margin: 10px 0;
			padding: 15px 20px 20px 10px ;
			text-align: start;
			background-color: #fff;
			p{
				font-size: 16px;
				color: #313131;
			}
			.box{
				display: flex;
				margin-top: 10px;
				font-size: 15px;
				color: #595959;
				.left{
					width: 20%;
				}
				.right{
					width: 80%;
				}
			}
		}
	}
</style>
