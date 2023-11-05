export default [
  //配置式路由
  {
    path: '/login',
    component: '@/pages/login/index',
    name: '登录',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/',
    component: '@/pages/index',
    name: '数据统计',
    hideInMenu: true,
  },
  {
    path: '/dashboard',
    component: '@/pages/dashboard/index',
    name: '数据统计',
    icon: 'AreaChartOutlined',
    access: 'isRoot',
  },
  {
    path: '/test',
    component: '@/pages/test/index',
    name: '测试',
    icon: 'GitlabOutlined',
    hideInMenu: true,
  },
  {
    path: '/stu',
    name: 'Mock使用',
    icon: 'AliwangwangOutlined',
    routes: [
      {
        path: '/stu/list',
        component: '@/pages/stu/list',
        name: '学员列表',
      },
      {
        path: '/stu/pub',
        component: '@/pages/stu/pub',
        name: '学员录入',
      },
    ],
  },
  {
    path: '/cate',
    name: '分类管理',
    icon: 'WindowsOutlined',
    access: 'isAdmin',
    routes: [
      {
        path: '/cate/list',
        component: '@/pages/category/catelist',
        name: '分类列表',
        access: 'isAdmin',
      },
      {
        path: '/cate/pub',
        component: '@/pages/category/catepub',
        name: '分类发布',
        access: 'unAdmin',
      },
    ],
  },
  {
    path: '/banner',
    name: '轮播管理',
    icon: 'RadarChartOutlined',
    access: 'isAdmin',
    routes: [
      {
        path: '/banner/list',
        component: '@/pages/banner/list',
        name: '轮播列表',
      },
      {
        path: '/banner/pub',
        component: '@/pages/banner/pub',
        name: '轮播发布',
      },
      {
        path: '/banner/edit',
        component: '@/pages/banner/edit',
        name: '轮播编辑',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/goods',
    name: '商品管理',
    icon: 'CodeSandboxOutlined',
    access: 'isAdmin',
    routes: [
      {
        path: '/goods/list',
        component: '@/pages/goods/list',
        name: '商品列表',
      },
      {
        path: '/goods/pub',
        component: '@/pages/goods/pub',
        name: '商品发布',
      },
    ],
  },
  {
    path: '/dva',
    name: '状态管理',
    icon: 'CodeSandboxOutlined',
    routes: [
      {
        path: '/dva/a',
        component: '@/pages/testdva/CompA',
        name: 'A组件',
      },
      {
        path: '/dva/b',
        component: '@/pages/testdva/CompB',
        name: 'B组件',
      },
      {
        path: '/dva/notice',
        component: '@/pages/testdva/Notice',
        name: '消息中心',
      },
    ],
  },
  {
    path: '/area',
    name: '配送范围',
    component: '@/pages/area',
    icon: 'HeatMapOutlined',
    access: 'isRoot',
  },
  {
    path: '/sys',
    name: '系统设置',
    icon: 'SettingOutlined',
    access: 'isRoot',
    routes: [
      {
        path: '/sys/role',
        component: '@/pages/system/RoleManager',
        name: '角色管理',
      },
      {
        path: '/sys/user',
        component: '@/pages/system/UserManager',
        name: '账号管理',
      },
    ],
  },
];
