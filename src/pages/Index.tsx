import '@umijs/max';
import React, { useState } from 'react';
import './index.less';
import { Link } from '@umijs/max';
import Draggable from '@/components/Dragging';
import { Carousel } from 'antd';

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
      </div>

      <div className="index-body-container">
        <div className="index-body-first">
          <div className="index-first-part__one">
            <Carousel autoplay>
              <div>
                <img
                  src={'https://picsum.photos/700/410?1'}
                  style={{ width: '100%', height: '100%' }}
                  alt={''}
                />
              </div>
              <div>
                <img
                  src={'https://picsum.photos/700/410?2'}
                  style={{ width: '100%', height: '100%' }}
                  alt={''}
                />
              </div>
              <div>
                <img
                  src={'https://picsum.photos/700/410?3'}
                  style={{ width: '100%', height: '100%' }}
                  alt={''}
                />
              </div>
            </Carousel>
          </div>
          <div className="index-first-part__two">
            <div className="index-first-two__one">123</div>
            <div className="index-first-two__two">123</div>
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
