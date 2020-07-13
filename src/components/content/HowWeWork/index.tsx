import React, { FunctionComponent } from 'react';

import { HowWeWorkType } from 'src/models/graphql/page';
import ContentBox from '../ContentBox';

const HowWeWork: FunctionComponent<HowWeWorkType> = ({ name, content }) => {
  return <ContentBox title={name} content={content} />;
};

export default HowWeWork;
