import React, { useState } from 'react';
import styled from 'styled-components';
import GuidingHeader from '../components/gate/GuidingHeader';
const Gate = () => {
  const [input, setInput] = useState('');

  return (
    <GateWrapper>
      <GuidingHeader isCompleted={input !== ''} />

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