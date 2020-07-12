import React, { FunctionComponent } from 'react';

import { NewsletterForm } from 'src/components';
import { PageSliceNewsletter } from 'src/models/graphql/page';
import { NewsletterWrapper } from './styles';

const NewsletterContainer: FunctionComponent<PageSliceNewsletter> = ({ primary }) => {
  return (
    <NewsletterWrapper>
      <NewsletterForm primary={primary} />
    </NewsletterWrapper>
  );
};

export default NewsletterContainer;
