import { ARCHIVE_DATA } from '../../data/archiveData';
import DescriptionModal from './DescriptionModal';
import Item from './Item';
import styled from 'styled-components';
import { useState } from 'react';

const ItemList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curItem, setCurItem] = useState(null);

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  shuffle(ARCHIVE_DATA);

  return (
    <ItemListWrapper>
      {ARCHIVE_DATA.map((item) => (
        <Item key={String(item.id) + item.name} id={item.id} setIsModalOpen={setIsModalOpen} setCurItem={setCurItem} />
      ))}
      <DescriptionModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} curItem={curItem} />
    </ItemListWrapper>
  );
};

export default ItemList;

const ItemListWrapper = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5rem;

  font-size: 0;

  padding: 0 10rem;
  padding-bottom: 30rem;
`;
