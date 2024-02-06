import {
  EditableProTable,
  nanoid,
  PageContainer,
  ProCard,
  ProColumns,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useRef, useState } from 'react';
import { ApiStatusEnum, HttpMethodEnum, mapToArray, YesNoEnum } from '@/services/open-api/enums';

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

  const formRef = useRef<ProFormInstance<any>>();

  const requestParamColumns: ProColumns<API.RequestParam>[] = [
    {
      title: '参数名称',
      dataIndex: 'paramName',
      ellipsis: true,
      tooltip: '参数名称',
    },
    {
      title: '参数类型',
      dataIndex: 'paramType',
      tooltip: '参数类型',
    },
    {
      title: '是否必须',
      dataIndex: 'required',
      tooltip: '是否必须',
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
    },
    {
      title: '参数类型',
      dataIndex: 'responseType',
      tooltip: '参数类型',
    },
    {
      title: '是否必须',
      dataIndex: 'required',
      tooltip: '是否必须',
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
            onFinish={async (value) => {
              setFirstStepData(value as API.ApiInfo)
              return true;
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

            </ProCard>
          </StepsForm.StepForm>

          <StepsForm.StepForm name="test" title="接口测试">
            <ProCard
              style={{
                minWidth: 800,
                marginBlockEnd: 16,
                maxWidth: '100%',
              }}
            >

            </ProCard>
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
