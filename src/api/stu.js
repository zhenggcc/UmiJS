import { request } from 'umi';

export const stuGet = () => {
  //新增
  return request('/classes/stu', {
    method: 'GET',
  });
};

export const stuDel = (id) => {
  //删除
  return request(`/classes/stu?id=${id}`, {
    method: 'DELETE',
  });
};
