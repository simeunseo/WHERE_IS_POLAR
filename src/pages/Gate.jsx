import LogoMain from '../assets/svg/logo-main.svg?react';
import styled from 'styled-components';

const Gate = () => {
  return (
    <GateWrapper>
      <LogoMain />
    </GateWrapper>
  );
};

export default Gate;

const GateWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
