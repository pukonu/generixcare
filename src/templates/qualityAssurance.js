import React from 'react';

import { Layout } from 'src/components';

const QualityAssurance = ({ pageContext }) => {
  const { title, image, html } = pageContext;

  const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'Q A' }, { title }];
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Layout seoTitle={title} pageTitle={title} breadcrumbsData={breadcrumbsData}>
      <div className="flex flex-wrap lg:-mx-4">
        <div className="w-full lg:w-1/3 lg:px-4">
          <img className="w-full max-w-md h-auto object-cover" src={image} alt="about us" />
        </div>

        <div className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:px-4">
          <h2 className="mb-2">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
};

export default QualityAssurance;
