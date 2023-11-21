import { ARCHIVE_DATA } from '../../data/archiveData';
import DescriptionModal from './DescriptionModal';
import Item from './Item';
import styled from 'styled-components';
import { useMemo, useRef, useState } from 'react';
import React from 'react';

import DashedLine1 from '../../assets/svg/점선.svg?react';
import DashedLine2 from '../../assets/svg/이중점선.svg?react';
import DashedLine3 from '../../assets/svg/하향대각점선.svg?react';
import DashedLine4 from '../../assets/svg/상향대각점선.svg?react';
import DashedLine5 from '../../assets/svg/엑스자점선.svg?react';

const ItemList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curItem, setCurItem] = useState(null);

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  const getRandomItem = (array) => {
    const randomIdx = Math.floor(Math.random() * array.length);
    return array[randomIdx];
  };

  const dashedLineList = [
    StyledDashedLine1,
    StyledDashedLine2,
    StyledDashedLine3,
    StyledDashedLine4,
    StyledDashedLine5,
  ];

  let randomNum = useRef();

  useMemo(() => {
    shuffle(ARCHIVE_DATA);
    randomNum.current = Math.floor(Math.random() * 9);
  }, []);

  return (
    <ItemListWrapper>
      {ARCHIVE_DATA.map((item) => (
        <>
          {React.createElement(getRandomItem(dashedLineList))}
          <Item
            key={String(item.id) + item.name}
            id={item.id}
            setIsModalOpen={setIsModalOpen}
            setCurItem={setCurItem}
          />
        </>
      ))}
      <DescriptionModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} curItem={curItem} />
    </ItemListWrapper>
  );
};

export default ItemList;

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

  padding: 0 10rem;
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
