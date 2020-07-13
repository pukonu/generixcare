import React, { FunctionComponent } from 'react';

import { GlobalPageType, AreaType } from 'src/models/graphql/page';
import ContentBox from '../ContentBox';
import Table from '../../surfaces/Table';

const Areas: FunctionComponent<GlobalPageType> = ({ data }) => {
  const content = data?.allPrismicAreas?.edges[0]?.node?.data as AreaType | null;

  if (!content?.name) return null;

  const dummyContent: any = { content: { html: '', title: { text: '' } } };
  return (
    <ContentBox title={content.name} content={dummyContent}>
      {!!content.image && (
        <div className="mb-4">
          <img
            className="w-full h-auto object-cover"
            src={content.image.url}
            alt={content.image.alt}
          />

          {!!content?.items &&
            content.items.map(({ borough, towns }) => {
              return (
                <div key={borough} className="mb-10">
                  <h3 className="mb-2">{borough}</h3>
                  {!!towns && <Table data={towns.split(',')} />}
                </div>
              );
            })}
        </div>
      )}
    </ContentBox>
  );
};

export default Areas;
