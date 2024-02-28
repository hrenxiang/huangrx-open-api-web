import '@umijs/max';
import React, { useState } from 'react';
import './index.less';
import { Link } from '@umijs/max';
import Draggable from '@/components/Dragging';
import { Carousel, Divider } from 'antd';
import LazyImage from '@/components/LazyImage';

import GongXuFang from '@/assets/image/svg/gongxufang.svg';
import FuWuShang from '@/assets/image/svg/fuwushaang.svg';
import GuaPaiChanPing from '@/assets/image/svg/guapaichanping.svg';
import ShangJiaFuWu from '@/assets/image/svg/shangjiafuwu.svg';
import FaBuXuQiu from '@/assets/image/svg/fanuxuqiu.svg';
import CanJiaHuoDong from '@/assets/image/svg/canjiahuodong.svg';
import XiBu from '@/assets/image/png/西部.png';
import Reading from '@/assets/image/png/reading.png';
import { DefaultFooter, ProColumns, ProTable } from '@ant-design/pro-components';

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

  const defaultMessage = '豫ICP备2022017977号';
  const currentYear = new Date().getFullYear();

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

        <div className="index-body-trading">
          <div className="index-body-item__header index-body-item__carry_more">
            <span className="index-body-item__title">API交易</span>
            <span className="index-body-item__more">{'查看更多 >'}</span>
          </div>
          <div className="index-body-trading__content"></div>
        </div>

        <div className="index-body-second">
          <div className="index-body-second__item">
            <div className="index-body-item__header">
              <span className="index-body-item__title">热点新闻</span>
            </div>
            <div className="index-body-second__second-content">
              <div className="index-body-second__second-item">
                <span>1</span>
                <span>汝之所欲，吾之所欲也汝之所欲，吾之所欲也</span>
              </div>
              <div className="index-body-second__second-item">
                <span>2</span>
                <span>汝之所欲，吾之所欲也汝之所欲，吾之所欲也</span>
              </div>
              <div className="index-body-second__second-item">
                <span>3</span>
                <span>汝之所欲，吾之所欲也汝之所欲，吾之所欲也</span>
              </div>
              <div className="index-body-second__second-item">
                <span>4</span>
                <span>汝之所欲，吾之所欲也汝之所欲，吾之所欲也</span>
              </div>
              <div className="index-body-second__second-item">
                <span>5</span>
                <span>汝之所欲，吾之所欲也汝之所欲，吾之所欲也</span>
              </div>
            </div>
          </div>
          <div className="index-body-second__item">
            <div className="index-body-item__header index-body-item__carry_more">
              <span className="index-body-item__title">行业资讯</span>
              <span className="index-body-item__more">{'查看更多 >'}</span>
            </div>
            <div className="index-body-second__content">
              <div>
                <LazyImage url="https://picsum.photos/1920/1080?21" borderRadius="1.2rem" />
              </div>
              <div className="index-body-second-content__list">
                <span>汝之所欲，吾之所欲也汝之所欲，吾之所欲也</span>
                <span>汝之所欲，吾之所欲也 123123123</span>
                <span>汝之所欲，吾之所欲也</span>
                <span>汝之所欲，吾之所欲也</span>
                <span>汝之所欲，吾之所欲也</span>
              </div>
            </div>
          </div>
        </div>

        <div className="index-body-three">
          <div className="index-body-item__header index-body-item__carry_more">
            <span className="index-body-item__title">网站活动</span>
            <span className="index-body-item__more">{'查看更多 >'}</span>
          </div>
          <div className="index-body-three__content">
            <div>
              <LazyImage url="https://picsum.photos/1920/1080?11" borderRadius="1.2rem" />
            </div>
            <div className="index-body-three-content__two">
              <div className="index-body-three-content-two__item">
                <LazyImage url="https://picsum.photos/1920/1080?12" borderRadius="1.2rem" />
              </div>
              <div className="index-body-three-content-two__item">
                <LazyImage url="https://picsum.photos/1920/1080?13" borderRadius="1.2rem" />
              </div>
            </div>
            <div className="index-body-three-content__two">
              <div className="index-body-three-content-two__item">
                <LazyImage url="https://picsum.photos/1920/1080?14" borderRadius="1.2rem" />
              </div>
              <div className="index-body-three-content-two__item">
                <LazyImage url="https://picsum.photos/1920/1080?15" borderRadius="1.2rem" />
              </div>
            </div>
          </div>
        </div>

        <div className="index-body-fourth">
          <div className="index-body-item__header">
            <span className="index-body-item__title">合作联盟</span>
          </div>
          <div className="index-body-fourth__content">
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
            <div className="index-fourth-content__item">
              <LazyImage url={XiBu} height="2rem" />
            </div>
          </div>
        </div>
      </div>

      <div className="index-footer-container">
        <Divider style={{ margin: '2rem 0' }} />
        <div className="index-footer-container__first">
          <div className="index-footer-first__one">
            <span>API开放交易平台</span>
            <span>邮箱：huang.rx.life@hotmail.com</span>
            <span>地址：郑州中原数据产业大厦</span>
            <div className="index-footer-first__qrcode">
              <div className="index-footer-qrcode__item">
                <LazyImage url={Reading} width="5rem" height="5rem" />
                <span>订阅号 - 数交所</span>
              </div>
              <div className="index-footer-qrcode__item">
                <LazyImage url={Reading} width="5rem" height="5rem" />
                <span>服务号 - 数交所</span>
              </div>
            </div>
          </div>
          <div className="index-footer-first-two__item">
            <span className="index-footer-first-two__title">关于我们</span>
            <div className="index-footer-first-two__content">
              <span>中心简介</span>
              <span>新闻资讯</span>
              <span>中心公告</span>
              <span>招聘信息</span>
            </div>
          </div>
          <div className="index-footer-first-two__item">
            <span className="index-footer-first-two__title">业务服务</span>
            <div className="index-footer-first-two__content">
              <span>API大厅</span>
              <span>API登记</span>
              <span>API交易</span>
            </div>
          </div>
        </div>
        <div className="index-footer-container__second">
          <DefaultFooter
            style={{
              background: 'none',
            }}
            copyright={`${currentYear} ${defaultMessage}`}
          />
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
