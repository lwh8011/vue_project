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


export {mock}