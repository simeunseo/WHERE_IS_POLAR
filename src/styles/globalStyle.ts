import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

a{
    color: #fff; text-decoration: none; outline: none;
}

 a:hover, a:active {text-decoration: none; color:#fff;}

/* input 기본 스타일 초기화 */
input {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
}

/* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
input::-ms-clear { display: none; }

/* input type number 에서 화살표 제거 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
}

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
