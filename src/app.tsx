import { history } from 'umi';

// import require from 'umi'
let extraRoutes;

/**
 * 动态添加路由
 * 此处有bug
 * component 为undefined
 */
// export function patchRoutes({ routes }) {
//     console.log('添加前', routes);
//     routes.unshift({
//         path: '/foo',
//         component: require('@/pages/user').default,
//     });
//     console.log('添加后', routes);

//     console.log(extraRoutes)
// extraRoutes.map(item => {
//     routes.unshift(
//         {
//             path: item.path,
//             component: require(`@/pages${item.component}`).default,
//         }
//     )
// })
// console.log(routes)
// }

// 覆写 render, 会在 patchRoutes 之前执行
// export function render(oldRender) {
//     // 模拟从服务端请求获得的 路由
// fetch('/api/routes').then(res => res.json()).then((res) => {
// })
//     extraRoutes = [
//         {
//             path: '/serve',
//             component: '/user'
//         }
//     ]
// 渲染之前，做一些权限的校验
// const isLogin = false
// if(!isLogin) {
//   history.push('/login/index')
// }

//     oldRender();
// }

/**
 * 2023.11.16
 * 运行时配置 component是undefined
 */
export function patchRoutes({ routes }) {
  console.log('添加前', routes);
  routes.unshift({
    path: '/foo',
    component: require('@/pages/user/one').default,
  });
  console.log('添加后', routes);
}

// 在初始加载和路由切换时做一些事情。 在 patchRoutes 之前执行
export function onRouteChange({ location, routes, action, matchedRoutes }) {
  // console.log(location);
  // console.log(routes);
  // console.log(action);

  // 用于做埋点统计
  console.log(location.pathname);

  // 设置标题
  if (matchedRoutes.length) {
    document.title =
      '融职 - ' + (matchedRoutes[matchedRoutes.length - 1].route.title || '');
  }
}
