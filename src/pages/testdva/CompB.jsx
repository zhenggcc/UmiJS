import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'umi';
class CompB extends Component {
  render() {
    console.log('CompB', this.props);
    return (
      <div>
        CompB,{this.props.count}
        <Button
          type="primary"
          onClick={() => {
            this.props.dispatch({
              type: 'count/decrement',
            });
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            this.props.dispatch({
              type: 'count/increment',
              payload: 10,
            });
          }}
        >
          +
        </Button>
      </div>
    );
  }
}

export default connect(({ count }) => ({ count }))(CompB);
