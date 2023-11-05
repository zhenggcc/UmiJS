//动态生成权限数据
export default function (initialState) {
  console.log('access权限文件', initialState);
  let { role } = initialState.userInfo ? initialState.userInfo : { role: '' };
  return {
    isRoot: role === 'root', //只有超级管理员有权访问
    isAdmin: role === 'root' || role === 'admin', //超级管理员、管理员都可以访问
    unAdmin: role !== 'admin',
    isWorker: true,
  };
}
