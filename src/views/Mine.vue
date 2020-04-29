<template>
	<div class="mine">
		<div class="top">
			<van-nav-bar left-arrow @click-left="onClickLeft">
				<template #left>
				  <van-icon name="arrow-left" color="#323232" size="30" />
				</template>
			  <template #right>
			    <van-icon name="service-o" color="#323232" size="30" />
			  </template>
			</van-nav-bar>
			<div class="content">
				<div class="left">
					<img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png" alt="">
					<div class="center">
						<p>{{user}}</p>
						<p><img src="../assets/images/phoneFirst.png" alt="">&nbsp;初级会员</p>
					</div>
				</div>
				<van-button round style="background: inherit;" color="#323232" plain size="small" @click="exit">退出登录</van-button>
			</div>
			<div class="box">
				<a href="#"><van-icon color="#323232" name="gold-coin-o" size="30" /><span>余额</span></img></a>
				<a href="#"><van-icon color="#323232" name="coupon-o" size="30" /><span>卡券</span></img></a>
				<a href="#"><van-icon color="#323232" name="like-o" size="30" /><span>种草</span></img></a>
				<a href="#"><van-icon color="#323232" name="location-o" size="30" /><span>收货地址</span></img></a>
			</div>
		</div>
		<div class="container">
			<a href="#" class="myorder">
				<span>我的订单</span>
				<van-icon name="arrow" color="#323232" size="20" />
			</a>
			<div class="list">
				<a href="#"><van-icon color="#323232" name="pending-payment" size="30" /><span>待付款</span></img></a>
				<a href="#"><van-icon color="#323232" name="logistics" size="30" /><span>待发货</span></img></a>
				<a href="#"><van-icon color="#323232" name="send-gift-o" size="30" /><span>待收货</span></img></a>
				<a href="#"><van-icon color="#323232" name="sign" size="30" /><span>已完成</span></img></a>
				<a href="#"><van-icon color="#323232" name="after-sale" size="30" /><span>退款/售后</span></img></a>
			</div>
		</div>
		<div class="myinfo">
			<div class="info">
				<div class="left">
					<van-icon name="phone-circle-o" size="28" style="line-height: inherit;" />
					<span>绑定手机号</span>
				</div>
				<van-icon name="arrow" style="line-height: inherit;" />
			</div>
			<div class="info">
				<div class="left">
					<van-icon name="bag-o" size="28" style="line-height: inherit;" />
					<span>我的拼团</span>
				</div>
				<van-icon name="arrow" style="line-height: inherit;" />
			</div>
			<div class="info">
				<div class="left">
					<van-icon name="service-o" size="28" style="line-height: inherit;" />
					<span>客服帮助</span>
				</div>
				<van-icon name="arrow" style="line-height: inherit;" />
			</div>
			<div class="info">
				<div class="left">
					<van-icon name="user-circle-o" size="28" style="line-height: inherit;" />
					<span>身份证信息</span>
				</div>
				<van-icon name="arrow" style="line-height: inherit;" />
			</div>
			<div class="info">
				<div class="left">
					<van-icon name="lock" size="28" style="line-height: inherit;" />
					<span>支付密码</span>
				</div>
				<van-icon name="arrow" style="line-height: inherit;" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:"",
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			exit(){
				this.$router.push("/");
				this.$JsCookie.remove("username")
			}
		},
		created(){
			this.user = this.$JsCookie.get("username");
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.mine{
		background-color: #F4F4F4;
		padding-bottom: 80px;
		.top{
			width: 100%;
			height: 4.8rem;
			background: url(../assets/images/bg1.png) no-repeat;
			background-position: 100%;
			.van-nav-bar{
				background: inherit;
			}
			.content{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30px;
				padding: 0 15px;
				.left{
					display: flex;
					align-items: center;
					img{
						width: 55px;
						height: 55px;
					}
					.center{
						margin-left: 10px;
						text-align: start;
						p:nth-child(1){
							margin: 5px 0 0;
							line-height: 16px;
							font-size: 16px;
						}
						p:nth-child(2){
							margin: 5px 0 0;
							line-height: 12px;
							font-size: 12px;
							img{
								width: 12px;
								height: 12px;
								vertical-align: middle;
							}
						}
					}
				}
			}
			.box{
				display: flex;
				margin: 30px 15px 0;
				background-color: #fff;
				border-radius: 8px;
				a{
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 25%;
					padding: 16px 0;
					border-right: 1px solid #F8F4FE;
					span{
						margin-top: 16px;
						font-size: 14px;
						color:#323232;
					}
				}
			}
		}
		.container{
			padding: 20px 15px;
			background-color: #fff;
			.myorder{
				display: flex;
				justify-content: space-between;
				span{
					font-size: 14px;
					color:#323232;
				}
			}
			.list{
				display: flex;
				a{
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 20%;
					padding: 16px 0;
					span{
						margin-top: 16px;
						color:#323232;
						font-size: 14px;
					}
				}
			}
		}
		.myinfo{
			margin-top: 20px;
			background-color: #fff;
			.info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 15px 10px;
				border-bottom: 1px solid #F4F4F4;
				.left{
					display: flex;
					align-items: center;
					span{
						margin-left: 20px;
						font-size: 15px;
						color: #313131;
					}
				}
			}
		}
	}
</style>
