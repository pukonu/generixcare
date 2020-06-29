import React from 'react';

import { Layout } from 'src/components';

const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'Contact Us' }];

const Contact = () => (
  <Layout seoTitle="Contact Us" pageTitle="Contact Us" breadcrumbsData={breadcrumbsData}>
    <div>Test</div>
  </Layout>
);

export default Contact;
