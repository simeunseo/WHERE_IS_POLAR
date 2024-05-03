import { createGlobalStyle, css } from 'styled-components';

import { ResponsiveContext } from './context';
import { TABLET_MEDIA_QUERY } from '../../../styles/mediaQuery';

const GlobalStyle = createGlobalStyle`
  
`;

const ResponsiveProvider = ({ children, classNamePrefix = 'responsive' }) => {
  const tabletOnlyClassName = `${classNamePrefix}-tablet-only`;
  const desktopOnlyClassName = `${classNamePrefix}-desktop-only`;

  return (
    <ResponsiveContext.Provider value={{ tabletOnlyClassName, desktopOnlyClassName }}>
      <GlobalStyle
        styles={css`
          .${tabletOnlyClassName} {
            display: none !important;
          }

          .${desktopOnlyClassName} {
            display: block !important;
          }

          @media ${TABLET_MEDIA_QUERY} {
            .${tabletOnlyClassName} {
              display: block !important;
            }

            .${desktopOnlyClassName} {
              display: none !important;
            }
          }
        `}
      />
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
