import Form from '../components/yours/Form';
import Header from '../components/common/Header';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/common/Footer';

const Yours = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Form />
    </>
  );
};

export default Yours;
