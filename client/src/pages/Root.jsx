import LogoMain from '../assets/svg/logo-main.svg?react';
import Asterisk from '../assets/svg/asterisk.svg?react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MouseContext from '../components/contexts/MouseContext';

const Root = () => {
  const { xy, setXY } = useContext(MouseContext);

  return (
    <GateWrapper onMouseMove={(e) => setXY({ x: e.clientX, y: e.clientY })}>
      <LogoMain />
      <Link to="/gate">
        <StyledAsterisk />
      </Link>
      <MouseOnText $xy={xy}>반짝이는 북극성을 좇아보세요</MouseOnText>
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
    animation: bounce 0.8s infinite ease-in-out;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const MouseOnText = styled.aside`
  padding: 0.7rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};

  ${({ theme }) => theme.fonts.body1}
  position: absolute;
  left: ${({ $xy }) => `${$xy.x + 20}px`};
  top: ${({ $xy }) => `${$xy.y + 20}px`};

  width: max-content;
`;
