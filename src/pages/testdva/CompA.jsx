import React from 'react';
import { Button } from 'antd';
import { connect } from 'umi';
function CompA(props) {
  console.log('CompA', props);
  return (
    <div>
      CompA,{props.count}
      <Button
        onClick={() => {
          props.dispatch({
            type: 'count/increment',
          });
        }}
      >
        +
      </Button>
      <Button
        type="primary"
        onClick={() => {
          props.dispatch({
            type: 'count/incrementAsync',
          });
        }}
      >
        延迟2s后++
      </Button>
    </div>
  );
}

// export default connect((state)=>{
//   // console.log('CompA获取的状态机数据',state);
//   return {count:state.count}
// })(CompA)

// 简写
export default connect(({ count }) => ({ count }))(CompA);
