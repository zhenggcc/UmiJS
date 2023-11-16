// import {request} from 'umi'
/**
 * 使用自定义的request
 */
import request from '@/utils/request';
// import request from '../utils/request'

export const getTags = () => {
  return request('/api/tags');
};

// const getTags = () => {
//     return request('/api/tags');
// };

// export {
//     getTags
// }
