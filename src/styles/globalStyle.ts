import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
#root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
}
html {
    font-size: 62.5%;   
}
* {
    box-sizing: border-box;
}
body{
    background-color:${({ theme }) => theme.colors.grey10};
    color:${({ theme }) => theme.colors.white};

    font-family: Sandoll ClairSans;
    font-weight: 400;
}
`;
