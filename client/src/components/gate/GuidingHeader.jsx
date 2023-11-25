import React from 'react';
import GuidingLine from '../../assets/svg/안내점선.svg?react';
import Asterisk from '../../assets/svg/asterisk.svg?react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GuidingHeader = ({ isCompleted }) => {
  return (
    <GuidingHeaderWrapper>
      <StyledGuidingLine $active={isCompleted} />
      <StyledLink to="/archive" $active={isCompleted}>
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
  margin: 0 3rem;


  & > * {
    transition: fill 3s;
    fill: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.grey8)};
  }

  & > path {
    animation: ${({ active }) => active && 'changeColor 2s infinite'}; 
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
`;
