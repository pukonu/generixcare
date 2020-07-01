import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import OutsideClickHandler from 'react-outside-click-handler';

import { MobileMenuProps } from 'src/interfaces';
import { navigation } from 'src/data/navigation';
import { MobileMenuWrapper } from './styles';

const navItems = navigation.map(({ title, slug, children }) => {
  const href = slug || children?.[0].slug || '/';

  return (
    <li key={title}>
      <Link to={href}>{title}</Link>
    </li>
  );
});

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ OpenMenu, isMenuOpen }) => {
  return (
    <MobileMenuWrapper className={isMenuOpen ? 'open' : ''}>
      <OutsideClickHandler disabled={!isMenuOpen} onOutsideClick={OpenMenu}>
        <div className="menu-wrapper">
          <ul className="menu-inner-wrapper">{navItems}</ul>
        </div>
      </OutsideClickHandler>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
