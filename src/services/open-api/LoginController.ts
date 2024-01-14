// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取路由信息 GET /getRouters */
export async function getRouters(options?: { [key: string]: any }) {
  return request<API.ResponseDTOListRouterDTO>('/getRouters', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户注册接口 POST /register */
export async function register(body: API.AddUserDTO, options?: { [key: string]: any }) {
  return request<API.ResponseDTOLong>('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function login(body: API.LoginDTO, options?: { [key: string]: any }) {
  return request<API.TokenDTO>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
