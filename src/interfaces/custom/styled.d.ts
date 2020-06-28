import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondaryLight: string;
    secondaryDarK: string;
    tertiaryLight: string;
    tertiaryDark: string;
    backgroundLight: string;
    backgroundDark: string;
  }
}
