import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  // base:'/admin/',
  // publicPath:'http://xxx.com/cdn/',
  // outputPath:'build',
  //   title: 'UmiJS',
  title: defaultSettings.title,
  // history:{
  //   type: 'hash',
  // },
  // targets:{
  //   ie: 11,
  // },
  // proxy: proxy['dev'],
  theme: {
    // '@primary-color': '#1DA57A',
    '@primary-color': defaultSettings.primaryColor,
  },
  mfsu: {},
  //   routes: routes,
  routes,
  //   routes: [
  //     // { path: '/', component: '@/pages/index' },
  //     {
  //       path: '/',
  //       // component: '@/layouts/index',
  //       routes: [
  //         { path: '/', component: '@/pages/index' },
  //         {
  //           path: '/user',
  //           wrappers: ['@/wrappers/auth'],
  //         //   component: '@/pages/user',
  //           routes: [
  //             /*
  //              * :id 为路由组件参数  :id? 为动态路由 id可以传也可以不传
  //              * match，当前路由和 url match 后的对象，包含 params、path、url 和 isExact 属性
  //              */
  //             // { path: '/user/one/:id?', component: '@/pages/user/one', title: '用户页面一' },
  //             {
  //               path: '/user/one',
  //               component: '@/pages/user/one',
  //               title: '用户页面一',
  //             },
  //             {
  //               path: '/user/two',
  //               component: '@/pages/user/two',
  //               title: '用户页面二',
  //             },
  //             { component: '@/pages/404' },
  //           ],
  //         },
  //         {
  //           path: '/dva',
  //           routes: [
  //             {
  //               path: '/dva/index',
  //               component: '@/pages/dva/index',
  //               title: 'dva首页',
  //             },
  //             { component: '@/pages/404' },
  //           ],
  //         },
  //         {
  //           path: '/login',
  //           routes: [
  //             {
  //               path: '/login/index',
  //               component: '@/pages/login/index',
  //             },
  //             { component: '@/pages/404' },
  //           ],
  //         },
  //         { component: '@/pages/404' },
  //       ],
  //     },
  //     { component: '@/pages/404' },
  //   ],
  // routes: [{ path: '/', component: '@/pages/index',title: '首页' }],
  fastRefresh: {},
  // mock: false
  // mock:{
  //   /**
  //    * exclude，格式为 Array(string)，用于忽略不需要走 mock 的文件
  //    */
  //   exclude:[
  //     ''
  //   ]
  // }
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    immer: true,
    hmr: false,
  },
});
