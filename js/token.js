var urlList = {
    indexForB: '/skymine/userTask/indexForB', // 任务首页数据
    weekList: '/skymine/userTask/weekList', //B端任务周列表数据
    weekDetail: '/skymine/userTask/weekDetail', //周任务详情数据
}

var links = {
//  produce: 'http://192.168.11.170',
//  produce: 'http://192.168.11.121',
    mine: 'https://lb-mine.cheweiditu.com',
}

var nowLinks = links.produce
var path = {
    mine: nowLinks + ':8018'
}

//var path = {
// mine: links.mine
//}

axios.defaults.headers.post['Content-Type'] = 'application/json';

var indexForB = function(token,fun) {//任务数据
    axios({
        baseURL: path.mine,
        url: urlList.indexForB,
        headers: { 'skytkn' : token },
        method: 'get'
    }).then(function(d){
//		alert(JSON.stringify(d.data))
        fun(d.data)
    })
}

var weekList = function(token,data,fun) {//任务数据
    axios({
        baseURL: path.mine,
        url: urlList.weekList,
        headers: { 'skytkn' : token },
        method: 'get',
        params: data,
    }).then(function(d){
//		alert(JSON.stringify(d.data))
        fun(d.data)
    })
}

var getWeekDetail = function(token,data,fun) {//任务数据
    axios({
        baseURL: path.mine,
        url: urlList.weekDetail,
        headers: { 'skytkn' : token },
        method: 'get',
        params: data,
    }).then(function(d){
//		alert(JSON.stringify(d.data))
        fun(d.data)
    }).catch(function(d){
		alert(JSON.stringify(d))
    })
}