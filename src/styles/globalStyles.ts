import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

/* html,
body, #___gatsby {
 ${tw`h-full`}
} */

html {
  scroll-behavior: smooth;
}

body {
  font-size: 16px;
  ${tw`antialiased pt-5 pb-10`}
  font-family: 'Varela Round', sans-serif;
  background-color: ${({ theme }) => theme.backgroundDark};
}

.container {
  ${tw`w-full mx-auto px-4`};
  max-width: 1280px;
}
`;
