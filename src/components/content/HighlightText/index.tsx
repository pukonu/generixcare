import React, { FunctionComponent } from 'react';

import { PageSliceHighlight } from 'src/models/graphql/page';
import { HighlightTextWrapper } from './styles';

const HighlightText: FunctionComponent<PageSliceHighlight> = ({ primary }) => {
  const { content } = primary;

  return <HighlightTextWrapper dangerouslySetInnerHTML={{ __html: content.html }} />;
};

export default HighlightText;
