import React from 'react';
import { Link, NavLink } from 'umi';
import './index.less';
// import styles from './index.less'

export default function index(props) {
  // console.log(styles);
  return (
    <div>
      <h2>Header</h2>
      {/* <Link to='/user/one'>用户1</Link>
      <Link to='/user/two'>用户2</Link> */}

      <hr />

      <NavLink to="/user/one">用户1</NavLink>
      <NavLink to="/user/two">用户2</NavLink>
      {props.children}
      <h2>Footer</h2>
    </div>
  );
}
