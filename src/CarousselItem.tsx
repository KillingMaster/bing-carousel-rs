import React from 'react';
import './caroussel-item.css';
import wave from './wave.jpg'


function CarouselItem() {
  return (
    <div className="carousel-item">
      <div className="carousel-item-image">
        <img src={wave} alt="carousel-item" />
      </div>
      <div className="item-data">
        <div className="card-title">Carousel Item Title</div>
        <div className='item-info'>
        <div className="item-info-left">
          <div className="item-icon">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            </svg>
          </div>
          <div className="item-note">Note 1</div>
        </div>
        <div className="item-info-right">
          <div className="item-icon">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            </svg>
          </div>
          <div className="item-note">Note 2</div>
        </div> 
        </div>
      </div>
    </div>
  );
}
export default CarouselItem;
