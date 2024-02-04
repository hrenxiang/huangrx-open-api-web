/**
 * 将 Map 转换为对象数组
 * @param {Map<string, [number, string, string]>} map 输入的 Map 对象
 * @returns {{ value: number; label: string }[]} 转换后的对象数组
 */
export function mapToArray(
  map: Map<string, [number, string, string]>,
): { value: number; label: string }[] {
  const result: { value: number; label: string }[] = [];
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
  return enumValue![0] === value;
}

/**
 * API 状态枚举
 */
export const ApiStatusEnum = new Map<string, [number, string, string]>([
  ['ENABLE', [1, '已生效', 'extra']],
  ['DISABLE', [0, '未生效', 'extra']],
]);
