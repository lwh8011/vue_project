import axios from 'axios'
//引入mockdata.js
import './mockdata.js'
// 配置默认域名
axios.defaults.baseURL = 'https://3g.baobeigezi.com'
// 搜索
let searchAPI = (data)=>{
	return axios.post("index/search.php",data)
}


export {
	searchAPI
}