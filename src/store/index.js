import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goodList:[
		  {
			  goodid:10000220,
			  skuid:2201100018,
			  name:"HiPP 喜宝",
			  desc:"【香港直邮】HABA 纯湿润柔肤水 G露 180ml",
			  price:191.04,
			  image:"https://imagespro.baobeigezi.com/houniao/images/goods-main/a706fe15195310d2080151531741be9e.jpg",
			  num:1
		  },
		  {
			  goodid:10000220,
			  skuid:1151400328340443138,
			  name:"HABA喜宝",
			  desc:"【保税仓】HiPP 喜宝 有机益生菌奶粉 PRE段 600克 0-6个月适用【保税仓】",
			  price:693.45,
			  image:"http://id.baoimg.net/share-img/photo/201905/5cd8f4326550e.jpg",
			  num:1
		  }
	  ]
  },
  getters:{
	  getGoodList(state){
		  return state.goodList;
	  }
  },
  mutations: {
	  //添加到购物车
	  addGood(state,good){
		  let canAdd = true;
		  state.goodList.forEach((item,index)=>{
			  if(item.goodid==good.id){
				  if(item.skuid==good.id){
					  canAdd=false;
					  item.num+=good.num
				  }
			  }
		  })
		  if(canAdd){
			  state.goodList.push(good)
		  }
	  },
	  //删除商品
	  remove(state,good){
		  let index = -1;
		  state.goodList.forEach((item,i)=>{
			  if(item.goodid==good.id&&item.skuid==good.skuid){
				  index = i;
			  }
		  })
		  if(index>=0){
			  state.goodList.splice(index,1)
		  }
	  },
	  //数量的改变
	  changeNum(state,good){
		  state.goodList.forEach((item,index)=>{
			  if(item.goodid==good.id&&item.skuid==good.skuid){
				  item.num=good.num
			  }
		  })
	  }
  },
  actions: {
	  addGoodAsync(context,good){
		  context.commit("addGood",good)
	  },
	  removeAsync(context,good){
		  context.commit("remove",good)
	  },
	  changeNumAsync(context,good){
		  context.commit("changeNum",good)
	  }
  },
  modules: {
  }
})
