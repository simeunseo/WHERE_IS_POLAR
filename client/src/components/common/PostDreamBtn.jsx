import { Link } from 'react-router-dom';
import PencilIcon from '../../assets/svg/pencil.svg?react';
import styled from 'styled-components';

const PostDreamBtn = () => {
  return (
    <Btn to="/yours">
      <StyledPencilIcon />
      <Text>나도 꿈 남기기</Text>
    </Btn>
  );
};

export default PostDreamBtn;

const Btn = styled(Link)`
  position: fixed;
  right: 0;
  bottom: 5rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid black;
  color: ${({ theme }) => theme.colors.grey10};
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem 2.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.grey10};
  }
`;

const StyledPencilIcon = styled(PencilIcon)`
  width: 4rem;
  height: 4rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.fonts.head3}
`;
