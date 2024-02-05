import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '豫ICP备2022017977号';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Huangrx Websit',
          title: 'Huangrx Websit',
          href: 'https://www.huangrx.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/hrenxiang',
          blankTarget: true,
        },
        {
          key: 'Huangrx Profile',
          title: 'Huangrx Profile',
          href: 'https://profile.huangrx.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
