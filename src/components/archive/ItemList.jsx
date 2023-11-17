import { ARCHIVE_DATA } from '../../data/archiveData';
import Item from './Item';
import styled from 'styled-components';

const ItemList = () => {
  return (
    <ItemListWrapper>
      {ARCHIVE_DATA.map((item) => (
        <Item key={String(item.id) + item.name} id={item.id} />
      ))}
    </ItemListWrapper>
  );
};

export default ItemList;

const ItemListWrapper = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  font-size: 0;

  padding: 0 4rem;
`;
