import React, { useState } from 'react';
import styled from 'styled-components';
import GuidingLine from '../assets/svg/안내점선.svg?react';
import Asterisk from '../assets/svg/asterisk.svg?react';

const Gate = () => {
  const [input, setInput] = useState('');

  return (
    <GateWrapper>
      <GuidingHeader>
        <StyledGuidingLine active={input !== ''} />
        <StyledAsterisk active={input !== ''} />
      </GuidingHeader>
      <StyledTextArea
        rows={10}
        cols={50}
        placeholder="죽기 전에&#13;하고 싶은 일이&#13;있나요?"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </GateWrapper>
  );
};

export default Gate;

const GateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GuidingHeader = styled.header`
  width: 100%;
  margin: 5rem 0;

  display: flex;
  align-items: center;
`;

const StyledGuidingLine = styled(GuidingLine)`
  width: 100%;
  overflow: hidden;

  & > * {
    transition: fill 2s;
    fill: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.grey8)};
  }
`;

const StyledAsterisk = styled(Asterisk)`
  margin: 0 3rem;

  & > * {
    transition: fill 3s;
    fill: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.grey8)};
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

const StyledTextArea = styled.textarea`
  width: 100vw;

  padding: 5rem;

  color: ${({ theme }) => theme.colors.white};
  word-spacing: -8rem;
  line-height: 22rem;
  font-size: 20rem;

  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
