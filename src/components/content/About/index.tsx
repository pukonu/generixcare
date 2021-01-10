/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';
import SlickSlider from 'react-slick';

import { AboutContentType } from 'src/models/graphql/page';

const settings = {
  speed: 500,
  dots: false,
  // fade: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const About: FunctionComponent<AboutContentType> = ({
  image,
  content,
  items,
  testimonials = []
}) => {
  return (
    <div className="about-comp">
      <div className="flex flex-wrap lg:-mx-4">
        {!!image && (
          <div className="w-full lg:w-1/3 lg:px-4">
            <img className="w-full max-w-md h-auto object-cover" src={image.url} alt={image.alt} />
          </div>
        )}

        {!!content && (
          <div
            className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:px-4"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        )}
      </div>

      {!!items && (
        <div className="flex flex-wrap items-center mt-8">
          {items.map(({ logo }, i) => {
            return (
              <div key={i} className="mb-2 w-full md:w-1/2 lg:w-1/4">
                <img
                  src={logo.url}
                  className="max-w-full h-auto lg:h-16 object-cover lg:object-contain lg:mx-auto"
                  alt={logo.alt}
                />
              </div>
            );
          })}
        </div>
      )}

      {!!testimonials.length && (
        <div className="mt-16">
          <h3 className="text-center">Testimonials</h3>

          <div className="w-full max-w-md overflow-hidden mx-auto">
            <SlickSlider {...settings}>
              {testimonials.map(({ title, testimonial_content, testimonial_image }, i) => (
                <div key={i} className="text-center">
                  <div
                    style={{ backgroundImage: `url(${testimonial_image.url})` }}
                    className="my-5  h-24 w-24 rounded-full mx-auto bg-cover bg-center bg-no-repeat"
                  />

                  <div className="italic">"{testimonial_content.text}"</div>

                  <div className="mt-2 font-semibold">- {title.text}</div>
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
