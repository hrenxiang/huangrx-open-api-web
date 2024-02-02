import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message } from 'antd';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { login } from '@/services/open-api/LoginController';
import { history } from '@@/core/history';

// 与后端约定的响应数据格式
interface ResponseStructure {
  data?: any;
  code?: number;
  message?: string;
  success?: boolean;
}

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const requestConfig: RequestConfig = {
  baseURL: 'http://127.0.0.1:19098/open-api',

  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    errorThrower: (res) => {
      const { data, code, message } = res as unknown as ResponseStructure;
      console.log(data, code, message, '========errorThrower');
      if (code !== 0) {
        const error: any = new Error(message);
        error.name = 'BizError';
        error.info = { code, message, data };
        throw error; // 抛出自制的错误
      }
    },
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      console.log(error, '====errorHandler');
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          message.error(errorInfo.message).then();
        }
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error('None response! Please retry.').then();
      } else {
        // 发送请求时出了点问题
        message.error('Request error, please retry.').then();
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      if (config.url === '/login' || config.url === '/register') {
        return { ...config };
      }

      const loginType: string = 'refresh_token';
      const token = localStorage.getItem('OPEN-API-TOKEN');
      const refreshToken = localStorage.getItem('OPEN-API-REFRESH_TOKEN');

      // 拦截请求配置，进行个性化处理。
      if (token) {
        config.headers = { Authorization: `Bearer ${token}` };

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
                    config.headers = { Authorization: `Bearer ${res.data.token.accessToken}` };
                  } else {
                    localStorage.removeItem('OPEN-API-TOKEN');
                    localStorage.removeItem('OPEN-API-REFRESH_TOKEN');
                  }
                })
                .catch(() => {
                  message.error('请重新登录！').then();
                  history.push('/user/login');
                });
            } else {
              localStorage.removeItem('OPEN-API-TOKEN');
              return { ...config };
            }
          }
        } else {
          message.error('Authorization Token格式错误！').then();
        }
      } else {
        localStorage.removeItem('OPEN-API-TOKEN');
        localStorage.removeItem('OPEN-API-REFRESH_TOKEN');
      }
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response as unknown as ResponseStructure;
      data.success = data.code === 0;
      return response;
    },
  ],
};
