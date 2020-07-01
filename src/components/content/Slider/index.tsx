import React, { FunctionComponent, useState, Children, isValidElement, cloneElement } from 'react';
import SlickSlider from 'react-slick';

const plainSettings = {
  speed: 500,
  dots: false,
  fade: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slider: FunctionComponent = ({ children }) => {
  const [ref, setRef] = useState<any>(null);
  const [index, setIndex] = useState<number>(0);
  const count = Children.count(children);

  const settings = {
    ...plainSettings,
    beforeChange: (_, next: number) => setIndex(next)
  };

  return (
    <div className="max-w-full overflow-hidden">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SlickSlider ref={(slickEl) => setRef(slickEl)} {...settings}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              count,
              index,
              goTo: ref?.slickGoTo,
              nextSlide: ref?.slickNext,
              prevSlide: ref?.slickPrev
            });
          }

          return null;
        })}
      </SlickSlider>
    </div>
  );
};

export default Slider;
