import React from 'react';
import '@/components/Dragging/index.less';

interface Position {
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

const Draggable: React.FC<Position> = ({ x, y, opacity, scale }) => {
  return (
    <div className="draggable">
      <div className="draggable-body">
        <div
          className="draggable-dot"
          style={{
            transform: `translate(${x - 4}px, ${y - 4}px) scale(${scale})`,
            opacity: opacity,
          }}
        ></div>
        <div
          className="draggable-circle"
          style={{
            transform: `translate(${x - 12}px, ${y - 12}px) scale(${scale})`,
            opacity: opacity,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Draggable;
