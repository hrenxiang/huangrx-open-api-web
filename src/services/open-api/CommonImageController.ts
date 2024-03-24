// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页查询API端点信息 POST /index/images/list */
export async function list(body: API.CommonImageRequest, options?: { [key: string]: any }) {
  return request<API.CommonImagePageResponse>('/index/images/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询API端点信息 PUT /index/images/edit/status */
export async function editStatus(body: API.EditStatusRequest, options?: { [key: string]: any }) {
  return request<API.ResponseDTOVoid>('/index/images/edit/status', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
