'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

const images = [
  '/image/img1.jpg',
  '/image/img2.jpg',
  '/image/img3.jpg',
  '/image/img4.jpg',
  '/image/img5.jpg',
];

export function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Automatic slide change
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='relative w-full'>
      <div className='overflow-hidden rounded-lg relative h-[450px]'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full'
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full'
      >
        &#8594;
      </button>

      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
