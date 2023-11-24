// ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Scrolling to top');
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

export default scrollToTop;
