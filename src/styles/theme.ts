import { DefaultTheme, css } from 'styled-components';

const colors = {
  //   behance_blue: '#2456f7',
  grey10: '#221F20',
  white: '#FFFFFF',
};

const fonts = {
  head1: css`
    font-size: 4rem;
  `,
  head2: css`
    font-size: 2rem;
  `,
  body1: css`
    font-size: 1.6rem;
    line-height: 2.3rem;
  `,
  question: css`
    font-size: 1.6rem;
    font-weight: 700;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
