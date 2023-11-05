import * as echarts from 'echarts';
let xdata = [],
  ydata = [];
for (let i = 1; i <= 12; i++) {
  xdata.push(`${i}月`);
  ydata.push(Math.round(Math.random() * 900 + 100));
}

export default {
  title: {
    text: '销量统计',
  },
  grid: {
    left: 50,
    width: '80%',
  },
  tooltip: {},
  xAxis: {
    data: xdata,
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: ydata,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' },
        ]),
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' },
          ]),
        },
      },
    },
  ],
};
