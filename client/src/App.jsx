import { GlobalStyle } from './styles/globalStyle';
import { MouseContextProvider } from './components/contexts/MouseContext';
import { RecentPostProvider } from './components/contexts/RecentPost';
import ResponsiveProvider from './components/common/Responsive/ResponsiveProvider';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ResponsiveProvider>
        <MouseContextProvider>
          <RecentPostProvider>
            <Router />
          </RecentPostProvider>
        </MouseContextProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}

export default App;
