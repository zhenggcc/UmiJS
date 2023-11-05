export default {
  title: {
    text: '增量用户',
  },
  grid: {
    left: 50,
    width: '70%',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    show: false,
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      data: [82, 932, 90, 34, 290, 1330, 320],
      type: 'line',
      symbol: 'none',
      smooth: true,
      areaStyle: {},
    },
  ],
};
