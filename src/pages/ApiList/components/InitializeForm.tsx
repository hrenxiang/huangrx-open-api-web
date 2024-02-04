import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const InitializeForm: React.FC = () => {

  const [ApiInfoParam, setApiInfoParam] = useState<API.ApiInfo>();

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
        >
          <StepsForm.StepForm
            name="base"
            title="基础信息"
            onFinish={async (values) => {
              console.log(values, "======step1")
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
                tooltip="最长为 24 位，用于标定的唯一 id"
                placeholder="请输入名称"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="description"
                width="md"
                label="接口描述"
                tooltip="最长为 24 位，用于标定的唯一 id"
                placeholder="请输入接口描述"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="description"
                width="md"
                label="接口描述"
                tooltip="最长为 24 位，用于标定的唯一 id"
                placeholder="请输入接口描述"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="status"
                width="md"
                label="接口状态"
                tooltip="最长为 24 位，用于标定的唯一 id"
                placeholder="请输入接口状态"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="method"
                width="md"
                label="请求方法"
                tooltip="最长为 24 位，用于标定的唯一 id"
                placeholder="请输入请求方法"
                rules={[{ required: true }]}
              />

              <ProFormText
                name="url"
                width="md"
                label="请求地址"
                tooltip="最长为 24 位，用于标定的唯一 id"
                placeholder="请输入请求地址"
                rules={[{ required: true }]}
              />
            </ProCard>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="checkbox" title="第二步骤">
            <ProCard
              style={{
                minWidth: 800,
                marginBlockEnd: 16,
                maxWidth: '100%',
              }}
            >
              <ProFormCheckbox.Group
                name="checkbox"
                label="迁移类型"
                width="lg"
                options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
              />
              <ProForm.Group>
                <ProFormText name="dbname" label="业务 DB 用户名" />
                <ProFormDatePicker name="datetime" label="记录保存时间" width="sm" />
              </ProForm.Group>
              <ProFormCheckbox.Group
                name="checkbox"
                label="迁移类型"
                options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
              />
            </ProCard>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="time" title="第三步骤">
            <ProCard
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%',
              }}
            >
              <ProFormCheckbox.Group
                name="checkbox"
                label="部署单元"
                rules={[
                  {
                    required: true,
                  },
                ]}
                options={['部署单元1', '部署单元2', '部署单元3']}
              />
              <ProFormSelect
                label="部署分组策略"
                name="remark"
                rules={[
                  {
                    required: true,
                  },
                ]}
                width="md"
                initialValue="1"
                options={[
                  {
                    value: '1',
                    label: '策略一',
                  },
                  { value: '2', label: '策略二' },
                ]}
              />
              <ProFormSelect
                label="Pod 调度策略"
                name="remark2"
                width="md"
                initialValue="2"
                options={[
                  {
                    value: '1',
                    label: '策略一',
                  },
                  { value: '2', label: '策略二' },
                ]}
              />
            </ProCard>
          </StepsForm.StepForm>
        </StepsForm>
      </ProCard>
    </PageContainer>
  );
};

export default InitializeForm;
