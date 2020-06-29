import React, { FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import Header from 'src/components/navigation/Header';
import MobileMenu from 'src/components/navigation/MobileMenu';
import DesktopMenu from 'src/components/navigation/DesktopMenu';
import Footer from 'src/components/navigation/Footer';

import { GlobalStyle } from 'src/styles/globalStyles';
import { theme } from 'src/styles/themes';
import PageTitle from '../PageTitle';

library.add(faAngleUp, faBars, faTwitter, faFacebookF, faGooglePlusG);

const Layout: FunctionComponent = ({ children }) => {
  const [isMenuOpen, OpenMenu] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
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
      <div className="container">{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
