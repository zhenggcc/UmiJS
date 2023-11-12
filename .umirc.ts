import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  // base:'/admin/',
  // publicPath:'http://xxx.com/cdn/',
  // outputPath:'build',
  title: 'UmiJS',
  // history:{
  //   type: 'hash',
  // },
  // targets:{
  //   ie: 11,
  // },
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  theme: {
    // '@primary-color': '#1DA57A',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/list', redirect: '@/pages/user/one' },
  //   {
  //     path: '/user',
  //     // exact: true,
  //     component: '@/layouts/index',
  //     wrappers: [
  //       '@/wrappers/auth'
  //     ],
  //     routes: [
  //       /*
  //       * :id 为路由组件参数  :id? 为动态路由 id可以传也可以不传
  //       */
  //       { path: '/user/one/:id?', component: '@/pages/index', title: '用户页面一' },
  //       { path: '/user/two', component: '@/pages/user', title: '用户页面二' },
  //       { component: '@/pages/404' }
  //     ]
  //   },
  //   { component: '@/pages/404' }
  // ],
  // routes: [{ path: '/', component: '@/pages/index',title: '首页' }],
  fastRefresh: {},
});
