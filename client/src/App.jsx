import { GlobalStyle } from './styles/globalStyle';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
