import { Link } from 'react-router-dom';
import LogoMain from '../../assets/svg/logo-main.svg?react';
import Responsive from './Responsive/Responsive';
import SlidePhrase from './SlidePhrase';
import { TABLET_MEDIA_QUERY } from '../../styles/mediaQuery';
import styled from 'styled-components';
import { useState } from 'react';

const Header = ({ isModalOpen }) => {
  const [isLogoClick, setIsLogoClick] = useState(false);

  return (
    <HeaderWrapper>
      <StyledLogoMain $isLogoClick={isLogoClick} onClick={() => setIsLogoClick(!isLogoClick)} />
      <Responsive only="desktop">
        <Navigation $isModalOpen={isModalOpen}>
          <Link to="/">
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
        <SlidePhrase />
      </Responsive>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 8rem;

  @media ${TABLET_MEDIA_QUERY} {
    padding: 5rem;
  }
`;

const StyledLogoMain = styled(LogoMain)`
  cursor: pointer;

  height: max-content;
  max-height: 20rem;
  width: max-content;

  & > path:first-child {
    transition: opacity 1s ease-in-out;
    opacity: ${({ $isLogoClick }) => ($isLogoClick ? '0%' : '100%')};
  }

  transition: transform 1s ease-in-out;
  transform: ${({ $isLogoClick }) => ($isLogoClick ? 'translateX(-11rem)' : 'none')};
`;

const Navigation = styled.nav`
  transform: ${({ $isModalOpen }) => ($isModalOpen ? 'translateX(45rem)' : 'none')};
  transition: transform 1s ease-in-out;

  display: flex;
  flex-direction: column;

  width: 45rem;
  position: fixed;
  top: 15rem;
  right: 0;
  z-index: 4;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey10};
  padding: 2rem 5rem;
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

  padding: 4rem 0;
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
