import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey10: string;
      white: string;
    };
    fonts: {
      head1: SerializedStyles;
      head2: SerializedStyles;
      body1: SerializedStyles;
      question: SerializedStyles;
    };
  }
}
