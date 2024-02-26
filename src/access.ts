/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { loginUser?: API.LoginVO } | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canAdmin: loginUser && loginUser?.user?.roleKey === 'admin',
    canNormal: loginUser && loginUser?.user?.roleKey === 'normal',
  };
}
