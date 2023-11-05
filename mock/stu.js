//提供学员相关逻辑mock接口
import mockjs from 'mockjs';
let datalist = mockjs.mock({
  code: 200,
  msg: '学员列表加载成功',
  'results|100': [
    {
      'objectId|+1': 1,
      name: '@cname',
      score: '@integer(50,100)',
      city: '@city',
      time: '@date',
    },
  ],
});
export default {
  'GET /classes/test': {
    username: '张三丰',
    score: 100,
  },
  'GET /classes/stu': datalist,
  'DELETE /classes/stu': (req, res) => {
    // console.log(req.query);
    let { id } = req.query;
    // console.log(datalist);
    for (let i = 0; i < datalist.results.length; i++) {
      if (datalist.results[i].objectId == id) {
        // console.log(datalist.data[i].objectId);
        datalist.results.splice(i, 1);
        res.send({
          code: 200,
          msg: '删除成功',
        });
        return;
      }
    }
    res.send({
      code: 100,
      msg: '未找到对应数据',
    });
  },
};
