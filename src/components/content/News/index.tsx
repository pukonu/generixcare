import React, { FunctionComponent } from 'react';

import ContentBoxWithLink from '../ContentBoxWithLink';

const News: FunctionComponent<{ data: any }> = ({ data = [] }) => {
  return (
    <div className="flex flex-wrap md:-mx-4">
      {data.map((el: any) => {
        const {
          uid,
          data: { excerpt, image, title }
        } = el.node;

        return (
          <div key={title} className="w-full md:w-1/2 lg:w-1/3 md:px-4 mb-4">
            <ContentBoxWithLink uid={uid} title={title} image={image} excerpt={excerpt} />
          </div>
        );
      })}
    </div>
  );
};

export default News;
