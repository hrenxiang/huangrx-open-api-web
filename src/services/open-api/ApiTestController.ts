// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** API端点测试 POST /test */
export async function testApi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  body: API.ApiTestRequest,
  options?: { [key: string]: any },
) {
  return request<any>(`/test`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
