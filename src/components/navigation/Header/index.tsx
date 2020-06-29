import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'src/images/logo.png';
import { HeaderProps } from 'src/interfaces';
import { socialLinks } from 'src/data/socialLinks';
import { HeaderWrapper } from './styles';

const links = socialLinks.map(({ platform, url, icon }) => (
  <li key={platform} className="inline-block mx-1">
    <a className="link-wrapper" href={url}>
      <FontAwesomeIcon icon={['fab', icon]} />
    </a>
  </li>
));

const Header: FunctionComponent<HeaderProps> = ({ OpenMenu }) => {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-1/2 md:flex-1 md:flex md:items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-auto w-48 object-cover" />
            </Link>
            <p className="hidden md:block md:pl-2 md:py-1 md:ml-2 border-l italic">
              care wrapped around you.
            </p>
          </div>
          <div className="w-1/2 md:w-auto md:order-3 lg:hidden">
            <button type="button" className="menu-toggle" onClick={OpenMenu}>
              <FontAwesomeIcon icon="bars" size="sm" />
            </button>
          </div>
          <div className="w-full md:w-auto pt-2 md:pt-0 md:order-2">
            <ul className="text-center px-4 lg:px-0">{links}</ul>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
