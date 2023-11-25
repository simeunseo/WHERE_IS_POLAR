import { GlobalStyle } from './styles/globalStyle';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { MouseContextProvider } from './components/contexts/MouseContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MouseContextProvider>
        <Router />
      </MouseContextProvider>
    </ThemeProvider>
  );
}

export default App;
