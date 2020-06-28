import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/styles/globalStyles';
import { theme } from 'src/styles/themes';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
