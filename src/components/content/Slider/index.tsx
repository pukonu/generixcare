/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent, useState } from 'react';
import SlickSlider from 'react-slick';

import { PageSliceSlidingHero } from 'src/models/graphql/page';
import SlideItem from '../SlideItem';

const plainSettings = {
  speed: 500,
  dots: false,
  fade: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slider: FunctionComponent<PageSliceSlidingHero> = ({ items }) => {
  const [ref, setRef] = useState<any>(null);
  const [index, setIndex] = useState<number>(0);

  const settings = {
    ...plainSettings,
    beforeChange: (_: any, next: number) => setIndex(next)
  };

  return (
    <div className="-mx-4 -mt-5">
      <div className="max-w-full overflow-hidden">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <SlickSlider ref={(slickEl) => setRef(slickEl)} {...settings}>
          {items.map(({ title, button_link, sliding_image }, i: number) => {
            return (
              <SlideItem
                key={i}
                index={index}
                title={title.text}
                link={button_link}
                count={items.length}
                goTo={ref?.slickGoTo}
                image={sliding_image}
                nextSlide={ref?.slickNext}
                prevSlide={ref?.slickPrev}
              />
            );
          })}
        </SlickSlider>
      </div>
    </div>
  );
};

export default Slider;
