import React, { useEffect, useRef, useState } from 'react';
import './caroussel.css';
import CarouselItem from './CarousselItem';

export type BingCarousselProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    loop?: boolean; 
    autoplay?: boolean;
    autoplaySpeed?: number;
    asyncLoad? : Function;
    expandedWidth?: number;
    expandedHeight?: number;
}

type NavigationProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

function Navigation({ onPrevClick, onNextClick, hasPrev, hasNext }: NavigationProps) {
  return (
    <div className="carousel-nav">
      {hasPrev && (
        <button onClick={onPrevClick}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
          </svg>
        </button>
      )}
      {hasNext && (
        <button onClick={onNextClick}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
          </svg>
        </button>
      )}
    </div>
  );
}
function BingCaroussel( { className, style, children, loop, autoplay, autoplaySpeed, asyncLoad, expandedWidth, expandedHeight }: BingCarousselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const items = Array.from(Array(20).keys());
    const carousel = useRef<HTMLDivElement>(null);
    const itemWidth = expandedWidth || 130; // default item width
  
    const handlePrevClick = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        if (carousel.current) {
          carousel.current.style.transform = `translateX(-${(currentIndex - 1) * itemWidth}px)`;
        }
      } else if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        if (carousel.current) {
          carousel.current.style.transform = `translateX(-${currentPage * itemsPerPage * itemWidth}px)`;
        }
      }
    };
  
    const handleNextClick = () => {
      if (currentIndex < (currentPage + 1) * itemsPerPage - 1 && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
        if (carousel.current) {
          carousel.current.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
        }
      } else if (currentPage < Math.ceil(items.length / itemsPerPage) - 1) {
        setCurrentPage(currentPage + 1);
        if (carousel.current) {
          carousel.current.style.transform = `translateX(-${(currentPage + 1) * itemsPerPage * itemWidth}px)`;
        }
      } else if (loop) {
        setCurrentPage(0);
        setCurrentIndex(0);
        if (carousel.current) {
          carousel.current.style.transform = `translateX(0)`;
        }
      }
    };
  
    const hasPrev = currentIndex > 0 || currentPage > 0;
    const hasNext = currentIndex < items.length - 1 || currentPage < Math.ceil(items.length / itemsPerPage) - 1;
  
    useEffect(() => {
      if (carousel.current) {
        carousel.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    }, [currentIndex, itemWidth]);
  
    return (
      <div className="carousel-wrapper">
        <div className="carousel" ref={carousel}>
          {items.map((item, index) => {
            return (
              <CarouselItem
                key={index}
              />
            );
          })}
        </div>
        <Navigation onPrevClick={handlePrevClick} onNextClick={handleNextClick} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    );
  }

export default BingCaroussel;