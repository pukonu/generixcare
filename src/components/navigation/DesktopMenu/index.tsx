import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { DesktopMenuProps } from 'src/interfaces';
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

const DesktopMenu: FunctionComponent<DesktopMenuProps> = ({ navItems }) => {
  const nav = navItems.map(({ items, primary }) => {
    const anchorClass = 'px-5 py-3 block relative z-40';
    const submenuAnchorClass = 'px-5 py-2 block';

    const submenu =
      !!items.length &&
      items.map(({ path, label }) => (
        <li className="nav-item-submenu" key={path}>
          {getListJSX({
            slug: path,
            title: label,
            anchorClass: submenuAnchorClass
          })}
        </li>
      ));

    return (
      <li key={primary.label} className="nav-parent">
        {getListJSX({ slug: primary.path, title: primary.label, anchorClass })}
        {submenu && <ul className="nav-submenu">{submenu}</ul>}
      </li>
    );
  });

  return (
    <DesktopMenuWrapper className="container">
      <ul className="-mx-4">{nav}</ul>
    </DesktopMenuWrapper>
  );
};

export default DesktopMenu;
