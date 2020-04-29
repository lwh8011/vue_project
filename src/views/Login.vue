<template>
	<div class="login">
		<div class="logo">	
		</div>
		<div class="tel" v-if="loginType==1">
			<div class="user">
				<img src="../assets/images/phone.png" alt="">
				<input type="number" name="user" v-model="phone" placeholder="请输入手机号">
			</div>
			<div class="pwd1">
				<div class="left">
					<img src="../assets/images/checkCode.png" alt="">
					<input type="number" name="sms" v-model="sms" placeholder="请输入验证码">
				</div>
				<van-button round size="small" @click="sendsms" style="background: inherit;" color="#fff" plain>发送验证码</van-button>
			</div>
			<button class="btn" @click="login(1)">登录</button>
			<button class="btns" @click="changeType(2)">用户名登录</button>
		</div>
		<div class="loginform" v-if="loginType==2">
			<div class="user">
				<img src="../assets/images/phone.png" alt="">
				<input type="text" name="user" v-model="username" placeholder="请输入用户名">
			</div>
			<div class="pwd">
				<img src="../assets/images/imgCheck.png" alt="">
				<input type="password" name="password" v-model="password" placeholder="请输入密码">
			</div>
			<p>没有账户？去<router-link to="/regist">注册</router-link></p>
			<button class="btn" @click="login(2)">登录</button>
			<button class="btns" @click="changeType(1)">手机号登录</button>
		</div>
		<div class="skip" @click="goReturn"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				loginType:1,
				sms:"",
				phone:"",
				username:"",
				password:""
			}
		},
		methods:{
			goReturn(){
				this.$router.push("/")
			},
			sendsms(){
				if(this.phone.length <= 0){
					this.$toast("请输入手机号！")
				}else{
					this.$api.sendSMSAPI({
						tel:this.phone,
						type:"regist"
					}).then(res=>{
						// console.log("收到信息",res.data)
						if(res.data.code==0){
							this.$toast("验证码已发送")
						}
					}).catch(err=>{
						console.log("出错原因",err)
					})
				}
			},
			changeType(type){
				this.loginType = type;
			},
			login(type){
				if(type==1){
					this.$api.loginAPI({
						fmdo:"tel",
						dopost:"login",
						telephone:this.phone,
						sms:this.sms
					}).then(res=>{
						if(res.data.code==0){
							this.$JsCookie.set('username', this.phone, { expires: 7 }) 
							let next = this.$route.query.next
							if(next){
								this.$router.push(next)
							}else{
								this.$router.push("/mine")
							}
						}
					}).catch(err=>{
						console.log("登录失败",err)
					})
				}else if(type==2){
					this.$api.loginAPI({
						fmdo:"loginform",
						dopost:"login",
						username:this.username,
						pwd:this.password
					}).then(res=>{
						if(res.data.code==0){
							this.$JsCookie.set('username', this.username, { expires: 7 }) 
							let next = this.$route.query.next
							if(next){
								this.$router.push(next)
							}else{
								this.$router.push("/mine")
							}
						}
					}).catch(err=>{
						console.log("登录失败",err)
					})
				}
				
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	body{
		width: 100%;
		height: 100%;
		background: url(../assets/images/loginBg.png) no-repeat;
		background-size: 100%;
	}
	.login{
		position: relative;
		width: 100%;
		height: 736px;
		padding-top: 100px;
		background: url(../assets/images/loginBg.png) no-repeat;
		background-size: 100%;
		.logo{
			width: 138px;
			height: 48px;
			margin: 0 auto;
			background: url(../assets/images/logo.png) no-repeat;
			background-size: 100%;
		}
		.loginform,.tel{
			padding: 60px 35px 0;
			.user,.pwd{
				display: flex;
				align-items: center;
				padding: 20px 0;
				border-bottom: 2px solid #fff;
				img{
					width: 14px;
					height: 18px;
					margin-top: 2px;
					vertical-align: bottom;
				}
				input{
					height: 0.4rem;
					line-height: 0.4rem;
					color:white;
					vertical-align: middle;
					margin-left: 20px;
					background: inherit;
					border: none;
					outline: none;
				}
			}
			.pwd1{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20px 0;
				border-bottom: 2px solid #fff;
				.left{
					display: flex;
					align-items: center;
					img{
						width: 14px;
						height: 18px;
						margin-top: 2px;
						vertical-align: bottom;
					}
					input{
						height: 0.4rem;
						line-height: 0.4rem;
						color:white;
						vertical-align: middle;
						margin-left: 20px;
						background: inherit;
						border: none;
						outline: none;
					}
				}
				
			}
			p{
				float: right;
				margin-right: 20px;
				margin-top: 20px;
				color: #fff;
				a{
					color: #FF5809;
				}
			}
			.btn,.btns{
				width: 100%;
				height: 0.88rem;
				margin-top: 30px;
				font-size: 0.3rem;
				background-color: #fff;
				border: none;
				outline: none;
				border-radius: 8px;
			}
			.btns{
				margin-top: 20px;
			}
		}
		.skip{
			position: absolute;
			bottom: 40px;
			left: 40%;
			width: 1.3rem;
			height: 0.48rem;
			margin: auto;
			background: url(../assets/images/loginquit.png) no-repeat;
			background-size: 100%;
		}
	}
</style>
