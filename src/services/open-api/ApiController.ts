// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除API端点信息 DELETE /api/del/${param0} */
export async function deleteApiInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApiInfoParams,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.ResponseDTOVoid>(`/api/del/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询API端点信息详情 GET /api/detail/${param0} */
export async function selectApiInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectApiInfoParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResponseDTOApiInfoVO>(`/api/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 编辑API端点信息 PUT /api/edit */
export async function updateApiInfo(body: API.ApiInfoUpdateDTO, options?: { [key: string]: any }) {
  return request<API.ResponseDTOVoid>('/api/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询API端点信息 POST /api/list */
export async function list(body: API.ApiInfoPageDTO, options?: { [key: string]: any }) {
  return request<API.ResponseDTOPageDTOApiInfoVO>('/api/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增API端点信息 POST /api/save */
export async function saveApiInfo(body: API.ApiInfoDTO, options?: { [key: string]: any }) {
  return request<API.ResponseDTOVoid>('/api/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
