import React from 'react';
import '../styles/SwipeGalleryExample.css';
import catImage from '../images/cat.jpg';
import houseImage from '../images/house.jpg';
import poolImage from '../images/pool.jpg';

const SwipeGalleryExample = () => {
  // Image data with IDs
  const images = [
    { id: 'a1', src: houseImage, alt: 'House' },
    { id: 'a3', src: poolImage, alt: 'House with Pool' },
    { id: 'a7', src: catImage, alt: 'Cat' },
  ];

  return (
    <div className="scrollable-gallery">
      {images.map((image) => (
        <a key={image.id} href={`#${image.id}`} id={image.id} className="gallery-item">
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </a>
      ))}
    </div>
  );
};

export default SwipeGalleryExample;
