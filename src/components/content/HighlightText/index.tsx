import React, { FunctionComponent } from 'react';

import { HighlightTextWrapper } from './styles';

const HighlightText: FunctionComponent = ({ children }) => {
  return <HighlightTextWrapper>{children}</HighlightTextWrapper>;
};

export default HighlightText;
