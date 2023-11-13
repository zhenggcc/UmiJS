import styles from './index.less';
import { DatePicker } from 'antd';
import { useEffect } from 'react';
import { history } from 'umi';

export default function IndexPage(props) {
  console.log('props', props);
  /**
   * 函数式组件里 生命周期函数用 useEffect
   */
  useEffect(() => {
    setTimeout(() => {
      history.push('/user/one');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DatePicker />
    </div>
  );
}
