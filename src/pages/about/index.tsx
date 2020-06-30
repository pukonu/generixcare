import React from 'react';

import { Layout } from 'src/components';

const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'About Us' }];

const About = () => {
  return (
    <Layout seoTitle="About Us" pageTitle="About Us" breadcrumbsData={breadcrumbsData}>
      <h3>Our Values</h3>
    </Layout>
  );
};

export default About;
