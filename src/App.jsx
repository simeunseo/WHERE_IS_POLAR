import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      안녕하세요
    </ThemeProvider>
  );
}

export default App;
