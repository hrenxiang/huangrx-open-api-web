/**
 * 手机号脱敏处理
 * @param phoneNumber 手机号
 * @returns {string} 脱敏结果
 */
export function maskPhoneNumber(phoneNumber: string): string {
  if (phoneNumber.length === 11) {
    return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  } else {
    // 如果不是移动手机号，暂时不做处理
    return phoneNumber;
  }
}
