import React from 'react';

import { ContentBox, Layout } from 'src/components';

const HowWeWork = ({ pageContext }) => {
  const { title, html } = pageContext;

  const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'How We Work' }, { title }];
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Layout seoTitle={title} pageTitle={title} breadcrumbsData={breadcrumbsData}>
      <ContentBox title={title}>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </ContentBox>
    </Layout>
  );
};

export default HowWeWork;
