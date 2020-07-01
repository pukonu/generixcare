import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SlideItemProps } from 'src/interfaces';
import { SlideItemWrapper } from './styles';

const SlideItem: FunctionComponent<SlideItemProps> = ({
  title,
  link,
  image,
  index = 0,
  count = 0,
  goTo = () => null,
  nextSlide = () => null,
  prevSlide = () => null
}) => {
  const dots = Array.from({ length: count }).map((_, i) => (
    <li key={i} className="dots">
      <button type="button" onClick={() => goTo(i)}>
        {index === i ? <span className="dot" /> : <span />}
      </button>
    </li>
  ));

  return (
    <SlideItemWrapper>
      <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
        <div className="title-wrapper">
          <h1 className="font-secondary font-light mb-3">{title}</h1>
          <div>
            <Link to={link} className="slide-link">
              Learn More
            </Link>
          </div>
        </div>

        <div className="controls-wrapper p-5 flex-1 flex items-center justify-between relative">
          <button className="controls-btn" type="button" onClick={prevSlide}>
            <FontAwesomeIcon icon="angle-left" size="2x" />
          </button>
          <button className="controls-btn" type="button" onClick={nextSlide}>
            <FontAwesomeIcon icon="angle-right" size="2x" />
          </button>

          <div className="absolute bottom-0 right-0 p-5">
            <ul>{dots}</ul>
          </div>
        </div>
      </div>

      <img src={image} alt={title} />
    </SlideItemWrapper>
  );
};

export default SlideItem;
