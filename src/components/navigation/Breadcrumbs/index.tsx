import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbsProps } from 'src/interfaces';
import { BreadcrumbsWrapper } from './styles';

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ data }) => {
  return (
    <BreadcrumbsWrapper className="container">
      <ol>
        {data.map(({ title, slug }, i) => {
          return (
            <li key={title} className="breadcrumb">
              {i !== 0 && (
                <FontAwesomeIcon className="mx-2" icon="angle-right" color="#ccc" size="sm" />
              )}
              {slug ? <Link to={slug}>{title}</Link> : title}
            </li>
          );
        })}
      </ol>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
