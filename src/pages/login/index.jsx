import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

export default function index(props) {
  const loginToHome = () => {
    console.log(props);
    // props.history.push('/')
    history.push('/');
  };
  return (
    <div>
      login page
      <Button onClick={loginToHome}>点击登录</Button>
    </div>
  );
}
