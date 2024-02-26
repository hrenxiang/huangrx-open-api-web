export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    icon: 'smile',
    name: '欢迎',
    // access: 'canNormal',
    component: './Welcome',
  },
  {
    path: '/index',
    icon: 'crown',
    layout: false,
    hideChildrenInMenu: true,
    name: '门户',
    routes: [
      {
        path: '/index',
        name: '首页',
        layout: false,
        component: './Index',
      },
    ],
  },
  {
    icon: 'table',
    path: '/interface',
    name: 'API列表',
    hideChildrenInMenu: true,
    routes: [
      {
        path: '/interface',
        name: 'API列表管理页',
        component: './ApiList',
      },
      {
        path: '/interface/detail',
        name: '详情',
        component: './ApiList/components/Detail',
      },
      {
        path: '/interface/initialize',
        name: '新建',
        component: './ApiList/components/InitializeForm',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
