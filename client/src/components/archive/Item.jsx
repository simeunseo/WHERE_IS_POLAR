import { ARCHIVE_DATA } from '../../data/archiveData';
import styled from 'styled-components';

const Item = ({ archivedData, id, setIsModalOpen, setCurItem }) => {
  const target = archivedData.find((item) => item.id === id);

  const handleItemClick = () => {
    setIsModalOpen(true);
    setCurItem(target);
  };
  return (
    <ItemWrapper onClick={handleItemClick}>
      {target.img_src ? (
        <Img src={target.img_src} alt={target.name} />
      ) : (
        <Img src="https://d1mp1wk28u6ko1.cloudfront.net/no-image.jpg" alt="no-image" />
      )}

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

  cursor: pointer;

  &:hover {
    img {
      filter: none;
    }

    div {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.grey10};
    }
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 80rem;
  height: 30rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};

  object-fit: cover;
  aspect-ratio: 1.2;

  filter: grayscale(1);

  transition: all 0.4s;
`;

const PhraseWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey10};
  border: 0.1rem solid ${({ theme }) => theme.colors.white};

  padding: 1rem;

  max-width: 70rem;

  ${({ theme }) => theme.fonts.head1}

  /* position: absolute; */
  overflow: hidden;
  /* text-wrap: nowrap; */
  text-wrap: wrap;

  text-overflow: ellipsis;
  /* width: calc((100% - 35rem) / 4); */
  width: 100%;
`;

const Phrase = styled.span``;
