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
    /** 角色ID */
    roleId: string;
    /** 状态 */
    status: number;
    /** 备注 */
    remark?: string;
  };

  type LoginDTO = {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 登录类型 */
    loginType: string;
    /** 刷新Token */
    refreshToken?: string;
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
    id?: number;
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

  type ResponseDTO = {
    code?: string;
    message?: string;
    data?: T;
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
    id: number;
  };

  type TokenDTO = {
    accessToken?: string;
    refreshToken?: string;
    expire?: string;
  };

  type UserVO = {
    /** 用户ID */
    userId?: number;
    /** 角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 用户名 */
    username?: string;
    /** 用户昵称 */
    nickname?: string;
    /** 用户类型 */
    userType?: number;
    /** 邮件 */
    email?: string;
    /** 号码 */
    phoneNumber?: string;
    /** 性别 */
    sex?: number;
    /** 用户头像 */
    avatar?: string;
    /** 状态 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 登录IP */
    loginIp?: string;
    /** 登录日期 */
    loginDate?: string;
  };

  type LoginUserVO = {
    userInfo?: UserVO;
    roleKey?: string;
    permissions?: string[];
  };

  type LoginVO = {
    token?: TokenDTO;
    user?: LoginUserVO;
  };

  type LoginResponseDTO = {
    code?: number;
    message?: string;
    data?: LoginVO;
  };

  type UserVOResponseDTO = {
    code?: number;
    message?: string;
    data?: UserVO;
  };

  type Pricing = {
    key: React.Key;
    id?: number;
    apiInfoId?: number;
    userLevel?: number;
    freeApiCount?: number;
    dailyQuota?: number;
    price?: number;
    description?: string;
  };

  type RequestHeader = {
    key: React.Key;
    id?: number;
    apiInfoId?: number;
    paramKey?: string;
    paramValue?: string;
    paramType?: number;
    description?: string;
  };

  type RequestParam = {
    key: React.Key;
    id?: number;
    apiInfoId?: number;
    paramName?: string;
    paramType?: number;
    required?: number;
    exampleValue?: string;
    description?: string;
  };

  type RequestBody = {
    key: React.Key;
    id?: number;
    apiInfoId?: number;
    parentId?: number;
    paramKey?: string;
    paramValue?: string;
    isNull?: number;
    paramType?: number;
    description?: string;
  };

  type ResponseParam = {
    key: React.Key;
    id?: number;
    apiInfoId?: number;
    responseType?: string;
    paramName?: string;
    paramType?: number;
    exampleValue?: string;
    description?: string;
  };

  type ResponseCodes = {
    key: React.Key;
    id?: number;
    apiInfoId?: number;
    errorCode?: number;
    errorMessage?: string;
    explanationHelp?: string;
    success?: number;
  };

  type ApiInfo = {
    id?: number;
    name: string;
    description: string;
    status: number;
    method: string;
    url: string;
    rateLimit: number;
    authRequired: number;
    pricing: Pricing;
    requestParam: RequestParam[];
    responseParam: ResponseParam[];
    responseCodes: ResponseCodes[];
    responseHeader: RequestHeader[];
    responseBody: RequestBody[];
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type ApiTestRequest = {
    method: string;
    url: string;
    authRequired: number;
    requestParam: RequestParam[];
    responseCodes: ResponseCodes[];
  };

  type DevelopmentIndex = {
    id?: string;
    city?: string;
    score?: string;
  };

  /**
   * CommonImageInfoPageDTO
   */
  type CommonImageRequest = {
    beginTime?: null | string;
    endTime?: null | string;
    location?: null | string;
    orderColumn?: null | string;
    orderDirection?: null | string;
    pageNum?: number | null;
    pageSize?: number | null;
    partnerName?: null | string;
    status?: number | null;
    timeRangeColumn?: null | string;
    type?: number | null;
    [property: string]: any;
  };

  type CommonImagePageResponse = {
    code?: string;
    message?: string;
    data?: CommonImagePage;
  };

  /**
   * 响应数据
   *
   * CommonImagePage«ApiCommonImageVO»
   */
  type CommonImagePage = {
    /**
     * 列表数据
     */
    rows?: CommonImageVO[];
    /**
     * 总记录数
     */
    total?: number;
    [property: string]: any;
  };

  /**
   * 公共图片响应对象
   *
   * ApiCommonImageVO
   */
  type CommonImageVO = {
    /**
     * 创建时间
     */
    createTime?: null | string;
    /**
     * 创建者
     */
    creatorName?: null | string;
    /**
     * 主键
     */
    id?: null | number;
    /**
     * 图片地址
     */
    imgPath?: null | string;
    /**
     * banner位置
     */
    location?: null | string;
    /**
     * 合作伙伴企业名称
     */
    partnerName?: null | string;
    /**
     * 状态 0-初始状态
     */
    status?: number | null;
    /**
     * 数据类型，0-合作伙伴，1-banner
     */
    type?: number | null;
    /**
     * 修改者
     */
    updaterName?: null | string;
    /**
     * 修改时间
     */
    updateTime?: null | string;
    /**
     * 权重
     */
    weight?: number | null;
    [property: string]: any;
  };

  type EditStatusRequest = {
    /**
     * 唯一标识符
     */
    ids: number[];
    /**
     * 信息状态
     */
    status: number;
    [property: string]: any;
  }

}
