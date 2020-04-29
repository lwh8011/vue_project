import JsCookie from 'js-cookie'
import axios from 'axios'
//引入mockdata.js
import './mockdata.js'
// 配置默认域名
axios.defaults.baseURL = 'https://3g.baobeigezi.com'
// 搜索
let searchAPI = (data)=>{
	return axios.post("index/search.php",data)
}
//详情页
let getProductAPI = (data)=>{
	return axios.get("index/product.php",{
		params:{
			id:data.id
		}
	})
}

//发送验证码
let sendSMSAPI = (data)=>{
	return axios.post("index/sms.php",data)
}
//登录
let loginAPI = (data)=>{
	return axios.post("index/login.php",data)
}
//注册
let registAPI = (data)=>{
	return axios.post("index/regist.php",data)
}

export {
	searchAPI,
	loginAPI,
	registAPI,
	getProductAPI,
	sendSMSAPI
}