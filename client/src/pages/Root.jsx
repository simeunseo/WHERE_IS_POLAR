import LogoMain from '../assets/svg/logo-main.svg?react';
import Asterisk from '../assets/svg/asterisk.svg?react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = () => {
  return (
    <GateWrapper>
      <LogoMain />
      <Link to="/gate">
        <StyledAsterisk />
      </Link>
    </GateWrapper>
  );
};

export default Root;

const GateWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAsterisk = styled(Asterisk)`
  margin-top: 4rem;
  margin-left: 1rem;

  cursor: pointer;

  & > path {
    animation: changeColor 2s infinite;
  }

  @keyframes changeColor {
    0% {
      fill: ${({ theme }) => theme.colors.grey8};
    }
    70% {
      fill: ${({ theme }) => theme.colors.white};
    }
    100% {
      fill: ${({ theme }) => theme.colors.grey8};
    }
  }

  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: translateY(-1rem);
  }
`;
