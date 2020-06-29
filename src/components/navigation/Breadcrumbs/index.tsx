import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbsWrapper } from './styles';

const Breadcrumbs: FunctionComponent = () => {
  return (
    <BreadcrumbsWrapper className="container">
      <ol>
        <li className="breadcrumb">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb">
          <FontAwesomeIcon className="mx-2" icon="angle-right" color="#ccc" size="sm" />
          Contact Us
        </li>
      </ol>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
