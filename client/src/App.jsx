import { GlobalStyle } from './styles/globalStyle';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { MouseContextProvider } from './components/contexts/MouseContext';
import { RecentPostProvider } from './components/contexts/RecentPost';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MouseContextProvider>
        <RecentPostProvider>
          <Router />
        </RecentPostProvider>
      </MouseContextProvider>
    </ThemeProvider>
  );
}

export default App;
