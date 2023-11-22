import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import createMessage from '../../apis/create.js';
import { styled } from 'styled-components';

import { useNavigate } from 'react-router-dom';

const ConfirmBtn = ({ dream, why, when, what, location, nameAge, email, deepInterview, imgSrc }) => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    const notifyInput = () => toast('입력하지 않은 필수 항목이 있어요!');

    if (dream == '' || location == '' || nameAge == '' || email == '') {
      console.log('hi');
      notifyInput();
    } else {
      createMessage({
        dream: dream,
        why: why,
        when: when,
        what: what,
        location: location,
        nameAge: nameAge,
        email: email,
        deepInterview: deepInterview,
        imgSrc: imgSrc,
      });

      //   navigate(`/complete`);
    }
  };

  return (
    <>
      <StyledToastContainer position="top-center" pauseOnHover autoClose={1000} limit={1} />
      <StyledConfirmBtn type="button" onClick={createClickHandler}>
        나의 꿈 기록하기
        {/* <ConfirmIcon /> */}
      </StyledConfirmBtn>
    </>
  );
};

export default ConfirmBtn;

const StyledConfirmBtn = styled.button`
  background-color: white;
  border: none;
  width: 20rem;
  height: 5rem;

  margin-bottom: 10rem;
  border-radius: 5rem;
`;

const StyledToastContainer = styled(ToastContainer)`
  --toastify-text-color-light: white;
  --toastify-color-progress-light: none;
  --toastify-toast-width: 30rem;
  & .Toastify__toast {
    box-shadow: none;
    text-align: center;

    margin-top: 1rem;
    border-radius: 5rem;

    font-size: 1.6rem;
  }
  & button {
    display: none;
  }
`;
