import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterProps } from 'src/interfaces';
import { FooterWrapper } from './styles';

const Footer: FunctionComponent<FooterProps> = ({ navItems }) => {
  const nav = navItems
    .filter(({ primary }) => primary.path)
    .map(({ primary }) => {
      const { label, path } = primary;
      return (
        <li key={label} className="inline-block pr-4 md:pr-5 py-4">
          <Link to={path}>{label}</Link>
        </li>
      );
    });

  return (
    <FooterWrapper>
      <div className="container">
        <ul className="text-center md:text-left">{nav}</ul>
      </div>

      <a href="#">
        <button className="backTop" type="button">
          <FontAwesomeIcon icon="angle-up" size="2x" />
        </button>
      </a>
    </FooterWrapper>
  );
};

export default Footer;
