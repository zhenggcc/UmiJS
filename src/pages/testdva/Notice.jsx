import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { connect } from 'umi';
// let list = [
//   {
//     picture:'https://randomuser.me/api/portraits/women/85.jpg',
//     title:'年终奖预告',
//     desc:'如果坚持上班到年底，将会得到4个月的年终奖'
//   }
// ]

function Notice(props) {
  let handleRead = (idx) => {
    // console.log(idx);
    props.dispatch({
      type: 'notice/readed',
      payload: idx,
    });
  };
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={props.notice.list}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <Button
              onClick={() => {
                handleRead(index);
              }}
              type="primary"
              size="small"
              disabled={item.read}
            >
              {item.read ? '已经阅读' : '尚未阅读'}
            </Button>,
          ]}
        >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.desc}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

export default connect(({ notice }) => ({ notice }))(Notice);
