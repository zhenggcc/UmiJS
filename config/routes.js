export default [ //配置式路由
    {
        path: '/',
        component: '@/pages/index',
        name: '首页',
    },
    {
        path: '/test',
        component: '@/pages/test',
        name: '测试'
    },
    {
        path: '/stu',
        name: '学员管理',
        routes: [   //子路由
            {
                path: '/stu/list',
                component: '@/pages/stu/list',
                name: '学员列表'
            },
            {
                path: '/stu/pub',
                component: '@/pages/stu/pub',
                name: '学员录入'
            }
        ]
    }
]