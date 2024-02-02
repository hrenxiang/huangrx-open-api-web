import { PageContainer, ProCard, ProDescriptions } from '@ant-design/pro-components';
import React from 'react';
import { useLocation } from 'react-router';
import { Divider } from 'antd';

const Detail: React.FC = () => {
  let location = useLocation();
  let { data } = location.state;

  return (
    <PageContainer>
      <ProCard boxShadow>
        <ProDescriptions
          title="简介"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
        <Divider style={{ marginBottom: '32px' }} />
        <ProDescriptions
          title="接口信息"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
        <Divider style={{ marginBottom: '32px' }} />
        <ProDescriptions
          title="请求参数"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
        <Divider style={{ marginBottom: '32px' }} />
        <ProDescriptions
          title="返回示例"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
        <Divider style={{ marginBottom: '32px' }} />
        <ProDescriptions
          title="返回参数"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
        <Divider style={{ marginBottom: '32px' }} />
        <ProDescriptions
          title="接口价格"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
        <Divider style={{ marginBottom: '32px' }} />
        <ProDescriptions
          title="返回状态码"
          request={async () => {
            return Promise.resolve({
              success: true,
              data: data,
            });
          }}
          style={{ marginBottom: '32px' }}
          emptyText={'空'}
          columns={[
            {
              title: 'API端点名称',
              dataIndex: 'name',
            },
            {
              title: 'API端点描述',
              dataIndex: 'description',
              valueType: 'textarea',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
              hideInForm: true,
              hideInSearch: true,
            },
            {
              title: '状态',
              dataIndex: 'status',
              hideInForm: true,
              valueEnum: {
                0: {
                  text: '未生效',
                  status: 'Default',
                },
                1: {
                  text: '生效中',
                  status: 'Processing',
                },
              },
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>
      </ProCard>
    </PageContainer>
  );
};

export default Detail;
