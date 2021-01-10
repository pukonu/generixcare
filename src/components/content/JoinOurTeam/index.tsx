/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent } from 'react';

import { JoinOurTeamType } from 'src/models/graphql/page';
import { JoinOurTeamWrapper } from './styles';

const JoinOurTeam: FunctionComponent<JoinOurTeamType> = ({
  button_link = {},
  content = {},
  image = {}
}) => {
  return (
    <JoinOurTeamWrapper>
      {!!image && (
        <div
          style={{ backgroundImage: `url(${image.url})` }}
          className="-mx-4 -mt-5 h-48 bg-cover bg-center bg-no-repeat"
        />
      )}

      <h2 className="my-4">Join Our Team</h2>

      {!!content && (
        <div className="w-full lg:w-2/3" dangerouslySetInnerHTML={{ __html: content.html }} />
      )}

      {!!button_link && (
        <div className="text-center mt-10">
          <a href={button_link.url} className="link">
            Join our team
          </a>
        </div>
      )}
    </JoinOurTeamWrapper>
  );
};

export default JoinOurTeam;
