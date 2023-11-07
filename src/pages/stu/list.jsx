import { Space, Table, Tag, Button } from 'antd';
import React,{useState,useEffect} from 'react';
import {stuGet, stuDelete} from '@/api/stu'



// const data = [ //测试数据，非响应式
//   {
//     key: '1',
//     name: 'John Brown',
//     score: 89,
//     city: '黄冈',
//     time: '2000-02-01'
//   }
// ];

export default function StuList() {
  let [data,setData] = useState([])
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
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
          <Button type='primary' size='small'>编辑</Button>
          <Button type='primary' danger size='small' onClick={()=>{
            stuDelete(text.objectId).then(res=>{
              data.splice(index, 1);
              setData([...data]);
            })
          }}>删除</Button>
        </Space>
      ),
    },
  ];
  useEffect(()=>{
    stuGet().then(res=>{
      setData(res.data)
    })
  },[])
  return (
    <Table columns={columns} dataSource={data} rowKey='objectId' />
  )
}
