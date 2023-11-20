import { ARCHIVE_DATA } from '../../data/archiveData';
import styled from 'styled-components';

const Item = ({ id, setIsModalOpen, setCurItem }) => {
  const target = ARCHIVE_DATA.find((item) => item.id === id);

  const handleItemClick = () => {
    setIsModalOpen(true);
    setCurItem(target);
  };
  return (
    <ItemWrapper onClick={handleItemClick}>
      <Img src={target.img_src} alt={target.name} />
      <PhraseWrapper>
        <Phrase>{target.phrase}</Phrase>
      </PhraseWrapper>
    </ItemWrapper>
  );
};

export default Item;

const ItemWrapper = styled.div`
  /* width: 30rem; */
  padding-top: 4.2rem;
`;

const Img = styled.img`
  width: 100%;
  height: 30rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};

  object-fit: cover;
  aspect-ratio: 1.2;

  filter: grayscale(1);

  transition: all 0.4s;
  &:hover {
    filter: none;
    cursor: pointer;
  }
`;

const PhraseWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey10};
  border: 0.1rem solid ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.head1}

  position: absolute;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  width: calc((100% - 14rem) / 4);

  &:hover {
    position: unset;
    text-wrap: wrap;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey10};

    cursor: pointer;
  }
`;

const Phrase = styled.span``;
