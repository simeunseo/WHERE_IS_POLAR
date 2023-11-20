import LogoMain from '../../assets/svg/logo-main.svg?react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoMain />
      <Navigation>
        <Category>인류의 꿈을 보관합니다</Category>
        <Category>더 깊은 이야기</Category>
        <Category>당신도 들려주세요</Category>
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
  gap: 5rem;
  justify-content: end;
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
