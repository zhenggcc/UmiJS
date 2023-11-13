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
  mfsu: {},
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/user',
          wrappers: ['@/wrappers/auth'],
          routes: [
            /*
             * :id 为路由组件参数  :id? 为动态路由 id可以传也可以不传
             * match，当前路由和 url match 后的对象，包含 params、path、url 和 isExact 属性
             */
            // { path: '/user/one/:id?', component: '@/pages/user/one', title: '用户页面一' },
            {
              path: '/user/one',
              component: '@/pages/user/one',
              title: '用户页面一',
            },
            {
              path: '/user/two',
              component: '@/pages/user/two',
              title: '用户页面二',
            },
            { component: '@/pages/404' },
          ],
        },
        { component: '@/pages/404' },
      ],
    },
    { component: '@/pages/404' },
  ],
  // routes: [{ path: '/', component: '@/pages/index',title: '首页' }],
  fastRefresh: {},
});
