import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

body {
  font-size: 16px;
  ${tw`antialiased`}
  font-family: 'Varela Round', sans-serif;
}
`;
