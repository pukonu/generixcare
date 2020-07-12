import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import OutsideClickHandler from 'react-outside-click-handler';

import { MobileMenuProps } from 'src/interfaces';

import { MobileMenuWrapper } from './styles';

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ OpenMenu, isMenuOpen, navItems }) => {
  const nav = navItems.map(({ primary, items }) => {
    const { label, path } = primary;
    const href = path || items?.[0].path || '/';

    return (
      <li key={label}>
        <Link to={href}>{label}</Link>
      </li>
    );
  });

  return (
    <MobileMenuWrapper className={isMenuOpen ? 'open' : ''}>
      <OutsideClickHandler disabled={!isMenuOpen} onOutsideClick={OpenMenu}>
        <div className="menu-wrapper">
          <ul className="menu-inner-wrapper">{nav}</ul>
        </div>
      </OutsideClickHandler>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
