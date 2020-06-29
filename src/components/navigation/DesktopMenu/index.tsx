import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { navigation } from 'src/data/navigation';
import { DesktopMenuWrapper } from './styles';

interface ListJSX {
  slug?: string;
  title: string;
  anchorClass: string;
}

const getListJSX = ({ slug, title, anchorClass }: ListJSX) => {
  return slug ? (
    <Link to={slug} className={anchorClass} role="button">
      {title}
    </Link>
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={anchorClass} role="button">
      {title}
    </a>
  );
};

const navItems = navigation.map(({ title, slug, children }) => {
  const anchorClass = 'px-5 py-3 block relative z-40';
  const submenuAnchorClass = 'px-5 py-2 block';

  const submenu =
    children &&
    children.map((menuItem) => (
      <li className="nav-item-submenu" key={menuItem.title}>
        {getListJSX({
          slug: menuItem.slug,
          title: menuItem.title,
          anchorClass: submenuAnchorClass
        })}
      </li>
    ));

  return (
    <li key={title} className="nav-parent">
      {getListJSX({ slug, title, anchorClass })}
      {submenu && <ul className="nav-submenu">{submenu}</ul>}
    </li>
  );
});

const DesktopMenu: FunctionComponent = () => {
  return (
    <DesktopMenuWrapper className="container">
      <ul>{navItems}</ul>
    </DesktopMenuWrapper>
  );
};

export default DesktopMenu;
