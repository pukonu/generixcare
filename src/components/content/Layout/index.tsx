import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import { GlobalStyle } from 'src/styles/globalStyles';
import { theme } from 'src/styles/themes';
import Footer from 'src/components/navigation/Footer';
import Header from 'src/components/navigation/Header';

library.add(faAngleUp, faBars, faTwitter, faFacebookF, faGooglePlusG);

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
