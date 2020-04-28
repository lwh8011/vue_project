<template>
	<div class="hometable">
		<div v-for="(good,index) in goods">
			<!-- 轮播 -->
			<div v-if="good.positionCode=='P12T1'">
				<van-swipe :autoplay="3000">
				  <van-swipe-item v-for="(image, index2) in good.positionList" :key="index2">
				    <img :style="{width:'350px',height:'140px',borderRadius:'8px'}" v-lazy="image.bigImage" />
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
			<!-- 每日精选 -->
			<div v-else-if="good.positionCode=='P12T9'" class="handpick">
				<div class="activity" v-for="(item,index) in good.positionList">
					<div class="top">
						<img :src="item.bigImage" alt="">
					</div>
					<div class="bottom">
						<router-link :to="{name:'Detail',params:{id:pro.id}}" class="product" v-for="(pro,index) in item.productList">
							<img :src="pro.goodsImage" alt="">
							<div class="van-ellipsis">{{pro.name}}</div>
							<div class="del">¥&nbsp;{{pro.markerPrice}}</div>
							<div class="price">¥&nbsp;{{pro.salePrice}}</div>
						</router-link>
					</div>
				</div>
			</div>
			<!-- 每日精选end -->
			<!-- 每日拼团 -->
			<div v-else-if="good.positionCode=='P12T6'" class="groups">
				<div class="base">
					<span>每日拼团</span>
				</div>
				<div class="group" v-for="(group,index) in good.positionList">
					<div class="left">
						<img :src="group.goodsImage" alt="">
					</div>
					<div class="right">
						<div class="desc">{{group.goodsName}}</div>
						<div class="hot">已拼{{group.groupBookingCount}}件</div>
						<div class="bottom">
							<div class="price">
								<span>¥&nbsp;{{group.activityPrice}}</span>
								<span>¥{{group.salePrice}}</span>
							</div>
							<van-button round type="danger" size="mini" color="#bb361f">马上拼团</van-button>
						</div>
					</div>
				</div>
			</div>
			<!-- 每日拼团end -->
			<!-- 广告 -->
			<div v-else-if="good.positionCode=='P12T7'" class="advers">
				<img v-for="img in good.positionList" :src="img.bigImage" alt="">
			</div>
			<!-- 广告end -->
			<!-- 广告四小图 -->
			<div v-else-if="good.positionCode=='P12T8'" class="pics">
				<img v-for="item in good.positionList" :src="item.bigImage" alt="">
			</div>
			<!-- 广告四小图end -->
			<!-- 国家地区馆 -->
			<div v-else-if="good.positionCode=='P12T10'" class="coun">
				<div class="base">
					<span>国家地区馆</span>
				</div>
				<div class="country" v-for="image in good.positionList">
					<img :src="image.bigImage" alt="">
				</div>
			</div>
			<!-- 精选分类 -->
			<div v-else-if="good.positionCode=='P12T11'" class="category clearfixed">
				<div class="base">
					<span>精选分类</span>
				</div>
					<div class="content clearfixed" >
						<div class="left clearfixed" v-for="(item,index) in good.positionList" v-if="index==0">
							<div class="title">
								{{item.advTitle}}
							</div>
							<div class="van-ellipsis">{{item.advDescribes}}</div>
							<img :src="item.bigImage" alt="">
						</div>
							<div class="head clearfixed" v-else-if="index==1">
								<div class="r-left">
									<div class="title">
										{{item.advTitle}}
									</div>
									<div class="van-ellipsis">{{item.advDescribes}}</div>
								</div>
								<img :src="item.bigImage" alt="">
							</div>
							<div class="foot clearfixed" v-else-if="index==2">
								<div class="r-left">
									<div class="title">
										{{item.advTitle}}
									</div>
									<div class="van-ellipsis">{{item.advDescribes}}</div>
								</div>
								<img :src="item.bigImage" alt="">
							</div>
						<div v-else class="ele clearfixed">
								<img :src="item.bigImage" alt="">
								<div class="title">
									{{item.advTitle}}
								</div>
								<div class="van-ellipsis">{{item.advDescribes}}</div>
						</div>
					</div>
			</div>
			<!-- 精选分类end -->
			<!-- 全球榜单 -->
			<div class="total" v-else-if="good.positionCode=='P12T12'">
				<div class="base">
					<span>全球榜单</span>
				</div>
				<div class="global" v-for="(item,index) in good.positionList">
					<div class="one" v-for="(items,index) in item.productList" v-if="index==0">
						<img :src="items.goodsImage" alt="">
						<div class="price">
							<span>¥&nbsp;{{items.salePrice}}</span>&nbsp;
							<span>¥&nbsp;{{items.markerPrice}}</span>
						</div>
					</div>
					<div class="one" v-else-if="index==1">
						<img :src="items.goodsImage" alt="">
						<div class="price">
							<span>¥&nbsp;{{items.salePrice}}</span>&nbsp;
							<span>¥&nbsp;{{items.markerPrice}}</span>
						</div>
					</div>
					<div class="one" v-else-if="index==2">
						<img :src="items.goodsImage" alt="">
						<div class="price">
							<span>¥&nbsp;{{items.salePrice}}</span>&nbsp;
							<span>¥&nbsp;{{items.markerPrice}}</span>
						</div>
					</div>
					<div class="group" v-else>
						<div class="left">
							<img :src="items.goodsImage" alt="">
						</div>
						<div class="right">
							<div class="desc">{{items.name}}</div>
							<div class="bottom">
								<div class="price">
									<span>¥&nbsp;{{items.salePrice}}</span>
									<span>¥{{items.markerPrice}}</span>
								</div>
								<van-button round type="danger" size="mini" color="#bb361f">马上抢</van-button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 全球榜单end -->
			<!-- 热门品牌 -->
			<div class="hot" v-else-if="good.positionCode=='P12T13'">
				<div class="base">
					<span>热门品牌</span>
				</div>
				<div class="hots">
					<div class="brand" v-for="(item,index) in good.positionList">
						<div class="top">
							<img :src="item.bigImage" alt="">
						</div>
						<div class="con">
							<div class="con-t">
								<div class="left">
									<img :src="item.brandLogoImage" alt="">
								</div>
								<div class="right">
									<div class="title">
										<span>{{item.advTitle}}</span>
										<van-button round type="danger" style="color: #fff;" size="mini">进入专场&gt;</van-button>
									</div>
									<div class="van-ellipsis">{{item.advDescribes}}</div>
								</div>
							</div>
							<div class="con-f">
								<div class="box" v-for="(ele,index) in item.productList">
									<img :src="ele.goodsImage" alt="">
									<div class="van-ellipsis">{{ele.name}}</div>
									<div class="price">
										¥&nbsp;{{ele.salePrice}}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<!-- 热门品牌end -->
			<!-- 首页品牌列表 -->
			<div v-else-if="good.positionCode=='P12T14'" class="pro-list">
				<div class="list" v-for="(item,index) in good.positionList">
					<img :src="item.bigImage" alt="">
					<div class="bg"></div>
					<img :src="item.brandLogoImage" alt="" class="pic">
					<div class="txt">{{item.advTitle}}</div>
				</div>
			</div>
			<!-- 首页品牌列表end -->
			<!-- 广告 -->
			<div v-else-if="good.positionCode=='P12T15'" class="advers">
				<img v-for="img in good.positionList" :src="img.bigImage" alt="">
			</div>
			<!-- 广告end -->
			<!-- 育儿百科 -->
			<div class="ency" v-else-if="good.positionCode=='P12T17'">
				<div class="base">
					<span>育儿百科</span>
				</div>
				<div class="son" v-for="(item,index) in good.positionList">
					<img :src="item.bigImage" alt="">
				</div>
			</div>
			<!-- 育儿百科end -->
			<!-- 育儿频道首页文章 -->
			<div class="article" v-else-if="good.positionCode=='P12T18'">
				<div class="articles" v-for="(item,index) in good.positionList">
					<div class="left">
						<img :src="item.bigImage" alt="">
					</div>
					<div class="right">
						<div class="van-ellipsis">{{item.advTitle}}</div>
						<div class="desc">{{item.cmsArticleKeyword}}</div>
						<div class="comment">
							<div class="zan">
								<img src="../assets/images/zan.png" alt="">
								<span>&nbsp;{{item.voteCount}}</span>
							</div>
							<div class="look">
								<img src="../assets/images/watchIcon.png" alt="">
								<span>&nbsp;{{item.viewCount}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 育儿频道首页文章end -->
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
			// console.log(this.goods)
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.clearfixed:after{
		display: table;
		content: "";
		clear: both;
	}
	.hometable{	
		padding-bottom: 50px;
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
			margin: 10px 5px 0;
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
							justify-content: center;
							align-items: center;
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
		.groups{
			margin: 0 5px;
			
			.group{
				display: flex;
				width: 100%;
				padding: 10px;
				background-color: #fff;
				border-bottom: 1px solid #f2ecfe;
				.left{
					width: 35%;
					text-align: center;
					img{
						width: 110px;
						height: 110px;
						vertical-align: middle;
					}
				}
				.right{
					width: 65%;
					.desc{
						font-size: 14px;
						color: #333;
						text-align: start;
					}
					.hot{
						width: 2.02rem;
						height: 0.5rem;
						padding-left: 0.4rem;
						color: #fff;
						line-height: 0.65rem;
						background: url(../assets/images/ypBg.png) no-repeat;
						background-size: 100%;
						font-size: 0.22rem;
						margin-bottom: 10px;
					}
					.bottom{
						display: flex;
						justify-content: space-between;
						.price{
							span:nth-child(1){
								color:#bb361f;
								font-size: 14px;
								margin-right: 10px;
							}
							span:nth-child(2){
								color:#999;
								font-size: 12px;
								text-decoration: line-through;
							}
						}
						.van-button{
							width: 1.26rem;
						}
					}
				}
			}
		}
		.advers{
			margin: 10px 5px 0;
			img{
				width: 100%;
				border-radius: 8px;
			}
		}
		.pics{
			margin: 0 5px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			img{
				width: 49%;
				margin-top: 5px;
				border-radius: 8px;
			}
		}
		.handpick{
			margin: 10px 5px 0;
			.activity{
				margin-top: 10px;
				.top{
					img{
						width: 100%;
						border-radius: 8px 8px 0 0;
					}
				}
				.bottom{
					display: flex;
					background-color: #fff;
					white-space: nowrap;
					overflow: scroll;
					border-radius: 0 0 8px 8px;
					.product{
						width: 100px;
						padding-bottom: 10px;
						border-right: 1px solid #e5e5e5;
						text-align: center;
						img{
							width: 95px;
							height: 95px;
							vertical-align: middle;
						}
						.van-ellipsis{
							font-size: 12px;
							color: #313131;
							margin-bottom: 10px;
						}
						.del{
							font-size: 12px;
							color: #999;
							text-decoration: line-through;
						}
						.price{
							font-size: 12px;
							color: #bb361f;
						}
					}
				}
				.bottom::-webkit-scrollbar{
					display: none;
				}
			}
		}
		.base{
			margin: 0 5px;
			height: 0.84rem;
			line-height: 0.84rem;
			text-align: start;
			span{
				margin-left: 5px;
				font-size: 19px;
				color: #313131;
			}
			
		}
		.category{
			margin: 0 5px;
			.content{
				position: relative;
				padding-top: 175px;
				overflow: hidden;
				.left{
					position: absolute;
					top: 0;
					left: 0;
					width:48%;
					padding-bottom: 5px;
					background-color: #fff;
					border-radius: 8px;
					img{
						width: 75px;
						height: 75px;
						margin: 10px 0;
					}
				}
				.head{
					position: absolute;
					left: 50%;
					top: 0;
					display: flex;
					justify-content: space-around;
					padding-bottom: 20px;
					border-radius: 8px;
					width: 48%;
					background-color: #fff;
					img{
						width: 54px;
						height: 54px;
					}
				}
				.foot{
					position: absolute;
					left: 50%;
					right: 0;
					top: 85px;
					display: flex;
					justify-content: space-around;
					padding-bottom: 20px;
					border-radius: 8px;
					width: 48%;
					background-color: #fff;
					img{
						width: 54px;
						height: 54px;
					}
				}
				.title{
					margin-top: 17px;
					font-size: 14px;
					color: #333;
				}
				.van-ellipsis{
					margin: 7px auto 0; 
					width: 1.6rem;
					height: 0.34rem;
					border: 1px solid #BB361F;
					border-radius: 12px;
					font-size: 12px;
					text-align: center;
					color: #bb361f;
				}
				.ele{
					float: left;
					width: 25%;
					padding: 10px 0;
					background-color: #fff;
					img{
						width: 50px;
						height: 50px;
					}
				}
			}
		}
		.coun{
			.country{
				margin: 0 5px;
				padding: 10px;
				background-color: #fff;
				img{
					width: 100%;
					height: 2.74rem;
				}
			}
		}
		.total{
			.global{
				margin: 0 5px;
				background-color: #fff;
				.one{
					float: left;
					width: 33%;
					border-right: 1px solid #e5e5e5;
					img{
						width: 117px;
						height: 117px;
					}
					.price{
						padding-bottom: 10px;
						span:nth-child(1){
							font-size: 12px;
							color: #bb361f;
						}
						span:nth-child(2){
							text-decoration: line-through;
							font-size: 12px;
							color: #999;
						}
					}
				}
				.group{
					display: flex;
					width: 100%;
					padding: 10px;
					border-bottom: 1px solid #f2ecfe;
					.left{
						width: 35%;
						text-align: center;
						img{
							width: 90px;
							height: 90px;
							vertical-align: middle;
						}
					}
					.right{
						width: 65%;
						.desc{
							font-size: 14px;
							color: #333;
							text-align: start;
						}
						.bottom{
							display: flex;
							justify-content: space-between;
							padding-top: 20px;
							.price{
								span:nth-child(1){
									color:#bb361f;
									font-size: 14px;
									margin-right: 10px;
								}
								span:nth-child(2){
									color:#999;
									font-size: 12px;
									text-decoration: line-through;
								}
							}
							.van-button{
								width: 1.26rem;
							}
						}
					}
				}
			}
		}
		.hot{
			.hots{
				display: flex;
				white-space: nowrap;
				overflow-x: scroll;
				.brand{
					margin: 0 5px;
					.top{
						z-index: 1;
						img{
							width: 340px;
							height: 121px;
							border-radius: 0.1rem;
						}
					}
					.con{
						margin: 0 6px;
						transform: translateY(-15px);
						width: 325px;
						z-index: 100;
						background-color: #fff;
						border-radius: 0.1rem;
						.con-t{
							display: flex;
							.left{
								width: 25%;
								img{
									transform: translateY(-10px);
									border-radius: 8px;
									box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
									width: 60px;
									height: 60px;
								}
							}
							.right{
								width: 75%;
								padding-top: 10px;
								padding-right: 20px;
								.title{
									display: flex;
									justify-content: space-between;
									span{
										font-size: 15px;
										color: #333;
									}
									.van-button{
										font-size: 12px;
										color: #fff;
									}
								}
								.van-ellipsis{
									font-size: 13px;
									color: #333;
								}
							}
						}
						.con-f{
							display: flex;
							margin-top: 10px;
							padding-bottom: 20px;
							.box{
								width: 33.3%;
								img{
									width: 97px;
									height: 97px;
								}
								.van-ellipsis{
									font-size: 12px;
									color: #333;
								}
								.price{
									font-size: 12px;
									color: #333;
								}
							}
						}
					}
				}
			}
				.hots::-webkit-scrollbar{
					display: none;
				}
		}
		.pro-list{
			margin: 0 5px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.list{
				position: relative;
				width: 33%;
				img{
					width: 100%;
					border-radius: 8px;
				}
				.pic{
					position: absolute;
					top: 10px;
					left: 35%;
					width: 39px;
					height: 39px;
				}
				.bg{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 90px;
					border-radius: 8px;
					background-color: rgba(0,0,0,0.3);
				}
				.txt{
					position: absolute;
					bottom: 15px;
					width: 100%;
					text-align: center;
					font-size: 12px;
					color: #fff;
				}
			}
		}
		.ency{
			.son{
				margin: 0 5px;
				img{
					width: 100%;
				}
			}
		}
		.article{
			margin: 0 5px;
			.articles{
				display: flex;
				padding: 10px;
				border-top: 1px solid #e4e4e4;
				background-color: #fff;
				.left{
					width: 25%;
					text-align: center;
					img{
						width:77px;
						height: 77px;
						vertical-align: middle;
					}
				}
				.right{
					width: 75%;
					.van-ellipsis{
						font-size: 14px;
						color: #313131;
						text-align: start;
					}
					.desc{
						font-size: 14px;
						color: #999;
						text-align: start;
						margin-top: 5px;
					}
					.comment{
						display: flex;
						margin-top: 13px;
						.zan,.look{	
							img{
								width: 16px;
								height: 16px;
								vertical-align: middle;
							}
							span{
								font-size: 14px;
								color: #999;
							}
						}
						.look{
							margin-left: 10px;
						}
					}
				}
			}
		}
	}
</style>
