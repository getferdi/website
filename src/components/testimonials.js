import React from 'react';
import * as Icon from 'react-feather';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = ({ slides }) => (
  <Carousel
    className={'testimonials'}
    showStatus={false}
    infiniteLoop
    autoPlay
    renderArrowPrev={(onClickHandler, hasPrev, label) => (
      <button type="button" aria-label={label} onClick={onClickHandler} className="arrow arrow-left">
        <Icon.ChevronLeft />
      </button>
    )}
    renderArrowNext={(onClickHandler, hasPrev, label) => (
      <button type="button" aria-label={label} onClick={onClickHandler} className="arrow arrow-right">
        <Icon.ChevronRight />
      </button>
    )}
  >
    {slides.map((slide) => (
      <div className="testimonials-item">
        <p>"{slide.text}"</p>
        <div className="testimonials-user">
          {slide.logo && (
            <div>
              <img src={slide.logo} className="testimonials-icon" alt="Logo Testimonial publisher" />
            </div>
          )}
          <div>
            <div className="testimonials-name">
              <a href={slide.link}>{slide.name}</a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Testimonials;
