import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { GlobalStyle } from 'src/styles/globalStyles';
import { theme } from 'src/styles/themes';
import Footer from 'src/components/navigation/Footer';
import Header from 'src/components/navigation/Header';

library.add(faAngleUp);

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
