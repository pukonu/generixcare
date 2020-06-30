import React, { FunctionComponent } from 'react';

import { ContentBoxProps } from 'src/interfaces';
import { ContentBoxWrapper } from './styles';

const ContentBox: FunctionComponent<ContentBoxProps> = ({ title, children, className = '' }) => {
  return (
    <ContentBoxWrapper className={className}>
      <h2 className="title font-secondary">{title}</h2>
      {children}
    </ContentBoxWrapper>
  );
};

export default ContentBox;
