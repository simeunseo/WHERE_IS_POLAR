import { ARCHIVE_DATA } from '../../data/archiveData';
import { QUESTION_LIST } from '../../data/questionList';
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

const ItemList = ({ isModalOpen, setIsModalOpen }) => {
  const [data, setData] = useState('');
  const [archivedData, setArchivedData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //message list api 통신
  const getMessages = async () => {
    try {
      setIsLoading(true);
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
    getMessages();
  }, []);

  //상수 데이터와 서버 데이터 합치기
  useEffect(() => {
    console.log(data);
    if (data) {
      const allData = ARCHIVE_DATA.concat(data);
      setArchivedData(allData);
    }
  }, [data]);

  //현재 선택된 item
  const [curItem, setCurItem] = useState(null);

  const shuffle = (array) => {
    array && array.sort(() => Math.random() - 0.5);
  };

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
    shuffle(archivedData);
    randomIdxList.current = getRandomIdxList(archivedData.length, 4);
  }, [archivedData]);

  return (
    <>
      {isLoading ? (
        <QuestionWrapper>{randomQuestion}</QuestionWrapper>
      ) : (
        <ItemListWrapper>
          {archivedData &&
            archivedData.map((item, idx) => (
              <React.Fragment key={`fragment-${idx}`}>
                {React.createElement(dashedLineList[randomIdxList.current[idx]], { key: `dashed-line-${idx}` })}
                <Item
                  archivedData={archivedData}
                  key={String(item._id) + item.name}
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

const QuestionWrapper = styled.aside`
  width: 100%;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 14rem;

  ${({ theme }) => theme.fonts.head1}
  color: ${({ theme }) => theme.colors.grey8}
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
