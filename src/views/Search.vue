<template>
	<div class="search">
		<form action="/">
		  <van-search
		    v-model="value"
			shape="round"
		    show-action
		    @search="onSearch"
		    @cancel="onCancel"
		  />
		</form>
		<!-- 历史搜索 -->
		<div class="history">
			<div class="sear">
				<span>历史搜索</span>
				<van-icon name="delete" @click="Dialog" />
			</div>
			<div class="tag" v-show="show">
				<van-tag v-for="(item,index) in historytags" round size="large" :type="tagtypes[Math.floor(Math.random()*tagtypes.length)]">{{item}}</van-tag>
			</div>
		</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	import { Toast } from 'vant';
	
	export default {
	components: {
		    [Dialog.Component.name]: Dialog.Component,
		  },
	  data() {
	    return {
	      value: '',
		  show:true,
		  historytags:['耳机','奶粉','宝宝用品'],
		  tagtypes:["primary","success","danger","warning"]
	    };
	  },
	  methods: {
		search(text){
			this.historytags.push(text);
			this.$router.push({
				name:"SearchResult",
				query:{
					key:text
				}
			})  
		  },
	    onSearch(val) {
	      if(this.value.length>0){
			  this.search(this.value);
		  }
	    },
	    onCancel() {
	      this.value = ""
	    },
		Dialog(){
			Dialog.confirm({
			  message: '确定要清空搜索历史吗？',
			}).then(() => {
				this.show=false
			}).catch(() => {
				// on cancel
			})
		}
		
	  },
	};
</script>

<style scoped="scoped" lang="less">
	.search{
		.van-cell .van-cell--borderless .van-field{
			background-color: rgba(237,237,237,1);
		}
		.history{
			padding: 30px 10px 20px;
			.sear{
				display: flex;
				justify-content: space-between;
				span{
					font-size: 18px;
					color: #313131;
				}
			}
			.tag{
				margin-top: 20px;
				text-align: start;
				.van-tag{
					margin-left: 10px;
				}
			}
		}
	}
</style>
