import React, { FunctionComponent } from 'react';

import { QualityAssuranceType } from 'src/models/graphql/page';

const QualityAssurance: FunctionComponent<QualityAssuranceType> = ({ name, image, content }) => {
  return (
    <div className="flex flex-wrap lg:-mx-4">
      {!!image && (
        <div className="w-full lg:w-1/3 lg:px-4">
          <img className="w-full max-w-md h-auto object-cover" src={image.url} alt={image.alt} />
        </div>
      )}

      <div className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:px-4">
        {!!name && <h2 className="mb-2">{name}</h2>}
        {!!content && <div dangerouslySetInnerHTML={{ __html: content.html }} />}
      </div>
    </div>
  );
};

export default QualityAssurance;
