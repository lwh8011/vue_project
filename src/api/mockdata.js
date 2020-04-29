import mock from 'mockjs'
mock.mock('https://3g.baobeigezi.com/index/search.php',function(){
	let result = [];
	for(let i = 0;i<(Math.floor(Math.random()*20)+5);i++){
		let obj={
			img:mock.Random.image('190x180'),
			name:mock.Random.ctitle(),
			desc:mock.Random.ctitle(20),
			price:mock.Random.float(60, 100)
		}
		result.push(obj);
	}
	return result;
})
//模拟短信发送接口
mock.mock("http://520mg.com/mi/sms.php",function(){
	let result = {
		"code":0,
		"result":"ok"
	}
	return result
})
//模拟详情数据
mock.mock('https://3g.baobeigezi.com/index/product.php',function(){
	let result = {
		"code":0,
		"data":[
			{"state":true,"code":"20000","data":{"id":"1151400328340443138","code":"GO321058122393","name":"【保税仓】HiPP 喜宝 有机益生菌奶粉 PRE段 600克 0-6个月适用【保税仓】","type":"3","status":"1","enName":"【保税仓】HiPP 喜宝 有机益生菌奶粉 PRE段 600克 0-6个月适用（包邮包税）","title":"","slogan":"","remark":null,"unit":"个","brandId":"1138348049144221697","brandName":"HiPP喜宝","brandImage":"http://id.baoimg.net/share-img/photo/201903/5c871b8c2b989.jpg","brandGoodsCount":"32","marketPrice":"199.00","salePrice":"110.00","netWeight":"0","saleType":"1","channel":"1","taxRate":"0.00","goodsDiffrencePriceTop":null,"activityId":null,"activitySkuId":null,"goodsDetail":{"imgs":["http://id.baoimg.net/share-img/photo/201905/5cd8f4326550e.jpg"],"country":"https://imagespro.baobeigezi.com/bbgz2019/brand-image/5b68cb73-bdc0-4913-a465-027d781cb6e8.png","goodsPriceDetail":{"depict":"<p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722175280725.jpg\" title=\"1557722175280725.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722175863167.jpg\" title=\"1557722175863167.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176999629.jpg\" title=\"1557722176999629.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176769632.jpg\" title=\"1557722176769632.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176991797.jpg\" title=\"1557722176991797.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176467693.jpg\" title=\"1557722176467693.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176288846.jpg\" title=\"1557722176288846.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176399138.jpg\" title=\"1557722176399138.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176666696.jpg\" title=\"1557722176666696.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176858094.jpg\" title=\"1557722176858094.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176511649.jpg\" title=\"1557722176511649.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722176437791.jpg\" title=\"1557722176437791.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722177816741.jpg\" title=\"1557722177816741.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722177182721.jpg\" title=\"1557722177182721.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722177119594.jpg\" title=\"1557722177119594.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722177933844.jpg\" title=\"1557722177933844.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722177621439.jpg\" title=\"1557722177621439.jpg\"/></p><p><img src=\"http://id.baoimg.net/share-img/ueditor/upload/images/20190513/1557722177690134.jpg\" title=\"1557722177690134.jpg\"/></p><p><br/></p>","skuList":[{"marketPrice":"1043.00","code":"1000048831","IsDLB":"0","id":"1190277498789695489","attr":"1187596415598071810,1187596832335728642","goodsNum":"459","skuId":"1190277498789695489","attrName":"6盒装,2021年05月","image":"http://id.baoimg.net/share-img/photo/201905/5cd8f4326550e.jpg","salePrice":"693.45","end_time":"2020-04-28 14:51:10","start_time":"2020-04-28 14:51:10","distributionPrice":"693.45","purchase_price":"641.49","maximum":"459","activityType":"0","minimum":"1","goods_num_lock":"0","status":"1"}],"attr":[{"name":"规格","typeId":"4","list":[{"createTime":"2019-10-25 13:07:04","createBy":"houniao_system","updateTime":"2019-10-25 13:07:04","updateBy":null,"deleted":"0","deleteBy":null,"deleteTime":null,"version":"1","id":"1187596415598071810","name":"6盒装","value":null,"type":"4","code":"20000","sort":"30000","comments":"houniao_system"}]},{"name":"有效期至","typeId":"8","list":[{"createTime":"2019-10-25 13:08:44","createBy":"houniao_system","updateTime":"2019-10-25 13:08:44","updateBy":null,"deleted":"0","deleteBy":null,"deleteTime":null,"version":"1","id":"1187596832335728642","name":"2021年05月","value":null,"type":"8","code":"20000","sort":"30000","comments":"houniao_system"}]}]},"typeName":"配送及关税","type":[{"name":"发货时间","content":"2-4个工作日内发货，物流信息以物流公司为准。偏远地区不支持发货，如有问题请联系客服。（注：保税区每人/相同地址，每日仅限三单，如超出海关个人行邮购买数量，次日发货或退货。）"},{"name":"运费结算","content":"包邮"},{"name":"关税说明","content":"个人邮寄进境物品海关依法征收进口税"},{"name":"其        他","content":"所有到货周期根据客户签收地而异"}]},"version":"6","storeGoods":"2","tagImages":"","skuItemAttributeNameVOS":null},"message":"查询商品成功","token":null},
			{"state":true,"code":"20000","data":{"id":"1184028505088724994","code":"GO321055141693","name":"【保税仓直邮】GOO.N/大王 维E系列拉拉裤  M76","type":"3","status":"1","enName":"","title":"","slogan":null,"remark":null,"unit":"1件装","brandId":"1138347945230340098","brandName":"Goo.N 大王","brandImage":"https://imagespro.baobeigezi.com/bbgz2019/brand-image/a600da94-ef27-414c-a68a-a919a012700c.jpg","brandGoodsCount":"22","marketPrice":"189.00","salePrice":"133.00","netWeight":"0","saleType":"1","channel":"1","taxRate":"0.09","goodsDiffrencePriceTop":null,"activityId":null,"activitySkuId":null,"goodsDetail":{"imgs":["https://imagespro.baobeigezi.com/nisu/main/67422f93eeddb173597e1e41875dd73e.jpg"],"country":"https://imagespro.baobeigezi.com/bbgz2019/brand-image/c599c10b-1bde-4907-86b5-2bcba0d89c07.png","goodsLove":"0","goodsPriceDetail":{"depict":"<p><img src=\"http://imagespro.baobeigezi.com/nisu/detail/969d0d69f2af49d3ac0a741a05697089.jpg\" style=\"\" title=\"969d0d69f2af49d3ac0a741a05697089.jpg\"/></p><p><img src=\"http://imagespro.baobeigezi.com/nisu/detail/906302430b8672ea3a7e48736a670cc6.jpg\" style=\"\" title=\"906302430b8672ea3a7e48736a670cc6.jpg\"/></p><p><img src=\"http://imagespro.baobeigezi.com/nisu/detail/4a0517906beb9d66959e625b26d51349.jpg\" style=\"\" title=\"4a0517906beb9d66959e625b26d51349.jpg\"/></p><p><img src=\"http://imagespro.baobeigezi.com/nisu/detail/60cc065f4cd50d02bea024fb4a3a5406.jpg\" style=\"\" title=\"60cc065f4cd50d02bea024fb4a3a5406.jpg\"/></p><p><img src=\"http://imagespro.baobeigezi.com/nisu/detail/55b89f139a5a66510b6156d02a51eb79.jpg\" style=\"\" title=\"55b89f139a5a66510b6156d02a51eb79.jpg\"/></p><p><img src=\"http://imagespro.baobeigezi.com/nisu/detail/416813e4ab25bb895361189658e1d055.jpg\" style=\"\" title=\"416813e4ab25bb895361189658e1d055.jpg\"/></p>","skuList":[{"image":"https://imagespro.baobeigezi.com/nisu/main/67422f93eeddb173597e1e41875dd73e.jpg","marketPrice":"189.00","code":"1000033623","salePrice":"133.00","end_time":"2020-04-28 15:04:02","IsDLB":"0","start_time":"2020-04-28 15:04:02","distributionPrice":"133.00","purchase_price":"125.53","maximum":"10","id":"1184028507991183361","activityType":"0","attr":"1184020661467615234,1186456910937722882","goodsNum":"1075","minimum":"1","goods_num_lock":"0","skuId":"1184028507991183361","attrName":"1件装,2021-11","status":"1"}],"attr":[{"name":"规格","typeId":"4","list":[{"createTime":"2019-10-15 16:18:18","createBy":"nisu","updateTime":"2019-10-15 16:18:18","updateBy":null,"deleted":"0","deleteBy":null,"deleteTime":null,"version":"1","id":"1184020661467615234","name":"1件装","value":null,"type":"4","code":"15923","sort":"0","comments":null}]},{"name":"有效期至","typeId":"8","list":[{"createTime":"2019-10-22 09:39:05","createBy":"nisuAttribute","updateTime":"2019-10-22 09:39:05","updateBy":null,"deleted":"0","deleteBy":null,"deleteTime":null,"version":"1","id":"1186456910937722882","name":"2021-11","value":null,"type":"8","code":"16630","sort":"0","comments":null}]}]},"typeName":"配送及关税","cartCount":"2","type":[{"name":"发货时间","content":"2-4个工作日内发货，物流信息以物流公司为准。偏远地区不支持发货，如有问题请联系客服。（注：保税区每人/相同地址，每日仅限三单，如超出海关个人行邮购买数量，次日发货或退货。）"},{"name":"运费结算","content":"包邮"},{"name":"关税说明","content":"个人邮寄进境物品海关依法征收进口税"},{"name":"其        他","content":"所有到货周期根据客户签收地而异"}]},"version":"1","storeGoods":"2","tagImages":"","skuItemAttributeNameVOS":null},"message":"查询商品成功","token":null},
			
		],
		"result":"ok"
	}
	return result
})





//模拟登录接口
mock.mock('https://3g.baobeigezi.com/index/login.php',function(){
	let result = {
		"code":0,
		"result":"ok"
	}
	return result
})
//模拟注册接口
mock.mock('https://3g.baobeigezi.com/index/regist.php',function(){
	let result = {
		"code":0,
		"result":"ok"
	}
	return result
})

export {mock}