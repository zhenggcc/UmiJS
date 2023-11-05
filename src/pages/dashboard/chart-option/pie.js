export default {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: 'middle',
    orient: 'vertical',
    right: '30%',
    width: '80%',
    itemWidth: 5,
    itemHeight: 5,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '80%'],
      avoidLabelOverlap: false,
      left: '-40%',
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        // { "value": 1048, "name": "家用电器" },
        // { "value": 735, "name": "食用酒水" },
        // { "value": 580, "name": "个护健康" },
        // { "value": 484, "name": "母婴产品" },
        // { "value": 300, "name": "服饰箱包" }
      ],
    },
  ],
};
