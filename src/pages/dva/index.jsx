/**
 * 1.创建ui组件
 * 2.创建model
 * 3.将ui组件和model进行连接
 */

import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';

function index(props) {
  console.log(props);

  const { dispatch } = props;

  // const { tagsList } = props.tags
  const list = props.tags.tagsList.list || [];

  // console.log(tagsList)
  // console.log(tagsList.length)
  console.log(list);

  const getData = () => {
    // 使用model，获取数据
    dispatch({
      type: 'tags/fetchTags', // model的命名空间 / 方法
      payload: null,
    });
  };

  return (
    <div>
      dva的使用
      <Button onClick={getData}>获取列表数据</Button>
      {/* {
        tagsList.length == 0
        ?
        <p>暂无数据</p>
        :
        tagsList.list.map((item, index) => {
          return (
            <p key={index}>{item.name}</p>
          )
        })
      } */}
      {list.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
    </div>
  );
}

export default connect(({ tags }) => ({ tags }))(index);
// export default connect()(index)
