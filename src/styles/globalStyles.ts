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

.container {
  ${tw`w-full mx-auto px-4`};
  max-width: 1280px;
}
`;
