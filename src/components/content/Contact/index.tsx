/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContactType } from 'src/models/graphql/page';
import ContentBox from '../ContentBox';

const Contact: FunctionComponent<ContactType> = ({
  google_map,
  address,
  phone,
  email,
  website,
  opening_hours,
  job_openings
}) => {
  return (
    <>
      {!!google_map && (
        <div>
          <iframe
            width="100%"
            height="320"
            frameBorder="0"
            allowFullScreen
            title="40 Upper George St, Luton LU1 2RS"
            src={google_map}
          />
        </div>
      )}

      <div className="pt-2 flex flex-wrap">
        {!!address && (
          <ContentBox
            content={address}
            title="Office & Postal Address"
            className="w-full lg:w-5/12 lg:pr-12"
          >
            <ul className="mt-6 leading-7">
              {!!phone && (
                <li>
                  <FontAwesomeIcon icon="phone-alt" className="mr-2" />
                  Tel: {phone}
                </li>
              )}

              {!!email && (
                <li>
                  <FontAwesomeIcon icon={['far', 'envelope']} className="mr-2" />
                  <a href={`mailto:${email}`} className="text-color-primary">
                    {email}
                  </a>
                </li>
              )}

              {!!website && (
                <li>
                  <FontAwesomeIcon icon="globe-europe" className="mr-2" />
                  <a href={website} className="text-color-primary">
                    {website}
                  </a>
                </li>
              )}
            </ul>
          </ContentBox>
        )}

        {!!opening_hours && (
          <ContentBox title="Opening Hours" content={opening_hours} className="w-full lg:w-5/12" />
        )}

        {!!job_openings && !!job_openings.text && (
          <div className="pt-8">
            <h2 className="font-medium">Job Openings</h2>
            <div dangerouslySetInnerHTML={{ __html: job_openings.html }} />
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
