import { ARCHIVE_DATA } from '../../data/archiveData';
import { TABLET_MEDIA_QUERY } from '../../styles/mediaQuery';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Item = forwardRef(function Item({ archivedData, id, setIsModalOpen, setCurItem }, ref) {
  const target = archivedData.find((item) => item._id === id);

  const handleItemClick = () => {
    setIsModalOpen(true);
    setCurItem(target);
  };
  return (
    <ItemWrapper onClick={handleItemClick} ref={ref}>
      {target.imgSrc ? (
        <Img src={target.imgSrc} alt={target.name} />
      ) : (
        <Img src="https://d1mp1wk28u6ko1.cloudfront.net/no-image.jpg" alt="no-image" />
      )}

      <PhraseWrapper>
        <Phrase>{target.phrase}</Phrase>
      </PhraseWrapper>
    </ItemWrapper>
  );
});

export default Item;

const ItemWrapper = styled.div`
  @media ${TABLET_MEDIA_QUERY} {
    width: 30rem;
  }

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
  padding-top: 1.5rem;

  max-width: 70rem;

  ${({ theme }) => theme.fonts.head3}

  /* position: absolute; */
  overflow: hidden;
  /* text-wrap: nowrap; */
  text-wrap: wrap;

  text-overflow: ellipsis;
  /* width: calc((100% - 35rem) / 4); */
  width: 100%;
`;

const Phrase = styled.span``;
