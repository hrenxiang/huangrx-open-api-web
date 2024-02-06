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
    component: './Welcome',
  },
  {
    path: '/admin',
    icon: 'crown',
    layout: false,
    hideChildrenInMenu: true,
    name: '管理页',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        layout: false,
        component: './Admin',
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
