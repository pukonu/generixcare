/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';

import { OurValuesType } from 'src/models/graphql/page';
import ContentBox from '../ContentBox';

const OurValues: FunctionComponent<OurValuesType> = ({ items }) => {
  return (
    <div className="flex flex-wrap md:-mx-4">
      {!!items.length &&
        items.map((item) => {
          return (
            !!item.title && (
              <div key={item.title} className="w-full md:w-1/2 lg:w-1/3 md:px-4">
                <ContentBox title={item.title} image={item.image} content={item.content} />
              </div>
            )
          );
        })}
    </div>
  );
};
export default OurValues;
