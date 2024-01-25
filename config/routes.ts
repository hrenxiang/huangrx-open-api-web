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
    name: '管理页',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        component: './Admin',
      },
    ],
  },
  {
    icon: 'table',
    path: '/api',
    name: 'API列表',
    component: './ApiList',
    hideChildrenInMenu: true,
    routes: [
      {
        path: '/api/detail',
        name: '详情',
        component: './ApiList/components/Detail',
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
