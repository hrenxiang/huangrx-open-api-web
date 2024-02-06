import '@umijs/max';
import React from 'react';
import './index.less';
import {Link} from "@umijs/max";

const Index: React.FC = () => {
  return (
    <div className="index-container">
      <div className="index-header-container">
        <div className="index-header-content">
          <a className="index-header-logo">
            <div>Open Api</div>
            <div>🌴 Huangrx</div>
          </a>
          <div className="index-header-menu">
            <div className="index-header-menu__item">文档</div>
            <div>🍥</div>
            <div className="index-header-menu__item">联系我们</div>
            <div>🍥</div>
            <Link className="index-header-menu__item index-header-menu__login" to={'/user/login'}>
              登录
            </Link>
          </div>
        </div>

        <div className="index-header-wave__container">
          <div className="index-header-wave"></div>
        </div>
      </div>

      <div className="index-first-part">123</div>
    </div>
  );
};
export default Index;
