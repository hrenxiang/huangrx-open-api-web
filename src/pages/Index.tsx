import '@umijs/max';
import React, { useState } from 'react';
import './index.less';
import { Link } from '@umijs/max';
import Draggable from '@/components/Dragging';
import { Carousel } from 'antd';
import LazyImage from '@/components/LazyImage';

import GongXuFang from '@/assets/image/svg/gongxufang.svg';
import FuWuShang from '@/assets/image/svg/fuwushaang.svg';
import GuaPaiChanPing from '@/assets/image/svg/guapaichanping.svg';
import ShangJiaFuWu from '@/assets/image/svg/shangjiafuwu.svg';
import FaBuXuQiu from '@/assets/image/svg/fanuxuqiu.svg';
import CanJiaHuoDong from '@/assets/image/svg/canjiahuodong.svg';
import {ProColumns, ProTable} from "@ant-design/pro-components";

const Index: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
    opacity: number;
    scale: number;
  }>({
    x: 0,
    y: 0,
    opacity: 0,
    scale: 1,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY, opacity: 1, scale: mousePosition.scale });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, opacity: 0, scale: mousePosition.scale });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY, opacity: 1, scale: 0.8 });
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY, opacity: 1, scale: 1 });
  };

  const developmentIndexColumns: ProColumns<API.DevelopmentIndex>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      ellipsis: true,
      editable: false,
    },
    {
      title: '城市',
      dataIndex: 'city',
      ellipsis: true,
      editable: false,
    },
    {
      title: '指数',
      dataIndex: 'score',
      ellipsis: true,
      editable: false,
    },
  ];

  return (
    <div
      className="index-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="index-header-container">
        <div className="index-header-content">
          <a className="index-header-logo">
            <div>Open Api 🌴</div>
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
      </div>

      <div className="index-body-container">
        <div className="index-body-first">
          <div className="index-first-part__one">
            <Carousel autoplay>
              <div>
                <LazyImage url="https://picsum.photos/1920/1080?1" borderRadius="1.2rem" />
              </div>
              <div>
                <LazyImage url="https://picsum.photos/1920/1080?2" borderRadius="1.2rem" />
              </div>
              <div>
                <LazyImage url="https://picsum.photos/1920/1080?3" borderRadius="1.2rem" />
              </div>
            </Carousel>
          </div>
          <div className="index-first-part__two">
            <div className="index-first-two__one">
              <span>数据要素市场发展指数</span>
              <ProTable<API.DevelopmentIndex>
                name="developmentIndex"
                rowKey="key"
                search={false}
                options={false}
                loading={false}
                bordered={true}
                pagination={false}
                style={{
                  width: '100%',
                }}
                cardBordered={false}
                columns={developmentIndexColumns}
              />
            </div>
            <div className="index-first-two__two">
              <div className="index-first-two__item">
                <img src={GongXuFang} alt="" />
                <span>成为供需方</span>
              </div>
              <div className="index-first-two__item">
                <img src={FuWuShang} alt="" />
                <span>成为服务商</span>
              </div>
              <div className="index-first-two__item">
                <img src={GuaPaiChanPing} alt="" />
                <span>我要挂牌产品</span>
              </div>
              <div className="index-first-two__item">
                <img src={ShangJiaFuWu} alt="" />
                <span>我要上架服务</span>
              </div>
              <div className="index-first-two__item">
                <img src={FaBuXuQiu} alt="" />
                <span>我要发布需求</span>
              </div>
              <div className="index-first-two__item">
                <img src={CanJiaHuoDong} alt="" />
                <span>我要参加活动</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Draggable
        x={mousePosition.x}
        y={mousePosition.y}
        opacity={mousePosition.opacity}
        scale={mousePosition.scale}
      />
    </div>
  );
};
export default Index;
