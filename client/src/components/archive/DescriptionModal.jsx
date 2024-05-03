import CloseIcon from '../../assets/svg/close.svg?react';
import { TABLET_MEDIA_QUERY } from '../../styles/mediaQuery';
import styled from 'styled-components';

const DescriptionModal = ({ setIsModalOpen, isModalOpen, curItem }) => {
  const target = curItem;
  return (
    <DiscriptionModalWrapper $isModalOpen={isModalOpen}>
      <StyledCloseIcon onClick={() => setIsModalOpen(false)} />
      {target && (
        <>
          <Img src={target.imgSrc} />
          <NameInfo>
            {target.name}
            {target.age && ', ' + target.age + '세'}
            {target.country && ', ' + target.country}
          </NameInfo>
          <Article>
            <QuestionWrapper>
              <Question>당신의 꿈은 무엇인가요?</Question>
              <Answer>{target.what}</Answer>
            </QuestionWrapper>
            {target.why && (
              <QuestionWrapper>
                <Question>왜 그런 꿈을 꾸게 되었나요?</Question>
                <Answer>{target.why}</Answer>
              </QuestionWrapper>
            )}
            {target.when && (
              <QuestionWrapper>
                <Question>언제 그 꿈을 이룰 것 같나요?</Question>
                <Answer>{target.when}</Answer>
              </QuestionWrapper>
            )}
            {target.how && (
              <QuestionWrapper>
                <Question>그 꿈을 어떻게 이룰 건가요?</Question>
                <Answer>{target.how}</Answer>
              </QuestionWrapper>
            )}
          </Article>
        </>
      )}
    </DiscriptionModalWrapper>
  );
};

export default DescriptionModal;

const DiscriptionModalWrapper = styled.article`
  display: flex;
  flex-direction: column;

  transform: ${({ $isModalOpen }) => ($isModalOpen ? 'none' : 'translateX(84rem)')};
  transition: transform 1.3s ease-in-out;

  background-color: ${({ theme }) => theme.colors.grey10};
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  border-bottom: none;

  position: fixed;
  right: 14rem;

  top: 0;
  z-index: 2;

  width: 70rem;
  height: 100%;

  padding: 3rem;
  padding-top: 10rem;

  overflow-y: hidden;

  @media ${TABLET_MEDIA_QUERY} {
    right: 0;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 38rem;
  height: 24rem;
  object-fit: cover;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};
`;

const NameInfo = styled.h1`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};
  width: fit-content;
  padding: 0.6rem 0.8rem;

  ${({ theme }) => theme.fonts.question1}
  margin: 2rem 0;
`;

const Article = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const QuestionWrapper = styled.div`
  margin-top: 5rem;
`;

const Question = styled.div`
  ${({ theme }) => theme.fonts.question1}

  padding-bottom: 0.5rem;
`;

const Answer = styled.div`
  ${({ theme }) => theme.fonts.body1}

  margin-top:2rem;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  width: 2.5rem;
  top: 0rem;
  left: 3rem;

  cursor: pointer;
`;
