/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';

import { AboutContentType } from 'src/models/graphql/page';

const About: FunctionComponent<AboutContentType> = ({ image, content, items }) => {
  return (
    <>
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
                  className="max-w-sm lg:max-w-full h-auto lg:h-16 object-cover lg:object-contain lg:mx-auto"
                  alt={logo.alt}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default About;
