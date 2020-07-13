import React, { FunctionComponent } from 'react';

import { ContentBoxProps } from 'src/interfaces';
import { ContentBoxWrapper } from './styles';

const ContentBox: FunctionComponent<ContentBoxProps> = ({ title, content, image }) => {
  const { html } = content;

  return (
    <ContentBoxWrapper>
      {!!image && (
        <img src={image.url} className="w-full h-auto object-cover mb-2" alt={image.alt} />
      )}
      <h2 className="title font-secondary">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ContentBoxWrapper>
  );
};

export default ContentBox;
