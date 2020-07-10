import React, { FunctionComponent } from 'react';

import { NewsletterWrapper } from './styles';

const NewsletterContainer: FunctionComponent = ({ children }) => {
  return <NewsletterWrapper>{children}</NewsletterWrapper>;
};

export default NewsletterContainer;
