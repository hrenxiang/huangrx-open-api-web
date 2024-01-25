import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import React from 'react';

export type DetailProps = {
  detailModalOpen: boolean;
  value: Partial<API.ApiInfoVO>;
};

const Detail: React.FC<DetailProps> = (props) => {
  return (
    <ProCard extra="extra" style={{ maxWidth: 300 }} boxShadow>
      <ProDescriptions
        title="API 端点详情"
        request={async () => {
          return Promise.resolve(props.value);
        }}
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
      >
        <ProDescriptions.Item dataIndex="percent" label="百分比" valueType="percent">
          100
        </ProDescriptions.Item>
        <div>多余的dom</div>
        <ProDescriptions.Item label="超链接">
          <a href="alipay.com">超链接</a>
        </ProDescriptions.Item>
      </ProDescriptions>
    </ProCard>
  );
};

export default Detail;
