import DescriptionModal from './DescriptionModal';
import Item from './Item';
import getMessage from '../../apis/get.js';
import styled from 'styled-components';
import { useMemo, useRef, useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import DashedLine1 from '../../assets/svg/점선.svg?react';
import DashedLine2 from '../../assets/svg/이중점선.svg?react';
import DashedLine3 from '../../assets/svg/하향대각점선.svg?react';
import DashedLine4 from '../../assets/svg/상향대각점선.svg?react';
import DashedLine5 from '../../assets/svg/엑스자점선.svg?react';
import getRandomQuestion from '../../utils/getRandomQuestion.js';
import { useContext } from 'react';
import RecentPost from '../contexts/RecentPost.jsx';
import MouseContext from '../contexts/MouseContext.jsx';

const ItemList = ({ isModalOpen, setIsModalOpen }) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //현재 선택된 item
  const [curItem, setCurItem] = useState(null);

  const { recentPost, setRecentPost } = useContext(RecentPost);

  //message list api 통신
  const getMessages = async () => {
    try {
      const {
        data: { messages },
      } = await getMessage();
      setData(messages);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getMessages();
    }, 500);
  }, []);

  const dashedLineList = [
    StyledDashedLine1,
    StyledDashedLine2,
    StyledDashedLine3,
    StyledDashedLine4,
    StyledDashedLine5,
  ];

  const getRandomIdxList = (listLength, maxNum) => {
    const result = [];
    for (let i = 0; i < listLength; i++) {
      const randomNum = Math.floor(Math.random() * (maxNum + 1));
      result.push(randomNum);
    }
    return result;
  };

  const randomIdxList = useRef(); //랜덤한 점선을 선택하기 위한 인덱스 리스트
  const randomQuestion = getRandomQuestion();

  useMemo(() => {
    if (data) {
      randomIdxList.current = getRandomIdxList(data.length, 4);
    }
  }, [data]);

  // 생성된 포스트로 스크롤
  const postRefs = useRef([]);

  const scrollToPost = () => {
    const target = postRefs.current.find((item) => item.id === recentPost);
    if (target) {
      target.element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isLoading) {
    setTimeout(() => {
      scrollToPost();
    }, 500);
  }

  return (
    <>
      {isLoading ? (
        <QuestionWrapper>
          <LoadingDots />
          {randomQuestion}
          <LoadingDots />
        </QuestionWrapper>
      ) : (
        <ItemListWrapper>
          {data &&
            data.map((item, idx) => (
              <React.Fragment key={`fragment-${idx}`}>
                {React.createElement(dashedLineList[randomIdxList.current[idx]], { key: `dashed-line-${idx}` })}
                <Item
                  ref={(el) => (postRefs.current[idx] = { id: item.name + item.phrase, element: el })}
                  archivedData={data}
                  key={String(item._id)}
                  id={item._id}
                  setIsModalOpen={setIsModalOpen}
                  setCurItem={setCurItem}
                />
              </React.Fragment>
            ))}
          <DescriptionModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} curItem={curItem} />
        </ItemListWrapper>
      )}
    </>
  );
};

export default ItemList;

const LoadingDots = styled.div`
  width: 25rem;
  height: 0.5rem;
  background: radial-gradient(circle closest-side, #737373 92%, #0000) calc(100% / 3) 0 / calc(100% / 4) 100%;
  animation: l2 0.5s infinite linear;

  @keyframes l2 {
    100% {
      background-position: 0 0;
    }
  }
`;

const QuestionWrapper = styled.aside`
  width: 100%;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 14rem;

  ${({ theme }) => theme.fonts.head1}
  color: ${({ theme }) => theme.colors.grey8};
`;

const ItemListWrapper = styled.main`
  width: 100%;

  overflow-y: scroll;

  /* display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5rem; */

  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */

  font-size: 0;

  padding-bottom: 30rem;
  padding-right: 40rem;
`;

const StyledDashedLine1 = styled(DashedLine1)`
  margin-top: 22rem;
`;

const StyledDashedLine2 = styled(DashedLine2)`
  margin-top: 4.2rem;
`;

const StyledDashedLine3 = styled(DashedLine3)`
  margin-top: 4.2rem;
`;

const StyledDashedLine4 = styled(DashedLine4)`
  margin-top: 4.2rem;
`;

const StyledDashedLine5 = styled(DashedLine5)`
  margin-top: 4.2rem;
`;
