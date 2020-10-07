import React, { FunctionComponent, useState, Fragment } from 'react';
import { Link } from 'gatsby';
import OutsideClickHandler from 'react-outside-click-handler';

import { MobileMenuProps } from 'src/interfaces';

import { MobileMenuWrapper } from './styles';

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ OpenMenu, isMenuOpen, navItems }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<null | string>(null);

  const nav = navItems.map(({ primary, items }) => {
    const { label, path } = primary;
    const href = path || items?.[0].path || '/';

    const handleMenuItemToggle = (val: string) => {
      if (val === activeSubmenu) {
        setActiveSubmenu(null);
        return;
      }

      setActiveSubmenu(val);
    };

    return (
      <Fragment key={label}>
        <li className="relative">
          <Link to={href}>{label}</Link>

          {!!items.length && (
            <button
              onClick={() => handleMenuItemToggle(label)}
              type="button"
              className="absolute right-0 p-2 mr-3 focus:outline-none focus:shadow-outline rounded-full"
            >
              <svg
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="stroke-current h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 12l-7 7-7-7" />
              </svg>
            </button>
          )}
        </li>

        {!!items.length && activeSubmenu === label && (
          <ul>
            {items.map(({ label: subMenuLabel, path: subMenuPath }) => (
              <li key={subMenuLabel}>
                <Link className="text-sm ml-4" to={subMenuPath}>
                  {subMenuLabel}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Fragment>
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
