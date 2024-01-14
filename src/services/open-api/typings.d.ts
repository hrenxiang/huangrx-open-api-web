declare namespace API {
  type AddUserDTO = {
    /** 用户名 */
    username: string;
    /** 用户昵称 */
    nickname: string;
    /** 邮件 */
    email: string;
    /** 号码 */
    phoneNumber: string;
    /** 性别 */
    sex: number;
    /** 用户头像 */
    avatar: string;
    /** 用户密码 */
    password: string;
    /** 职位ID */
    postId: string;
    /** 角色ID */
    roleId: string;
    /** 部门ID */
    deptId: string;
    /** 状态 */
    status: number;
    /** 备注 */
    remark?: string;
  };

  type LoginDTO = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 登录类型 */
    loginType: string;
    /** 刷新Token */
    refreshToken: string;
  };

  type ApiInfoDTO = {
    /** API端点名称 */
    name: string;
    /** API端点描述 */
    description?: string;
    /** 端点是否激活（0否，1是） */
    status: number;
    /** 请求方法（如GET, POST等） */
    method: string;
    /** 请求URL */
    url: string;
    /** 调用频率限制（0表示无限制） */
    rateLimit: number;
    /** 是否需要认证（0否，1是） */
    authRequired: number;
    /** 请求头 */
    requestHeader?: string;
    /** 响应头 */
    responseHeader?: string;
  };

  type ApiInfoPageDTO = {
    orderColumn?: string;
    orderDirection?: string;
    timeRangeColumn?: string;
    beginTime?: string;
    endTime?: string;
    pageNum?: number;
    pageSize?: number;
    name?: string;
    status?: number;
    method?: string;
    authRequired?: number;
  };

  type ApiInfoUpdateDTO = {
    /** API端点名称 */
    name: string;
    /** API端点描述 */
    description?: string;
    /** 端点是否激活（0否，1是） */
    status: number;
    /** 请求方法（如GET, POST等） */
    method: string;
    /** 请求URL */
    url: string;
    /** 调用频率限制（0表示无限制） */
    rateLimit: number;
    /** 是否需要认证（0否，1是） */
    authRequired: number;
    /** 请求头 */
    requestHeader?: string;
    /** 响应头 */
    responseHeader?: string;
    /** 唯一标识符 */
    id: string;
  };

  type ApiInfoVO = {
    /** 唯一标识符 */
    id?: string;
    /** API端点名称 */
    name?: string;
    /** API端点描述 */
    description?: string;
    /** 端点是否激活（0否，1是） */
    status?: number;
    /** 请求方法（如GET, POST等） */
    method?: string;
    /** 请求URL */
    url?: string;
    /** 调用频率限制（0表示无限制） */
    rateLimit?: number;
    /** 是否需要认证（0否，1是） */
    authRequired?: number;
    /** 请求头 */
    requestHeader?: string;
    /** 响应头 */
    responseHeader?: string;
    /** 创建者ID */
    creatorId?: string;
    /** 创建者 */
    creatorName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改者ID */
    updaterId?: string;
    /** 修改者 */
    updaterName?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type deleteApiInfoParams = {
    ids: string[];
  };

  type MetaDTO = {
    title?: string;
    icon?: string;
    showLink?: boolean;
    showParent?: boolean;
    roles?: string[];
    auths?: string[];
    frameSrc?: string;
    isFrameSrcInternal?: boolean;
    rank?: number;
  };

  type PageDTOApiInfoVO = {
    total?: string;
    rows?: ApiInfoVO[];
  };

  type ResponseDTOApiInfoVO = {
    code?: string;
    message?: string;
    data?: ApiInfoVO;
  };

  type ResponseDTOListRouterDTO = {
    code?: string;
    message?: string;
    data?: RouterDTO[];
  };

  type ResponseDTOLong = {
    code?: string;
    message?: string;
    data?: string;
  };

  type ResponseDTOPageDTOApiInfoVO = {
    code?: string;
    message?: string;
    data?: PageDTOApiInfoVO;
  };

  type ResponseDTOVoid = {
    code?: string;
    message?: string;
    data?: Record<string, any>;
  };

  type RouterDTO = {
    name?: string;
    path?: string;
    redirect?: string;
    component?: string;
    rank?: number;
    meta?: MetaDTO;
  };

  type selectApiInfoParams = {
    id: string;
  };

  type TokenDTO = {
    accessToken?: string;
    refreshToken?: string;
    expire?: string;
  };
}
