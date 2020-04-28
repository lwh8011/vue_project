<template>
	<div class="regist">
		<div class="logo">
		</div>
		<div class="loginform">
			<div class="user">
				<img src="../assets/images/phone.png" alt="">
				<input type="text" name="user" v-model="username" placeholder="请设置手机号/用户名">
			</div>
			<div class="pwd">
				<img src="../assets/images/imgCheck.png" alt="">
				<input type="password" name="password" v-model="password1" placeholder="请设置密码">
			</div>
			<div class="pwd">
				<img src="../assets/images/imgCheck.png" alt="">
				<input type="password" name="password" v-model="password2" placeholder="确认密码">
			</div>
			<span>已有账户？去<router-link to="/login">登录</router-link></span>
			<button @click="regist">注册</button>
		</div>
		<div class="skip" @click="goReturn"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:"",
				password1:"",
				password2:""
			}
		},
		methods:{
			goReturn(){
				this.$router.push("/")
			},
			regist(){
				this.$api.registAPI({
					username:this.username,
					password:this.password1
				}).then(res=>{
					if(res.data.code==0){
						this.$router.push("/login")
					}
				}).catch(err=>{
					console.log("注册失败！")
				})
			}
		}
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
	.regist{
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
		.loginform{
			padding: 60px 35px 0;
			.user,.pwd{
				display: flex;
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
			span{
				float: right;
				margin-right: 20px;
				margin-top: 20px;
				color: #fff;
				a{
					color: #FF5809;
				}
			}
			button{
				width: 100%;
				height: 0.88rem;
				margin-top: 40px;
				font-size: 0.3rem;
				background-color: #fff;
				border: none;
				outline: none;
				border-radius: 8px;
			}
		}
		.skip{
			width: 1.3rem;
			height: 0.48rem;
			margin: 150px auto 0;
			background: url(../assets/images/loginquit.png) no-repeat;
			background-size: 100%;
		}
	}
</style>
