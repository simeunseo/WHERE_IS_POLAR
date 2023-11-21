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
  justify-content: end;

  position: fixed;
  top: 15rem;
  right: 8rem;
`;

const Category = styled.h1`
  font-size: 3rem;

  text-align: right;
  /* 
  &:hover {
    &::before {
      content: '*';
    }
  } */
`;

const CategoryEng = styled.h2`
  font-size: 3rem;

  text-align: right;
  display: none;
`;

const CategoryWrapper = styled.div`
  padding: 2.5rem 0;
  &:hover {
    & > h2 {
      display: block;
    }
    & > h1 {
      display: none;
    }
  }
`;
