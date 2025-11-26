import React, { useState } from 'react';
import { getImageUrl, handleImageError } from '../utils/imageUtils.js';

function ImageLoader({ 
  src, 
  fallbackKey, 
  alt, 
  className, 
  style,
  onLoad,
  onError 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    handleImageError(e, fallbackKey);
    onError?.(e);
  };

  const imageUrl = hasError ? getImageUrl(null, fallbackKey) : getImageUrl(src, fallbackKey);

  return (
    <div className={`image-container ${className || ''}`} style={style}>
      {isLoading && (
        <div className="image-skeleton">
          <div className="skeleton-loader"></div>
        </div>
      )}
      <img
        src={imageUrl}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          ...style 
        }}
      />
    </div>
  );
}

export { ImageLoader };
export default ImageLoader;