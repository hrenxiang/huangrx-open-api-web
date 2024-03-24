import './index.less';
import React, { useRef } from 'react';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import { editStatus, list as listByPage } from '@/services/open-api/CommonImageController';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history } from '@@/core/history';
import { Link } from '@@/exports';
import { ApiStatusEnum, CommonImageTypeEnum, generateValueEnum } from '@/services/open-api/enums';

const PartnerList: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.CommonImageVO>[] = [
    {
      title: '主键',
      dataIndex: 'id',
      hidden: true,
      hideInSearch: true,
      hideInSetting: true,
    },
    {
      title: '图片地址',
      dataIndex: 'imgPath',
      hideInSearch: true,
    },
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: generateValueEnum(CommonImageTypeEnum),
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: generateValueEnum(ApiStatusEnum),
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
          statusLabel = (
            <a
              key="online"
              onClick={() =>
                record.id &&
                editStatus({ ids: [record.id], status: 1 }).then((res) => {
                  actionRef.current?.reload();
                  console.log(res);
                })
              }
            >
              上线
            </a>
          );
        } else if (record.status === 1) {
          statusLabel = (
            <a
              key="offline"
              onClick={() =>
                record.id &&
                editStatus({ ids: [record.id], status: 0 }).then((res) => {
                  actionRef.current?.reload();
                  console.log(res);
                })
              }
            >
              下线
            </a>
          );
        }

        return [
          <Link key="view" to={'/partner/detail'} state={{ data: record }}>
            查看
          </Link>,
          statusLabel,
          <TableDropdown
            key="actionGroup"
            onSelect={() => action?.reload()}
            menus={[
              { key: 'editable', name: '编辑' },
              { key: 'delete', name: '删除' },
            ]}
          />,
        ];
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CommonImageVO>
        headerTitle={'友情链接'}
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
            pageNum: params.current,
            ...params
          });

          return {
            data: msg.data?.rows,
            total: msg.data?.total,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
          };
        }}
        pagination={{
          pageSize: 10,
        }}
        columns={columns}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => {
              history.push('/partner/initialize');
            }}
            type="primary"
          >
            新建
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default PartnerList;
