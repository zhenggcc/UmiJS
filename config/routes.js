export default [
  // { path: '/', component: '@/pages/index' },
  {
    path: '/',
    // component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/Index/index' },
      {
        path: '/user',
        wrappers: ['@/wrappers/auth'],
        //   component: '@/pages/user',
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
      {
        path: '/dva',
        routes: [
          {
            path: '/dva/index',
            component: '@/pages/dva/index',
            title: 'dva首页',
          },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/login',
        routes: [
          {
            path: '/login/index',
            component: '@/pages/login/index',
          },
          { component: '@/pages/404' },
        ],
      },
      { component: '@/pages/404' },
    ],
  },
  { component: '@/pages/404' },
];
