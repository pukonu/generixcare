import React from 'react';

import { areas } from 'src/data/areasWeCover';
import { ContentBox, Layout, Table } from 'src/components';
import img from 'src/images/generix-map-graphic.jpg';

const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'Areas We Cover' }];

const AreasWeCover = () => {
  return (
    <Layout seoTitle="Areas We Cover" pageTitle="Areas We Cover" breadcrumbsData={breadcrumbsData}>
      <ContentBox title="Areas We Cover">
        <div className="mb-4">
          <img className="w-full h-auto object-cover" src={img} alt="map" />
        </div>

        {areas.map(({ title, areas: secAreas }) => {
          return (
            <div key={title} className="mb-10">
              <h3 className="mb-2">{title}</h3>
              {secAreas && <Table data={secAreas} />}
            </div>
          );
        })}
      </ContentBox>
    </Layout>
  );
};

export default AreasWeCover;
