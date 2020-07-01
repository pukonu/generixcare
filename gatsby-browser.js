import React from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faBars,
  faGlobeEurope,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import { GlobalStyle } from 'src/styles/globalStyles';
import { theme } from 'src/styles/themes';

import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
