import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message } from 'antd';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { login } from '@/services/open-api/LoginController';
import { history } from '@@/core/history';

/**
 * 与后端约定的响应数据格式。
 * @interface
 * @name ResponseStructure
 * @property {*} [data] - 响应数据。
 * @property {number} [code] - 响应状态码。
 * @property {string} [message] - 响应消息。
 * @property {boolean} [success] - 响应是否成功。
 * @example
 * const response: ResponseStructure = {
 *   data: { id: 1, name: 'John' },
 *   code: 200,
 *   message: 'Success',
 *   success: true
 * };
 */
interface ResponseStructure {
  data?: any;
  code?: number;
  message?: string;
  success?: boolean;
}

/**
 * 请求白名单，包含允许无需认证即可访问的路由。
 * @constant {string[]}
 * @name whiteList
 */
const whiteList = ['/login', '/register', '/index/images/**'];

/**
 * 从本地存储中移除登录状态相关信息。
 * @function
 * @name removeLoginStatus
 * @returns {void}
 * @example
 * removeLoginStatus();
 */
const removeLoginStatus = () => {
  localStorage.removeItem('OPEN-API-TOKEN');
  localStorage.removeItem('OPEN-API-REFRESH_TOKEN');
};

/**
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
      if (code !== 0) {
        const error: any = new Error(message);
        error.name = 'BizError';
        error.info = { code, message, data };
        throw error; // 抛出自制的错误
      }
    },
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      console.log('Error name:', error?.name);
      if (error?.name === 'BizError') {
        const errorInfo = error.info;
        console.log('Error info:', errorInfo);
        if (errorInfo) {
          console.log('Error message:', errorInfo.message);
          message.error(errorInfo.message).then();
          return;
        }
      } else if (error?.request) {
        console.log('Error request:', error.request);
        message.error('请求错误，请重试！').then();
        return;
      } else {
        console.log('Error:', error);
        message.error('请求错误，请重试！').then();
        return;
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 检查配置的 URL 是否匹配任何一个规则
      const isMatched = whiteList.some((pattern) => {
        // 对于以 /index/images/ 开头的特殊情况进行处理
        if (pattern.endsWith('**')) {
          const prefix = pattern.slice(0, -2);
          return config.url?.startsWith(prefix);
        } else {
          return config.url === pattern;
        }
      });

      if (isMatched) {
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
                    return { ...config };
                  } else {
                    removeLoginStatus();
                  }
                })
                .catch(() => {
                  removeLoginStatus();
                  history.push('/user/login');
                });
            } else {
              localStorage.removeItem('OPEN-API-TOKEN');
            }
          } else {
            config.headers = { Authorization: `Bearer ${token}` };
            return { ...config };
          }
        } else {
          removeLoginStatus();
        }
      } else {
        removeLoginStatus();
      }

      return Promise.reject();
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response as unknown as ResponseStructure;
      if (!data) {
        return response;
      }
      if (response.config.url === '/test') {
        return response;
      } else {
        data.success = data.code === 0;
        return response;
      }
    },
  ],
};
