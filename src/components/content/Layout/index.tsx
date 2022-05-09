/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent, useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faBars,
  faGlobeEurope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

import favicon from "src/images/favicon.png";
import Header from "src/components/navigation/Header";
import MobileMenu from "src/components/navigation/MobileMenu";
import DesktopMenu from "src/components/navigation/DesktopMenu";
import Breadcrumbs from "src/components/navigation/Breadcrumbs";
import Footer from "src/components/navigation/Footer";

import { GlobalStyle } from "src/styles/globalStyles";
import { theme } from "src/styles/themes";
import { LayoutProps } from "src/interfaces";
import { ContactType } from "src/models/graphql/page";
import PageTitle from "../PageTitle";

library.add(
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faBars,
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faEnvelope,
  faGlobeEurope,
  faPhoneAlt
);

const Layout: FunctionComponent<
  LayoutProps & Pick<ContactType, "twitter" | "facebook" | "google_plus">
> = ({
  twitter,
  children,
  facebook,
  pageTitle,
  menuItems,
  showHeader,
  google_plus,
  showBreadcrumbs,
  breadcrumbsData,
}) => {
  const [isMenuOpen, OpenMenu] = useState<boolean>(false);

  const menuHandlerTrue = useCallback(() => OpenMenu(true), []);
  const menuHandlerFalse = useCallback(() => OpenMenu(false), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="GenerixCare is an independent home care service provider for the elderly operating across Cambridgeshire, Bedfordshire and Hertfordshire"
        />
        <meta name="author" content="" />
        <meta
          name="keywords"
          content="Homecare agencies, Generixcare, Homecare, Elderly care, Senior care, home health
    aid, Live-in-Care, Personal Care, Respite care, Social Care, Geriatric, Disabled, Dementia, Alzheimer,
    Companionship, Disability, Respite care, CQC, Housekeeping, Generix"
        />
        <meta name="robots" content="index, follow, archive" />
        <meta name="googlebot" content="index, follow, archive" />
        <meta name="slurp" content="index, follow, archive" />
        <meta name="msnbot" content="index, follow, archive" />

        <title>{pageTitle} | Generix Care Website</title>

        <link rel="shortcut icon" href={favicon} type="image/x-icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />

        <script>{`var continuallySettings = {appID: 'k98re4mnkyep'}`}</script>
        <script src="https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js"></script>
      </Helmet>
      <Header
        twitter={twitter}
        facebook={facebook}
        google_plus={google_plus}
        OpenMenu={menuHandlerTrue}
      />

      <MobileMenu navItems={menuItems} OpenMenu={menuHandlerFalse} isMenuOpen={isMenuOpen} />
      <DesktopMenu navItems={menuItems} />

      {!!pageTitle && showHeader ? <PageTitle title={pageTitle} /> : null}
      {breadcrumbsData?.length && showBreadcrumbs ? <Breadcrumbs data={breadcrumbsData} /> : null}

      <div className="container light-container pt-5 pb-10">{children}</div>

      <Footer navItems={menuItems} />
    </ThemeProvider>
  );
};

export default Layout;
