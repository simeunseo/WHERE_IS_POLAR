import { startTransition, useContext, useEffect, useState } from 'react';

import { ResponsiveContext } from './context';
import { TABLET_MEDIA_QUERY } from '../../../styles/mediaQuery';

const Responsive = ({ className = '', children, only, forceMount = false }) => {
  const { tabletOnlyClassName, desktopOnlyClassName } = useContext(ResponsiveContext);

  const selectedClassName = (() => {
    if (only === 'desktop') {
      return desktopOnlyClassName;
    } else if (only === 'tablet') {
      return tabletOnlyClassName;
    }
  })();

  const [current, setCurrent] = useState(null);
  useEffect(() => {
    if (forceMount) {
      return;
    }

    const tabletMedia = window.matchMedia(TABLET_MEDIA_QUERY);

    const handleChange = (e) => {
      setCurrent(e.matches ? 'tablet' : 'desktop');
    };

    tabletMedia.addEventListener('change', handleChange);

    startTransition(() => {
      if (tabletMedia.matches) {
        setCurrent('tablet');
      } else {
        setCurrent('desktop');
      }
    });

    return () => tabletMedia.removeEventListener('change', handleChange);
  }, [forceMount]);

  return forceMount || current === null || only === current ? (
    <div className={`${selectedClassName} ${className}`}>{children}</div>
  ) : (
    <></>
  );
};

export default Responsive;
