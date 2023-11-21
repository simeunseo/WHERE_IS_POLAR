import { Link } from 'react-router-dom';
import LogoMain from '../../assets/svg/logo-main.svg?react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoMain />
      <Navigation>
        <Link to="/archive">
          <CategoryWrapper>
            <Category>인류의 꿈을 보관합니다</Category>
            <CategoryEng>Archive</CategoryEng>
          </CategoryWrapper>
        </Link>
        <Link to="/magazine">
          <CategoryWrapper>
            <Category>더 깊은 이야기</Category>
            <CategoryEng>Magazine</CategoryEng>
          </CategoryWrapper>
        </Link>
        <Link to="/yours">
          <CategoryWrapper>
            <Category>당신도 들려주세요</Category>
            <CategoryEng>Yours</CategoryEng>
          </CategoryWrapper>
        </Link>
      </Navigation>
      <MainPhrase>자신의 북극성이 무엇인지 알아내는 일은 심리적, 영적으로 심오한 예술 작업이라 할 수 있다. </MainPhrase>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 8rem;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  width: 38rem;
  position: fixed;
  top: 15rem;
  right: 0;
  z-index: 1;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey10};
  padding: 2rem 4rem;
  padding-bottom: 4rem;
`;

const Category = styled.h1`
  position: absolute;

  font-size: 3rem;

  text-align: right;
`;

const CategoryEng = styled.h2`
  position: absolute;

  font-size: 3rem;

  transform: translateX(1rem);

  transition: transform 1s;

  text-align: right;
  opacity: 0%;
`;

const CategoryWrapper = styled.div`
  position: relative;

  padding: 2.5rem 0;
  &:hover {
    & > h2 {
      opacity: 100%;
      transform: translateX(0rem);
    }
    & > h1 {
      opacity: 0%;
    }
  }
`;

const MainPhrase = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: 14rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};
  font-size: 8rem;
  text-align: right;

  writing-mode: vertical-rl;
  text-orientation: sideways;
  overflow: hidden;
`;
