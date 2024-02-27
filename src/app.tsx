// import { SettingDrawer } from '@ant-design/pro-components';
import { history, Link } from '@umijs/max';
import { requestConfig } from './requestConfig';
import { loadCurrentUser, login } from '@/services/open-api/LoginController';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { message } from 'antd';
import Footer from '@/components/Footer';
import { AvatarDropdown, AvatarName } from '@/components/RightContent/AvatarDropdown';
import { Question } from '@/components/RightContent';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { LinkOutlined } from '@ant-design/icons';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const indexPath = '/';
const whiteList = ['/user/login', '/admin/sub-page'];

function verifyWhite(location: any) {
  if (whiteList.indexOf(location.pathname) !== -1) {
    history.push(location.pathname);
  } else {
    message.warning('您需要登录才能访问此页面！').then();
    history.push(loginPath);
  }
}

function verifyJumpLoginPage(token: string, refreshToken: string | null, loginType: string) {
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
              history.push(loginPath);
            }
          })
          .catch(() => {
            localStorage.removeItem('OPEN-API-TOKEN');
            localStorage.removeItem('OPEN-API-REFRESH_TOKEN');
            history.push(loginPath);
          });
      } else {
        localStorage.removeItem('OPEN-API-TOKEN');
        history.push(loginPath);
      }
    } else {
      history.push('/');
    }
  } else {
    message.error('Authorization Token格式错误！').then();
    history.push(loginPath);
  }
}

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
      verifyJumpLoginPage(token, refreshToken, loginType);
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
    verifyWhite(location);
  }
  return state;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: '/logo.svg',
    actionsRender: () => [<Question key="doc" />],
    avatarProps: {
      src: initialState?.loginUser?.user?.userInfo?.avatar || 'https://images.huangrx.cn/uploads/2023/04/20/6440f5beec6b8.png',
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (
        !initialState?.loginUser?.user?.userInfo &&
        location.pathname !== loginPath &&
        whiteList.indexOf(location.pathname) !== -1
      ) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
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
