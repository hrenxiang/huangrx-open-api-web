import Footer from '@/components/Footer';
import { Question } from '@/components/RightContent';
import { LinkOutlined } from '@ant-design/icons';
// import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import { requestConfig } from './requestConfig';
import React from 'react';
import { AvatarDropdown, AvatarName } from './components/RightContent/AvatarDropdown';
import { loadCurrentUser, login } from '@/services/open-api/LoginController';
import logo from '../public/logo.svg';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { message } from 'antd';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const indexPath = '/welcome';
const whiteList = ['/user/login', '/admin/sub-page'];

/**
 * 相当于 路由守卫
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<InitialState> {
  const { location } = history;
  const state: InitialState = { loginUser: undefined };
  const token = localStorage.getItem('OPEN-API-TOKEN');
  const refreshToken = localStorage.getItem('OPEN-API-REFRESH_TOKEN');
  const loginType: string = 'refresh_token';

  if (token) {
    if (location.pathname === loginPath) {
      let decodeToken = jwt.decode(token);
      const { exp } = decodeToken as JwtPayload;
      if (exp) {
        const expireTime = exp * 1000;
        let nowTime = new Date().getTime();

        if (nowTime >= expireTime) {
          if (refreshToken) {
            login({ refreshToken, loginType })
              .then((res) => {
                if (res.data && res.data.token?.accessToken && res.data.token?.refreshToken) {
                  localStorage.setItem('OPEN-API-TOKEN', res.data.token.accessToken);
                  localStorage.setItem('OPEN-API-REFRESH_TOKEN', res.data.token.refreshToken);
                  history.push(indexPath);
                } else {
                  localStorage.removeItem('OPEN-API-TOKEN');
                  localStorage.removeItem('OPEN-API-REFRESH_TOKEN');
                  message.error('请重新登录！').then();
                  history.push(loginPath);
                }
              })
              .catch(() => {
                message.error('请重新登录！').then();
                history.push(loginPath);
              });
          } else {
            localStorage.removeItem('OPEN-API-TOKEN');
            message.error('请重新登录！').then();
            history.push(loginPath);
          }
        } else {
          history.push(indexPath);
        }
      } else {
        message.error('Authorization Token格式错误！').then();
        history.push(loginPath);
      }
    } else {
      try {
        if (whiteList.indexOf(location.pathname) === -1) {
          const result = await loadCurrentUser();
          if (result.code === 0 && result.data) {
            if (!state.loginUser) {
              state.loginUser = { user: {} };
            }
            if (!state.loginUser.user) {
              state.loginUser.user = {};
            }
            state.loginUser.user.userInfo = result.data;
          }
        } else {
          history.push(location.pathname);
        }
      } catch (error) {
        history.push(loginPath);
      }
    }
  } else {
    if (whiteList.indexOf(location.pathname) !== -1) {
      history.push(location.pathname);
    } else {
      history.push(loginPath);
    }
  }
  return state;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    logo: logo,
    actionsRender: () => [<Question key="doc" />],
    avatarProps: {
      src: initialState?.loginUser?.user?.userInfo?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    // waterMarkProps: {
    //   content: initialState?.loginUser?.user?.userInfo?.username,
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.loginUser?.user?.userInfo && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {/*<SettingDrawer*/}
          {/*  disableUrlParams*/}
          {/*  enableDarkTheme*/}
          {/*  settings={initialState?.settings}*/}
          {/*  onSettingChange={(settings) => {*/}
          {/*    setInitialState((preInitialState) => ({*/}
          {/*      ...preInitialState,*/}
          {/*      settings,*/}
          {/*    }));*/}
          {/*  }}*/}
          {/*/>*/}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...requestConfig,
};
