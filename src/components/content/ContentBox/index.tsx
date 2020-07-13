import React, { FunctionComponent } from 'react';

import { ContentBoxProps } from 'src/interfaces';
import { ContentBoxWrapper } from './styles';

const ContentBox: FunctionComponent<ContentBoxProps & { className?: string }> = ({
  title,
  image,
  content,
  children,
  className
}) => {
  const { html } = content;

  return (
    <ContentBoxWrapper className={className}>
      {!!image && (
        <img src={image.url} className="w-full h-auto object-cover mb-2" alt={image.alt} />
      )}
      <h2 className="title font-secondary">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>{children}</div>
    </ContentBoxWrapper>
  );
};

export default ContentBox;
