import Footer from '../components/common/Footer';
import Form from '../components/yours/Form';
import Header from '../components/common/Header';
import { TABLET_MEDIA_QUERY } from '../styles/mediaQuery';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Yours = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      {/* <Form /> */}
      <Notice>
        이 페이지는 나의 꿈을 선언하고 공유하는 공간이에요.
        <br />
        잠시 재정비중이니 조금만 기다려주세요 :)
      </Notice>
    </>
  );
};

export default Yours;

const Notice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15rem;
  padding-right: 14rem;
  ${({ theme }) => theme.fonts.head3}
  line-height: 1.5;

  @media ${TABLET_MEDIA_QUERY} {
    padding-right: 0;
    ${({ theme }) => theme.fonts.body1}
  }
`;
