let xdata = [];
let ydata = [];
for (let i = 1; i <= 12; i++) {
  xdata.push(`${i}月`);
  ydata.push(Math.round(Math.random() * 450 + 50));
}

export default {
  tooltip: {},
  grid: {
    left: 50,
    width: '75%',
  },
  xAxis: {
    data: xdata,
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: ydata,
    },
  ],
};
