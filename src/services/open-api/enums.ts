/**
 * 将 Map 转换为对象数组
 * @param {Map<string, [number, string, string]>} map 输入的 Map 对象
 * @returns {{ value: number; label: string }[]} 转换后的对象数组
 */
export function mapToArray<T>(
  map: Map<string, [T, string, string]>,
): { value: T; label: string }[] {
  const result: { value: T; label: string }[] = [];
  map.forEach((value) => {
    result.push({ value: value[0], label: value[1] });
  });
  return result;
}

/**
 * 根据值获取对应的描述信息
 * @param map 枚举类
 * @param element 值
 * @returns 描述信息，如果未找到匹配值则返回 undefined
 */
export function getDescByValue<V extends [number, string, string]>(
  map: Map<string, V>,
  element: number,
): string | undefined {
  for (const [, value] of map) {
    if (value[0] === element) {
      return value[1];
    }
  }
  return undefined;
}

/**
 * 判断枚举值是否与给定值相等
 * @param enumMap 枚举的 Map 对象
 * @param enumKey 枚举的键
 * @param value 要比较的值
 * @returns 如果枚举值与给定值相等则返回 true，否则返回 false
 */
export function checkByValue(
  enumMap: Map<string, [number, string, string]>,
  enumKey: string,
  value: number,
): boolean {
  // 检查枚举键是否存在于枚举 Map 中
  if (!enumMap.has(enumKey)) {
    throw new Error(`Enum key '${enumKey}' not found`);
  }

  // 获取枚举值
  const enumValue = enumMap.get(enumKey);

  // 比较枚举值和给定值是否相等，并返回结果
  return enumValue![0] === parseInt(String(value));
}

/**
 * API 状态枚举
 */
export const ApiStatusEnum = new Map<string, [number, string, string]>([
  ['ENABLE', [1, '已生效', 'extra']],
  ['DISABLE', [0, '未生效', 'extra']],
]);

/**
 * HTTP 请求方法枚举
 * @description 这个枚举包含常见的 HTTP 请求方法及其描述信息。
 */
export const HttpMethodEnum = new Map<string, [string, string, string]>([
  ['GET', ['GET', 'GET', '用于从服务器获取数据']],
  ['POST', ['POST', 'POST', '用于向服务器发送数据']],
  ['DELETE', ['DELETE', 'DELETE', '用于从服务器删除数据']],
  ['PUT', ['PUT', 'PUT', '用于更新服务器上的资源']],
  ['PATCH', ['PATCH', 'PATCH', '用于部分更新服务器上的资源']],
  ['HEAD', ['HEAD', 'HEAD', '用于仅获取资源的头部信息']],
  ['OPTIONS', ['OPTIONS', 'OPTIONS', '用于获取服务器支持的请求方法']],
  ['TRACE', ['TRACE', 'TRACE', '用于测试或诊断']],
]);

/**
 * 是否 状态枚举
 */
export const YesNoEnum = new Map<string, [number, string, string]>([
  ['YES', [1, '是', 'extra']],
  ['NO', [0, '否', 'extra']],
]);
