import React, { FunctionComponent } from 'react';

import gradiant from 'src/images/gradiant.png';
import { PageTitleWrapper } from './styles';

const PageTitle: FunctionComponent = () => {
  return (
    <PageTitleWrapper bckImg={gradiant}>
      <div className="container">
        <h2 className="title font-secondary">Contact Us</h2>
      </div>
    </PageTitleWrapper>
  );
};

export default PageTitle;
