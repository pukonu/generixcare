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

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.125rem;
}

p {
  ${tw`leading-7`}

  + p {
    ${tw`mt-2`}
  }
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

.slick-active {
  ${tw`z-10`}
}

/* Tailwind custom form start */
.form-checkbox {
  color: ${({ theme }) => theme.primary}
}

.form-checkbox:focus {
  box-shadow: 0 0 0 2px rgba(190, 30, 45, 0.3);
  border-color: ${({ theme }) => theme.primary}
}
/* Tailwind custom form end */

@media (min-width: 576px) {
  h2 {
    font-size: 1.5rem;
  }
}

`;
