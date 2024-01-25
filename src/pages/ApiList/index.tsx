import { list as listByPage } from '@/services/open-api/ApiController';
import {ActionType, ProColumns, TableDropdown} from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import React, { useRef } from 'react';

const ApiList: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: 'API端点名称',
      dataIndex: 'name',
      tip: 'The rule name is the unique key',
    },
    {
      title: 'API端点描述',
      dataIndex: 'description',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      title: '调用频率限制',
      dataIndex: 'rateLimit',
      sorter: true,
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
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (text, record, _, action) => {
        let statusLabel = null;

        if (record.status === 0) {
          statusLabel = <a key="online">上线</a>;
        } else if (record.status === 1) {
          statusLabel = <a key="offline">下线</a>;
        }

        return [
          <a key="view">查看</a>,
          statusLabel,
          <TableDropdown
            key="actionGroup"
            onSelect={() => action?.reload()}
            menus={[
              { key: 'editable', name: '编辑' },
              { key: 'delete', name: '删除' },
            ]}
          />,
        ]
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.ApiInfoVO, API.PageParams>
        headerTitle={'API列表'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={async (params, sort, filter) => {
          console.log(params, sort, filter, '=====params');
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          const msg = await listByPage({
            ...params,
          });

          return {
            data: msg.data?.rows,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
          };
        }}
        columns={columns}
      />
    </PageContainer>
  );
};
export default ApiList;
