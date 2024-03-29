import { DefaultTheme, css } from 'styled-components';

const colors = {
  //   behance_blue: '#2456f7',
  grey10: '#221F20',
  grey8: '#737373',
  white: '#FFFFFF',
};

const fonts = {
  head1: css`
    font-family: Sandoll ClairSans;
    font-size: 4rem;
  `,
  head2: css`
    font-family: Sandoll ClairSans;
    font-size: 2rem;
  `,
  head3: css`
    font-family: Sandoll ClairSans;
    font-size: 3rem;
  `,
  body1: css`
    font-family: Sandoll ClairSans;
    font-size: 2rem;
    line-height: 2.7rem;
  `,
  question1: css`
    font-size: 2.3rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
  `,
  question2: css`
    font-size: 3rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
