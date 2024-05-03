import Asterisk from '../../assets/svg/asterisk.svg?react';
import GuidingLine from '../../assets/svg/안내점선.svg?react';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const GuidingHeader = ({ isCompleted }) => {
  return (
    <GuidingHeaderWrapper>
      {/* <StyledGuidingLine $active={isCompleted} /> */}
      <StyledLink to="/" $active={isCompleted}>
        <StyledAsterisk $active={isCompleted} />
      </StyledLink>
    </GuidingHeaderWrapper>
  );
};

export default GuidingHeader;

const GuidingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;

const StyledGuidingLine = styled(GuidingLine)`
  width: 100%;
  overflow: hidden;

  & > * {
    transition: fill 2s;
    fill: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.grey8)};
  }
`;

const StyledLink = styled(Link)`
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
`;

const StyledAsterisk = styled(Asterisk)`
  & > * {
    fill: ${({ theme }) => theme.colors.grey8};
    animation: ${({ $active }) => $active && 'changeColor 2s infinite ease-in-out'};
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

  animation: ${({ $active }) => $active && 'bounce 0.8s infinite ease-in-out'};
`;
