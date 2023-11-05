import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { areaAdd, areaGet } from '@/api/cake';
export default function Area() {
  let mapRef = useRef();
  let [drawing, setDrawing] = useState(false);
  var mouseTool;
  function drawPolygon() {
    setDrawing(true);
    mouseTool.polygon({
      strokeColor: '#FF33FF',
      strokeOpacity: 1,
      strokeWeight: 6,
      strokeOpacity: 0.2,
      fillColor: '#1791fc',
      fillOpacity: 0.4,
      // 线样式还支持 'dashed'
      strokeStyle: 'solid',
      // strokeStyle是dashed时有效
      // strokeDasharray: [30,10],
    });
  }
  useEffect(() => {
    // var map = new AMap.Map(mapRef.current);
    var map = new AMap.Map(mapRef.current, {
      //初始化地图对象
      center: [106.505, 29.5332],
      zoom: 10,
    });

    areaGet('重庆市').then((res) => {
      console.log(res);
      res.data.forEach((item) => {
        var polygon = new AMap.Polygon({
          //多边形区域对象
          path: item.path,
          strokeColor: '#FF33FF',
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillOpacity: 0.4,
          fillColor: '#1791fc',
          zIndex: 50,
        });

        map.add(polygon); //将多边形绘制到地图中
      });
    });

    mouseTool = new AMap.MouseTool(map);

    mouseTool.on('draw', function (event) {
      //绘制完毕后触发
      // event.obj 为绘制出来的覆盖物对象
      let path = event.obj.getPath();
      let arr = path.map((item) => {
        return [item.lng, item.lat];
      });
      console.log('覆盖物对象绘制完成', arr);
      areaAdd({
        city: '重庆市',
        path: arr,
      });
      setDrawing(false);
    });
  }, []);
  return (
    <div>
      <Button type="primary" onClick={drawPolygon} disabled={drawing}>
        {drawing ? '正在绘制' : '开始绘制'}
      </Button>
      <div className={styles.map} ref={mapRef}>
        即将渲染地图...
      </div>
    </div>
  );
}
