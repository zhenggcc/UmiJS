import { request } from 'umi';

export const userLogin = (user) => {
  //登录
  return request('/login', {
    method: 'POST',
    data: user,
  });
};

export const userReg = (user) => {
  // 账号分配，此处的user会携带role角色
  return request('/users', {
    method: 'POST',
    data: user,
  });
};

export const roleAdd = (roleObj) => {
  //角色新增
  return request('/classes/CakeRole', {
    method: 'POST',
    data: roleObj,
  });
};

export const roleGet = () => {
  //角色列表
  return request('/classes/CakeRole', {
    method: 'GET',
  });
};
