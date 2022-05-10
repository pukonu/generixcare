/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "src/images/logo.png";
import { HeaderProps } from "src/interfaces";
import { ContactType } from "src/models/graphql/page";
import { HeaderWrapper } from "./styles";

const Header: FunctionComponent<
  HeaderProps & Pick<ContactType, "twitter" | "facebook" | "google_plus">
> = ({ twitter, facebook, google_plus, OpenMenu }) => {
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
              <FontAwesomeIcon icon="bars" size="sm" title="Icon" />
            </button>
          </div>
          <div className="w-full md:w-auto pt-2 md:pt-0 md:order-2">
            <ul className="text-center px-4 lg:px-0">
              {!!twitter && !!twitter.url && (
                <li className="inline-block mx-1">
                  <a className="link-wrapper" href={twitter.url}>
                    <FontAwesomeIcon icon={["fab", "twitter"]} title="Icon" />
                  </a>
                </li>
              )}

              {!!facebook && !!facebook.url && (
                <li className="inline-block mx-1">
                  <a className="link-wrapper" href={facebook.url}>
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} title="Icon" />
                  </a>
                </li>
              )}

              {!!google_plus && !!google_plus.url && (
                <li className="inline-block mx-1">
                  <a className="link-wrapper" href={google_plus.url}>
                    <FontAwesomeIcon icon={["fab", "google-plus-g"]} title="Icon" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
