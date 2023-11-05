import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { stuGet, stuDel } from '@/api/stu';
import { useRequest } from 'umi';

// const data = [ //测试数据，非响应式
//   {
//     key: '1',
//     name: 'John Brown',
//     score:100,
//     city:'重庆',
//     time:'2022-10-10'
//   }
// ];

export default function StuList() {
  // let [data,setData] = useState([])
  // let [loading,setLoading] = useState(true)
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '分数',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '生日',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="primary" size="small">
            编辑
          </Button>
          <Button
            type="primary"
            size="small"
            danger
            onClick={() => {
              console.log(text, record, index);
              stuDel(record.objectId).then((res) => {
                //删除线上
                data.splice(index, 1); //更新线下
                console.log(data);
                setData([...data]);
              });
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  // useEffect(()=>{
  //   // 方法1:需要开发者自行处理loading等请求交互效果
  //   //开启loading
  //   // stuGet().then(res=>{
  //   //   // console.log(res);
  //   //   //关闭loading
  //   //   setData(res.results)
  //   //   setLoading(false)
  //   // })

  // },[])

  // 方法2:采用useRequest简化异步请求交互操作，不在拦截器中处理
  // const {data,loading,error} = useRequest(async()=>{
  //   let res = await stuGet() //{results:[]}
  //   return {data:res.results}
  // })
  //data是后端响应的数据包 ,默认情况下要求格式必须是: {data:[]}
  //loading 异步请求状态
  //error 异步请求失败的返回结果

  // 方法3: 简化useRquest的使用，需要在app.js拦截器中提前统一处理
  const { data, loading, error } = useRequest(stuGet);
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey="objectId"
    />
  );
}
