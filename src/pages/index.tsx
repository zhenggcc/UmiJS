import styles from './index.less';
import { DatePicker } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DatePicker />
    </div>
  );
}
