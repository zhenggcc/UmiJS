import React, { useRef, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import './index.less';
import { init } from 'echarts';
import barOption from './chart-option/bar';
import lineOption from './chart-option/line';
import pie from './chart-option/pie';
import { pieOptionGet } from '../../api/cake';
export default function DashBoard() {
  let barRef = useRef();
  let lineRef = useRef();
  let pieRef = useRef();
  useEffect(() => {
    (async () => {
      //初始化柱状图
      let barChart = init(barRef.current);
      barChart.setOption(barOption);
      //初始化折线图
      let lineChart = init(lineRef.current);
      lineChart.setOption(lineOption);

      // 方法2:
      let pieChart = init(pieRef.current);
      let res = await pieOptionGet();
      console.log(res);
      let { data } = res.data[0];
      pie.series[0].data = data;
      pieChart.setOption(pie);
    })();
  }, []);
  return (
    <div>
      <Row>
        <Col span={24}>
          <Card>
            <div className="chart" ref={barRef}></div>
          </Card>
        </Col>
      </Row>
      <Row gutter={20} className="chart-cont">
        <Col span={12}>
          <Card>
            <div className="chart" ref={lineRef}></div>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <div className="chart" ref={pieRef}></div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
