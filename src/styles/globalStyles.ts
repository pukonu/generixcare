import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
/* html,
body, #___gatsby {
 ${tw`h-full`}
} */

html {
  scroll-behavior: smooth;
}

body {
  font-size: 15px;
  ${tw`antialiased pt-5 pb-10`}
  font-family: 'Varela Round', sans-serif;
  color: ${({ theme }) => theme.secondaryDark};
  background-color: ${({ theme }) => theme.backgroundDark};
}

h2 {
  font-size: 1.3125rem;
}

.container {
  ${tw`w-full mx-auto px-4`};
  max-width: 1280px;
}

.font-secondary {
  font-family: 'Lato', sans-serif;
}

@media (min-width: 576px) {
  h2 {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.1875rem;
  }
}
`;
