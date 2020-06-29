import React, { FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import favcon from 'src/images/favicon.png';
import Header from 'src/components/navigation/Header';
import MobileMenu from 'src/components/navigation/MobileMenu';
import DesktopMenu from 'src/components/navigation/DesktopMenu';
import Breadcrumbs from 'src/components/navigation/Breadcrumbs';
import Footer from 'src/components/navigation/Footer';

import { GlobalStyle } from 'src/styles/globalStyles';
import { theme } from 'src/styles/themes';
import PageTitle from '../PageTitle';

library.add(faAngleUp, faAngleRight, faBars, faTwitter, faFacebookF, faGooglePlusG);

const Layout: FunctionComponent = ({ children }) => {
  const [isMenuOpen, OpenMenu] = useState<boolean>(false);

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

        <title>Contact Us | Generix Care Website</title>

        <link rel="shortcut icon" href={favcon} type="image/x-icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header OpenMenu={() => OpenMenu(true)} />
      <MobileMenu OpenMenu={() => OpenMenu(false)} isMenuOpen={isMenuOpen} />
      <DesktopMenu />
      <PageTitle />
      <Breadcrumbs />
      <div className="container">{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
