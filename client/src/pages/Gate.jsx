import { useContext, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import GuidingHeader from '../components/gate/GuidingHeader';
import getRandomQuestion from '../utils/getRandomQuestion';
import MouseContext from '../components/contexts/MouseContext';
const Gate = () => {
  const [input, setInput] = useState('');
  const { xy, setXY } = useContext(MouseContext);

  const randomQuestion = useRef('죽기 전에\n꼭 하고 싶은 것은\n무엇인가요?');
  useMemo(() => {
    randomQuestion.current = getRandomQuestion();
  }, []);

  return (
    <GateWrapper onMouseMove={(e) => setXY({ x: e.clientX, y: e.clientY })}>
      <GuidingHeader isCompleted={input !== ''} />
      <StyledTextArea
        autofocus="true"
        rows={10}
        cols={50}
        placeholder={randomQuestion.current}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <MouseOnText $xy={xy} $active={input !== ''}>
        입력해 보세요
      </MouseOnText>
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

  &:not(:hover) + aside {
    opacity: 0;
    background-color: red;
  }
`;

const MouseOnText = styled.aside`
  display: ${({ $active }) => ($active ? 'none' : 'block')};

  padding: 0.7rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};

  ${({ theme }) => theme.fonts.body1}
  position: absolute;
  left: ${({ $xy }) => `${$xy.x + 20}px`};
  top: ${({ $xy }) => `${$xy.y + 20}px`};
`;
