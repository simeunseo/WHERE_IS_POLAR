import { useState } from 'react';
import styled from 'styled-components';
import FormConfirmBtn from './FormConfirmBtn';
import WebcamCapture from './WebcamCapture';

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

  const handleDreamChange = (e) => {
    setDream(e.target.value);
  };

  const handleWhyChange = (e) => {
    setWhy(e.target.value);
  };

  const handleWhenChange = (e) => {
    setWhen(e.target.value);
  };

  const handleWhatChange = (e) => {
    setWhat(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleNameAgeChange = (e) => {
    setNameAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDeepInterviewChange = (e) => {
    setDeepInterview(e.target.id === 'yes' ? true : false);
  };

  const handleImgSrcChange = (url) => {
    setImgSrc(url);
  };

  return (
    <StyledForm>
      <Question>당신의 꿈은 무엇인가요? * 필수</Question>
      <BodySub>
        꿈을 정의하기 힘들다면, 당신이 쫓는 북극성을 생각해보거나, 죽기 전에 이루 싶은 것, 삶의 모습, 소원 등을
        생각해보세요
      </BodySub>
      <TextArea placeholder="작성해 주세요" value={dream} onChange={handleDreamChange}></TextArea>
      <Question>그 이유는 무엇인가요?</Question>
      <TextArea placeholder="작성해 주세요" value={why} onChange={handleWhyChange}></TextArea>
      <Question>언제 그 꿈을 이룰 것 같은가요?</Question>
      <TextArea placeholder="작성해 주세요" value={when} onChange={handleWhenChange}></TextArea>
      <Question>꿈을 이루기 위해 무엇을 할 것인가요?</Question>
      <TextArea placeholder="작성해 주세요" value={what} onChange={handleWhatChange}></TextArea>
      {/* <Divider></Divider> */}
      <Question>당신의 이름과 만나이를 알려주세요. * 필수</Question>
      <BodySub>
        익명을 원하신다면 닉네임이나 별명을 적어주세요. <br />
        ex) 조은진, 23세
      </BodySub>
      <TextArea placeholder="작성해 주세요" value={nameAge} onChange={handleNameAgeChange}></TextArea>
      <Question>당신이 사는 곳을 알려주세요. * 필수</Question>
      <BodySub>ex) 대한민국 제주도, 캐나다 몬트리올</BodySub>
      <TextArea placeholder="작성해 주세요" value={location} onChange={handleLocationChange}></TextArea>
      <Question>당신의 이메일을 알려주세요. * 필수</Question>
      <BodySub>이메일을 적어주시면 1년 주기로 당신의 여정을 묻고, 그 과정을 웹페이지에 반영합니다. </BodySub>
      <TextArea placeholder="작성해 주세요" value={email} onChange={handleEmailChange}></TextArea>
      <Question>당신의 꿈 이야기를 조금 더 자세하게 들려줄 수 있나요? * 필수</Question>
      <BodySub>잡지와 같은 인터뷰 형식으로 취재할 예정입니다.</BodySub>
      <StyledFormContainer>
        <div>
          <label htmlFor="yes">좋아요!</label>
          <input
            type="radio"
            name="deepInterview"
            value="yes"
            id="yes"
            checked={deepInterview === true}
            onChange={handleDeepInterviewChange}
          />
        </div>
        <div>
          <label htmlFor="no">아닙니다.</label>
          <input
            type="radio"
            name="deepInterview"
            value="no"
            id="no"
            checked={deepInterview === false}
            onChange={handleDeepInterviewChange}
          />
        </div>
        <div>
          <WebcamCapture handleImgSrcChange={handleImgSrcChange} />
        </div>
      </StyledFormContainer>
      <BtnWrapper>
        {/* <DeclineBtn /> */}
        <FormConfirmBtn
          dream={dream}
          why={why}
          when={when}
          what={what}
          location={location}
          nameAge={nameAge}
          email={email}
          deepInterview={deepInterview}
          imgSrc={imgSrc}
        />
      </BtnWrapper>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  margin-top: 10rem;
`;
const TextArea = styled.textarea`
  margin-bottom: 5rem;
  margin-top: 2rem;

  background-color: transparent;
  padding: 0;
  line-height: 1.5rem;

  width: 100%;

  border: none;
  border-bottom: 0.1rem solid white;

  text-wrap: nowrap;

  resize: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 4rem;
`;

const Question = styled.h2``;

const BodySub = styled.p`
  text-align: left;

  font-size: 1.2rem;
  margin-top: 1rem;
  line-height: 1.5rem;
`;

const StyledFormContainer = styled.form`
  padding-top: 2rem;

  display: flex;
  gap: 1rem;
`;
