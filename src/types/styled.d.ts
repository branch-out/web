import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      phone: string;
      desktop: string;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
    };
  }
}
