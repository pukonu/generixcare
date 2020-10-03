import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { ContentBoxWrapper } from './styles';

const ContentBoxWithLink: FunctionComponent<any> = ({ uid, title, image, excerpt }) => {
  return (
    <ContentBoxWrapper>
      {!!image && (
        <Link to={`/latest-news/${uid}`} className="inline-block">
          <img src={image.url} className="w-full h-auto object-cover mb-2" alt={image.alt} />
        </Link>
      )}

      {!!title && (
        <h2 className="title font-secondary">
          <Link to={`/latest-news/${uid}`}>{title}</Link>
        </h2>
      )}

      {!!excerpt && (
        <div>
          {excerpt}
          <Link to={`/latest-news/${uid}`} className="readMoreLink">
            ...read more
          </Link>
        </div>
      )}
    </ContentBoxWrapper>
  );
};

export default ContentBoxWithLink;
