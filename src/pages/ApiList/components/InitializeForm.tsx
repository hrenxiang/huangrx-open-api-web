import {
  ActionType,
  EditableProTable,
  nanoid,
  PageContainer,
  ProCard,
  ProColumns,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProTable,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, Input, Menu, MenuProps, message, Space } from 'antd';
import React, { useRef, useState } from 'react';
import {
  ApiStatusEnum,
  checkByValue,
  FieldTypeEnum,
  generateValueEnum,
  HttpMethodEnum,
  mapToArray,
  YesNoEnum,
} from '@/services/open-api/enums';
import './initialize.less';
import ReactJson from 'react-json-view';
import { testApi } from '@/services/open-api/ApiTestController';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const InitializeForm: React.FC = () => {
  const [firstStepData, setFirstStepData] = useState<API.ApiInfo>();

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const [responseEditableKeys, setResponseEditableRowKeys] = useState<React.Key[]>([]);

  const [responseCodesEditableKeys, setResponseCodesEditableRowKeys] = useState<React.Key[]>([]);

  const [pricingEditableKeys, setPricingEditableRowKeys] = useState<React.Key[]>([]);

  const formRef = useRef<ProFormInstance>();

  const requestParamColumns: ProColumns<API.RequestParam>[] = [
    {
      title: '参数名称',
      dataIndex: 'paramName',
      ellipsis: true,
      tooltip: '参数名称',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入参数名称',
          },
        ],
      },
    },
    {
      title: '参数类型',
      dataIndex: 'paramType',
      valueType: 'select',
      valueEnum: generateValueEnum(FieldTypeEnum),
      tooltip: '参数类型',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入参数类型',
          },
        ],
      },
    },
    {
      title: '是否必须',
      dataIndex: 'required',
      valueType: 'select',
      valueEnum: generateValueEnum(YesNoEnum),
      tooltip: '是否必须',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入是否必须',
          },
        ],
      },
    },
    {
      title: '示例值',
      dataIndex: 'exampleValue',
      ellipsis: true,
      tooltip: '示例值',
    },
    {
      title: '描述信息',
      dataIndex: 'description',
      ellipsis: true,
      tooltip: '描述信息',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.key);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const requestParamDataSource = formRef.current?.getFieldValue(
              'requestParam',
            ) as API.RequestParam[];
            formRef.current?.setFieldsValue({
              requestParam: requestParamDataSource.filter((item) => item.key !== record?.key),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const responseParamColumns: ProColumns<API.ResponseParam>[] = [
    {
      title: '参数名称',
      dataIndex: 'paramName',
      ellipsis: true,
      tooltip: '参数名称',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入参数名称',
          },
        ],
      },
    },
    {
      title: '参数类型',
      dataIndex: 'responseType',
      valueType: 'select',
      valueEnum: generateValueEnum(FieldTypeEnum),
      tooltip: '参数类型',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入参数类型',
          },
        ],
      },
    },
    {
      title: '是否必须',
      dataIndex: 'required',
      valueType: 'select',
      valueEnum: generateValueEnum(YesNoEnum),
      tooltip: '是否必须',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入是否必须',
          },
        ],
      },
    },
    {
      title: '示例值',
      dataIndex: 'exampleValue',
      ellipsis: true,
      tooltip: '示例值',
    },
    {
      title: '描述信息',
      dataIndex: 'description',
      ellipsis: true,
      tooltip: '描述信息',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.key);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const responseParamDataSource = formRef.current?.getFieldValue(
              'responseParam',
            ) as API.ResponseParam[];
            formRef.current?.setFieldsValue({
              responseParam: responseParamDataSource.filter((item) => item.key !== record?.key),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const responseCodesColumns: ProColumns<API.ResponseCodes>[] = [
    {
      title: '响应状态码',
      dataIndex: 'errorCode',
      tooltip: '响应状态码',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入响应状态码',
          },
        ],
      },
    },
    {
      title: '状态码信息',
      dataIndex: 'errorMessage',
      ellipsis: true,
      tooltip: '状态码信息',
    },
    {
      title: '解释帮助',
      dataIndex: 'explanationHelp',
      ellipsis: true,
      tooltip: '解释帮助',
    },
    {
      title: '是否成功码',
      dataIndex: 'success',
      valueType: 'select',
      valueEnum: generateValueEnum(YesNoEnum),
      tooltip: '是否成功码',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入是否成功码',
          },
        ],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.key);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const responseCodesDataSource = formRef.current?.getFieldValue(
              'responseParam',
            ) as API.ResponseParam[];
            formRef.current?.setFieldsValue({
              responseCodes: responseCodesDataSource.filter((item) => item.key !== record?.key),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const pricingColumns: ProColumns<API.Pricing>[] = [
    {
      title: '免费接口调用次数',
      dataIndex: 'freeApiCount',
      tooltip: '免费接口调用次数',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入免费接口调用次数',
          },
        ],
      },
    },
    {
      title: '每日接口最大调用次数',
      dataIndex: 'dailyQuota',
      tooltip: '每日接口最大调用次数',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入每日接口最大调用次数',
          },
        ],
      },
    },
    {
      title: '价格',
      dataIndex: 'price',
      tooltip: '价格',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入价格',
          },
        ],
      },
    },
    {
      title: '描述信息',
      dataIndex: 'description',
      ellipsis: true,
      tooltip: '描述信息',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.key);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const responseParamDataSource = formRef.current?.getFieldValue(
              'responseParam',
            ) as API.ResponseParam[];
            formRef.current?.setFieldsValue({
              responseParam: responseParamDataSource.filter((item) => item.key !== record?.key),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const menuItems: MenuProps['items'] = [
    {
      label: 'Params',
      key: 'param',
    },
    {
      label: 'Body',
      key: 'body',
    },
    {
      label: 'Headers',
      key: 'headers',
    },
    {
      label: 'Cookies',
      key: 'cookies',
    },
  ];

  const [current, setCurrent] = useState('param');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const testRequestParamActionRef = useRef<ActionType>();

  const [testRequestParam, setTestRequestParam] = useState<API.RequestParam[]>([]);

  const testRequestParamRef = useRef<API.RequestParam[]>();

  const testRequestParamColumns: ProColumns<API.RequestParam>[] = [
    {
      title: '参数名称',
      dataIndex: 'paramName',
      ellipsis: true,
      editable: false,
      tooltip: '参数名称',
    },
    {
      title: '示例值',
      dataIndex: 'exampleValue',
      ellipsis: true,
      tooltip: '示例值',
    },
    {
      title: '参数类型',
      dataIndex: 'paramType',
      editable: false,
      tooltip: '参数类型',
    },
    {
      title: '描述信息',
      dataIndex: 'description',
      ellipsis: true,
      editable: false,
      tooltip: '描述信息',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            console.log(record);
            action?.startEditable?.(record.key);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            if (record.required && checkByValue(YesNoEnum, 'YES', record.required)) {
              message.warning('参数必填，不能删除').then();
            } else {
              let requestParams = testRequestParam.filter((item) => item.key !== record?.key);
              setTestRequestParam(requestParams);
              console.log(requestParams);
              testRequestParamRef.current = requestParams;
              action?.reload();
            }
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const [testResponseBody, setTestResponseBody] = useState({});

  const handleSend = () => {
    let method = firstStepData?.method;
    let url = firstStepData?.url;
    let authRequired = firstStepData?.authRequired;
    let responseCodes = firstStepData?.responseCodes;

    if (method && url && authRequired) {
      const apiTestRequest: API.ApiTestRequest = {
        method: method,
        url: url,
        authRequired: authRequired,
        requestParam: testRequestParam,
        responseCodes: responseCodes ? responseCodes : [],
      };

      testApi(apiTestRequest).then((res) => {
        console.log(res, '=====res');
        setTestResponseBody(res);
      });
    }
  };

  return (
    <PageContainer>
      <ProCard boxShadow>
        <StepsForm
          onFinish={async (values) => {
            console.log(values);
            await waitTime(1000);
            message.success('提交成功');
          }}
          formProps={{
            validateMessages: {
              required: '此项为必填项',
            },
          }}
          formRef={formRef}
        >
          <StepsForm.StepForm
            name="base"
            title="基础信息"
            onFinish={(value) => {
              let apiInfo = value as API.ApiInfo;
              setFirstStepData(apiInfo);
              if (apiInfo?.requestParam && apiInfo?.requestParam.length > 0) {
                let deepCopyApiInfo = JSON.parse(JSON.stringify(apiInfo?.requestParam));
                setTestRequestParam(deepCopyApiInfo);
                testRequestParamRef.current = deepCopyApiInfo;
              }
              testRequestParamActionRef.current?.reload();
              return Promise.resolve(true);
            }}
          >
            <ProCard
              title="接口信息"
              bordered
              headerBordered
              collapsible
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            >
              <ProFormText
                name="name"
                width="md"
                label="接口名称"
                tooltip="最长为 10 位，用于标定接口名称"
                placeholder="请输入名称"
                rules={[{ required: true }, { max: 10, message: '接口名称不能超过10个字符' }]}
              />

              <ProFormText
                name="description"
                width="md"
                label="接口描述"
                tooltip="这是一个用于描述接口的字段，请输入接口的详细描述信息"
                placeholder="请输入接口描述"
                rules={[{ required: true }]}
              />

              <ProFormSelect
                options={mapToArray<number>(ApiStatusEnum)}
                width="md"
                name="status"
                label="接口状态"
                tooltip="添加完成后是否生效"
                rules={[{ required: true }]}
              />

              <ProFormSelect
                options={mapToArray<string>(HttpMethodEnum)}
                width="md"
                name="method"
                label="请求方法"
                tooltip="请选择您要使用的请求方法。GET 用于获取数据，POST 用于发送数据，DELETE 用于删除数据，等等。"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="url"
                width="md"
                label="请求地址"
                tooltip="请输入您要发送请求的地址，例如：https://example.com/api。"
                placeholder="请输入请求地址"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="rateLimit"
                width="md"
                label="调用频率限制"
                tooltip="请输入您的 API 调用频率限制，例如：1000 次/分钟。"
                placeholder="请输入请求地址"
                rules={[{ required: true }]}
              />

              <ProFormSelect
                options={mapToArray<number>(YesNoEnum)}
                width="md"
                name="authRequired"
                label="是否需要认证"
                tooltip="请选择是否需要在请求中使用身份验证。如果需要身份验证，请输入 '是'；如果不需要身份验证，请输入 '否'。"
                rules={[{ required: true }]}
              />
            </ProCard>

            <ProCard
              title="请求参数"
              bordered
              headerBordered
              collapsible
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            >
              <EditableProTable<API.RequestParam>
                name="requestParam"
                rowKey="key"
                scroll={{ x: '16.6%' }}
                loading={false}
                columns={requestParamColumns}
                recordCreatorProps={{
                  newRecordType: 'dataSource',
                  record: {
                    key: nanoid(),
                  },
                }}
                editable={{
                  type: 'multiple',
                  editableKeys,
                  onChange: setEditableRowKeys,
                }}
              />
            </ProCard>

            <ProCard
              title="返回参数"
              bordered
              headerBordered
              collapsible
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            >
              <EditableProTable<API.ResponseParam>
                name="responseParam"
                rowKey="key"
                scroll={{ x: '16.6%' }}
                loading={false}
                columns={responseParamColumns}
                recordCreatorProps={{
                  newRecordType: 'dataSource',
                  record: {
                    key: nanoid(),
                  },
                }}
                editable={{
                  type: 'multiple',
                  editableKeys: responseEditableKeys,
                  onChange: setResponseEditableRowKeys,
                }}
              />
            </ProCard>

            <ProCard
              title="响应码"
              bordered
              headerBordered
              collapsible
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            >
              <EditableProTable<API.ResponseCodes>
                name="responseCodes"
                rowKey="key"
                scroll={{ x: '16.6%' }}
                loading={false}
                columns={responseCodesColumns}
                recordCreatorProps={{
                  newRecordType: 'dataSource',
                  record: {
                    key: nanoid(),
                  },
                }}
                editable={{
                  type: 'multiple',
                  editableKeys: responseCodesEditableKeys,
                  onChange: setResponseCodesEditableRowKeys,
                }}
              />
            </ProCard>

            <ProCard
              title="接口价格"
              bordered
              headerBordered
              collapsible
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            >
              <EditableProTable<API.Pricing>
                name="pricing"
                rowKey="key"
                scroll={{ x: '16.6%' }}
                loading={false}
                columns={pricingColumns}
                recordCreatorProps={{
                  newRecordType: 'dataSource',
                  record: {
                    key: nanoid(),
                  },
                }}
                editable={{
                  type: 'multiple',
                  editableKeys: pricingEditableKeys,
                  onChange: setPricingEditableRowKeys,
                }}
              />
            </ProCard>
          </StepsForm.StepForm>

          <StepsForm.StepForm name="test" title="接口测试">
            <Space className="second-step-header">
              <Input
                addonBefore={firstStepData?.method}
                value={firstStepData?.url}
                className="second-step-header_input"
                placeholder="牏入 http 或 https 起始的完整 URL"
                readOnly
              />
              <Button onClick={handleSend}>发送</Button>
            </Space>

            <Space className="second-step-param">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={menuItems}
              />
              <Space className="second-step-param_container">
                {current === 'param' ? (
                  <Space className="second-step-param_param">
                    <ProCard>
                      <p className="second-step-param_text">Query参数</p>
                      <ProTable<API.RequestParam>
                        actionRef={testRequestParamActionRef}
                        name="testRequestParam"
                        rowKey="key"
                        search={false}
                        options={false}
                        loading={false}
                        bordered={true}
                        pagination={false}
                        style={{
                          width: '100%',
                        }}
                        columns={testRequestParamColumns}
                        request={async () => {
                          return {
                            data: testRequestParamRef.current,
                            success: true,
                          };
                        }}
                      />
                    </ProCard>
                  </Space>
                ) : current === 'body' ? (
                  <Space className="second-step-param_body">body</Space>
                ) : current === 'headers' ? (
                  <Space className="second-step-param_headers">
                    <p>Headers</p>
                  </Space>
                ) : current === 'cookies' ? (
                  <Space className="second-step-param_cookies">cookies</Space>
                ) : (
                  <Space></Space>
                )}

                <ProCard
                  style={{
                    width: '100%',
                  }}
                >
                  <p className="second-step-param_text">响应Body</p>
                  <ReactJson
                    style={{
                      padding: '14px',
                      borderRadius: '5px',
                      fontFamily: 'HannotateSC-W5',
                      marginBottom: ' 32px',
                    }}
                    src={testResponseBody}
                    theme="ocean"
                    iconStyle="circle"
                  />
                </ProCard>
              </Space>
            </Space>
          </StepsForm.StepForm>

          <StepsForm.StepForm name="time" title="上传结果">
            <ProCard
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            ></ProCard>
          </StepsForm.StepForm>
        </StepsForm>
      </ProCard>
    </PageContainer>
  );
};

export default InitializeForm;
