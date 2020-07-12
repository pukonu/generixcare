import React, { FunctionComponent } from 'react';

import gradiant from 'src/images/gradiant.png';
import { PageTitleProps } from 'src/interfaces';
import { PageTitleWrapper } from './styles';

const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => {
  return (
    <PageTitleWrapper bckImg={gradiant}>
      <div className="container">
        <h2 className="title font-secondary capitalize">{title}</h2>
      </div>
    </PageTitleWrapper>
  );
};

export default PageTitle;
