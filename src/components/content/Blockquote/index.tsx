import React, { FunctionComponent } from 'react';

import { PageSliceBlockQuote } from 'src/models/graphql/page';
import { BlockquoteWrapper } from './styles';

const Blockquote: FunctionComponent<PageSliceBlockQuote> = ({ primary }) => {
  const { content } = primary;
  return <BlockquoteWrapper dangerouslySetInnerHTML={{ __html: content.html }} />;
};

export default Blockquote;
