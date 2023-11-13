import React from 'react';
import { Button } from 'antd';

export default function one(props) {
  console.log(props);
  return (
    <div>
      User Page One
      <Button
        onClick={() => {
          props.history.push('/');
        }}
      >
        点击回到首页
      </Button>
    </div>
  );
}
