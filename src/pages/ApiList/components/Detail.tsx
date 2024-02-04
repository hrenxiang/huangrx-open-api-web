import { PageContainer, ProCard, ProDescriptions, ProTable, ProColumns } from '@ant-design/pro-components';
import React from 'react';
import { Divider } from 'antd';
import { useLocation } from 'react-router-dom';
import '../index.less';

const Detail: React.FC = () => {
  let location = useLocation();
  let { data } = location.state;

  const titleStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    flex: 'auto',
    color: 'rgba(0, 0, 0, 0.88)',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: 1.5,
  };

  const columns: ProColumns<API.ApiInfoVO>[] = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '类型',
      dataIndex: 'description',
    },
    {
      title: '必须',
      dataIndex: 'rateLimit',
    },
    {
      title: '示例值/默认值',
      dataIndex: 'status',
    },
    {
      title: '说明',
      dataIndex: 'updateTime',
    }
  ];

  return (
    <PageContainer>
      <ProCard boxShadow>
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
              title: '接口名称',
              dataIndex: 'name',
            },
            {
              title: '接口描述',
              dataIndex: 'description',
            },
            {
              title: '状态',
              dataIndex: 'status',
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
              title: '接口地址',
              dataIndex: 'url',
            },
            {
              title: '请求方式',
              dataIndex: 'method',
            },
            {
              title: '支持协议',
              dataIndex: 'url',
            },
            {
              title: '返回格式',
              dataIndex: 'url',
            },
            {
              title: '调用频率限制',
              dataIndex: 'rateLimit',
            },
            {
              title: '创建时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        ></ProDescriptions>

        <Divider style={{ marginBottom: '32px' }} />

        <p style={titleStyle}>请求参数</p>
        <ProTable
          className={'interface-detail-table'}
          columns={columns}
          options={false}
          search={false}
          style={{ paddingLeft: '-24px', paddingRight: '-24px' }}
        ></ProTable>

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
