import mockjs from 'mockjs'

// 提供学员相关逻辑mock接口
export default {
    'GET /classes/test':{
        username: 'test',
        score:100
    },
    'GET /classes/stu':mockjs.mock({
        code:200,
        msg:'学员列表加载成功',
        'data|10':[
            {
                name: '@cname',
                score: '@integer(80, 100)',
                city: '@city',
                time: '@datetime',
            }
        ]
    })
}