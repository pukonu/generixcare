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

h1 {
  font-size: 1.875rem;
}

h2 {
  font-size: 1.3125rem;
}

p {
  ${tw`leading-7`}
}

.container {
  ${tw`w-full mx-auto px-4`};
  max-width: 1280px;
}

.light-container {
  background-color: ${({ theme }) => theme.backgroundLight};
}

.font-secondary {
  font-family: 'Lato', sans-serif;
}

.text-color-primary {
  color: ${({ theme }) => theme.primary}
}

@media (min-width: 576px) {
  h2 {
    font-size: 1.5rem;
  }
}

`;
