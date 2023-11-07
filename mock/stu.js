import mockjs from 'mockjs'

let datalist = mockjs.mock({
    code:200,
    msg:'学员列表加载成功',
    'data|2':[
        {
            objectId: '@id',
            name: '@cname',
            score: '@integer(80, 100)',
            city: '@city',
            time: '@datetime',
        }
    ]
})

// 提供学员相关逻辑mock接口
export default {
    'GET /classes/test':{
        username: 'test',
        score:100
    },
    'GET /classes/stu': datalist,
    'DELETE /classes/stu': (req, res)=>{
        let {id} = req.query
        for(let i=0; i<datalist.data.length; i++){
            if(datalist.data[i].objectId == id){
                datalist.data.splice(i, 1)
                res.send({
                    code: 200,
                    msg: '删除成功'
                })
                return
            }
        }
        res.send({
            code: 100,
            msg: '未找到对应数据'
        })
    }
}