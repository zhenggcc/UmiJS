import styles from './index.less';
import { DatePicker, Button } from 'antd';
import { useEffect } from 'react';
import { history, request } from 'umi';

export default function IndexPage(props) {
  console.log('props', props);
  /**
   * 函数式组件里 生命周期函数用 useEffect
   */
  useEffect(() => {
    // setTimeout(() => {
    //   history.push('/user/one');
    // }, 2000);
  }, []);

  const getData = async () => {
    /**
     * request 请求数据
     */
    // request('/api/index').then(res=>{
    //   console.log(res);
    // })
    const data = await request('/api/tags');
    console.log(data);
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button
        onClick={() => {
          getData();
        }}
      >
        点击获取数据
      </Button>
      <DatePicker />
    </div>
  );
}
