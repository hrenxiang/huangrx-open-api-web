import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  url: string;
  borderRadius?: string;
  width?: string;
  height?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ url, borderRadius, width, height }) => {
  return (
    <LazyLoadImage
      src={url}
      style={{
        objectFit: 'cover',
        borderRadius: borderRadius ? borderRadius : 'none',
        width: width ? width : '100%',
        height: height ? height : '100%',
      }}
      alt="Image"
      effect="blur"
    />
  );
};

export default LazyImage;
