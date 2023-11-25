import { useRef, useState } from 'react';
import styled from 'styled-components';

import WebcamCapture from './WebcamCapture';

import GuidingHeader from '../gate/GuidingHeader';

import createMessage from '../../apis/create';

const Form = () => {
  const [dream, setDream] = useState('');
  const [why, setWhy] = useState('');
  const [when, setWhen] = useState('');
  const [what, setWhat] = useState('');
  const [location, setLocation] = useState('');
  const [nameAge, setNameAge] = useState('');
  const [email, setEmail] = useState('');
  const [deepInterview, setDeepInterview] = useState(true);
  const [imgSrc, setImgSrc] = useState('');

  const scrollFirst = useRef(null);
  const scrollToFirst = () => {
    scrollFirst.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollSecond = useRef(null);
  const scrollToSecond = () => {
    scrollSecond.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollThird = useRef(null);
  const scrollToThird = () => {
    scrollThird.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDeepInterviewChange = (e) => {
    setDeepInterview(e.target.id === 'yes' ? true : false);
  };

  const handleImgSrcChange = (url) => {
    setImgSrc(url);
  };

  const isFilled = dream && nameAge && imgSrc;

  const handleFormSubmit = async () => {
    try {
      createMessage({
        name: nameAge,
        country: location,
        phrase: dream,
        what: dream,
        why: why,
        when: when,
        how: what,
        archivedAt: '2023',
        imgSrc: imgSrc,
        email: email,
        deepInterview: deepInterview,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormWrapper>
      <DreamQuestionWrapper>
        <Question>당신의 꿈은 무엇인가요?</Question>
        <BodySub>
          꿈을 정의하기 힘들다면, 당신이 쫓는 북극성을 생각해보거나, 죽기 전에 이루고 싶은 것, 삶의 모습, 소원 등을
          생각해보세요
        </BodySub>
        <TextArea
          placeholder="✑"
          value={dream}
          onChange={(e) => {
            setDream(e.target.value);
          }}></TextArea>
        <Question>그 이유는 무엇인가요?</Question>
        <TextArea placeholder="✑" value={why} onChange={(e) => setWhy(e.target.value)}></TextArea>
        <Question ref={scrollFirst}>언제 그 꿈을 이룰 것 같은가요?</Question>
        <TextArea placeholder="✑" value={when} onChange={(e) => setWhen(e.target.value)}></TextArea>
        <Question>꿈을 이루기 위해 무엇을 할 것인가요?</Question>
        <TextArea
          onFocus={scrollToFirst}
          placeholder="✑"
          value={what}
          onChange={(e) => setWhat(e.target.value)}></TextArea>
      </DreamQuestionWrapper>
      <InfoQuestionWrapper ref={scrollSecond}>
        <Question>당신의 이름과 만나이를 알려주세요.</Question>
        <BodySub>익명을 원하신다면 닉네임이나 별명을 적어주세요. ex) 조은진, 23세</BodySub>
        <TextArea
          onFocus={scrollToSecond}
          placeholder="✑"
          value={nameAge}
          onChange={(e) => setNameAge(e.target.value)}></TextArea>
        <Question ref={scrollThird}>당신이 사는 곳을 알려주세요.</Question>
        <BodySub>ex) 대한민국 제주도, 캐나다 몬트리올</BodySub>
        <TextArea placeholder="✑" value={location} onChange={(e) => setLocation(e.target.value)}></TextArea>
        <Question>당신의 이메일을 알려주세요.</Question>
        <BodySub>이메일을 적어주시면, 오늘 적은 당신의 꿈을 1년 뒤에 전해드립니다.</BodySub>
        <TextArea
          onFocus={scrollToThird}
          placeholder="✑"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></TextArea>
        <Question>당신의 꿈 이야기를 조금 더 자세하게 들려줄 수 있나요?</Question>
        <BodySub>인터뷰 형식으로 취재를 요청드리려 합니다.</BodySub>

        <StyledFormContainer>
          <>
            <StyledLabel htmlFor="yes">좋아요!</StyledLabel>
            <StyedInput
              type="radio"
              name="deepInterview"
              value="yes"
              id="yes"
              checked={deepInterview === true}
              onChange={handleDeepInterviewChange}
            />
          </>
          <>
            <StyledLabel htmlFor="no">아닙니다.</StyledLabel>
            <StyedInput
              type="radio"
              name="deepInterview"
              value="no"
              id="no"
              checked={deepInterview === false}
              onChange={handleDeepInterviewChange}
            />
          </>
        </StyledFormContainer>
      </InfoQuestionWrapper>
      <WebcamCaptureWrapper>
        <Question>사진을 남겨주세요.</Question>
        <BodySub>당신과 관련된 물건을 촬영해도 좋습니다.</BodySub>
        <WebcamCapture handleImgSrcChange={handleImgSrcChange} />
        <BodySub>모든 입력을 마치면, 우측의 별을 눌러 제출해 주세요.</BodySub>
      </WebcamCaptureWrapper>
      <GuidingHeaderWrapper onClick={handleFormSubmit}>
        <GuidingHeader isCompleted={isFilled} />
      </GuidingHeaderWrapper>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.main`
  display: flex;
  position: relative;
`;

const TextArea = styled.textarea`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.head2}

  &:not(&:last-child) {
    margin-bottom: 5rem;
  }

  margin-top: 2rem;

  background-color: transparent;
  padding: 0.4rem;
  width: 100%;
  height: 4rem;

  border: none;
  border-bottom: 0.1rem solid white;

  text-wrap: nowrap;

  resize: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey8};
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10rem;
`;

const Question = styled.h2`
  ${({ theme }) => theme.fonts.question2};
`;

const BodySub = styled.p`
  ${({ theme }) => theme.fonts.body1}
  color: ${({ theme }) => theme.colors.grey8};

  text-align: left;

  margin-top: 2rem;
`;

const StyledFormContainer = styled.form`
  padding-top: 2rem;

  display: flex;
  gap: 1rem;
`;

const DreamQuestionWrapper = styled.div`
  position: absolute;
  left: -0.1rem;
  padding: 10rem;
  margin-top: 5rem;
  height: 80.3rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

const InfoQuestionWrapper = styled.div`
  position: absolute;
  right: 13.9rem;
  top: 90.3rem;
  height: 92.3rem;
  padding: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

const WebcamCaptureWrapper = styled.div`
  position: absolute;
  top: 187.5rem;
  left: -0.1rem;

  display: flex;
  flex-direction: column;

  padding: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.grey10};
  z-index: 1;
`;

const StyedInput = styled.input`
  appearance: auto;

  width: 2rem;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.head2}
`;

const WebcamSubText = styled.p`
  ${({ theme }) => theme.fonts.body1}
  color: ${({ theme }) => theme.colors.grey8};
  width: max-content;

  text-align: left;

  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const GuidingHeaderWrapper = styled.div`
  position: absolute;
  top: 233rem;
  right: 25rem;
`;
