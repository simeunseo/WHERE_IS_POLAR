import React from 'react';
import styled from 'styled-components';

const SlidePhrase = () => {
  return (
    <SlidePhraseWrapper>
      <Slide>
        <Phrase>
          자신의
          <br />
          <br />
          북극성이
          <br />
          <br />
          무엇인지
          <br />
          <br />
          알아내는
          <br />
          <br />
          일은
          <br />
          <br />
          심리적
          <br />
          <br />
          영적으로
          <br />
          <br />
          심오한
          <br />
          <br />
          예술
          <br />
          <br />
          작업이라
          <br />
          <br />할<br />
          <br />수<br />
          <br />
          있다
        </Phrase>
      </Slide>
    </SlidePhraseWrapper>
  );
};

export default SlidePhrase;

const SlidePhraseWrapper = styled.aside`
  z-index: 3;

  position: fixed;
  top: 0;
  right: 0;

  width: 14rem;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};
  font-size: 10rem;
  text-align: center;

  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  flex-wrap: wrap;
  width: 14rem;
  height: 100%;

  animation-name: slidedown;
  animation-iteration-count: infinite;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes slidedown {
    100% {
      transform: translateY(-660%);
    }
    0% {
      transform: translateY(101%);
    }
  }
`;

const Phrase = styled.div`
  height: 100%;
`;
