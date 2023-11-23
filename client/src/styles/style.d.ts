import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey10: string;
      white: string;
      grey8: string;
    };
    fonts: {
      head1: SerializedStyles;
      head2: SerializedStyles;
      head3: SerializedStyles;
      body1: SerializedStyles;
      question1: SerializedStyles;
      question2: SerializedStyles;
    };
  }
}
