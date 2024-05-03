import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ItemList from '../components/archive/ItemList';
import PostDreamBtn from '../components/common/PostDreamBtn';
import Responsive from '../components/common/Responsive/Responsive';
import { TABLET_MEDIA_QUERY } from '../styles/mediaQuery';
import styled from 'styled-components';
import { useState } from 'react';
const Archive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ArchiveWrapper>
      <Header isModalOpen={isModalOpen} />
      <ItemList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Responsive only="tablet">
        <PostDreamBtn />
      </Responsive>
      <Responsive only="desktop">
        <Footer />
      </Responsive>
    </ArchiveWrapper>
  );
};

export default Archive;

const ArchiveWrapper = styled.div`
  @media ${TABLET_MEDIA_QUERY} {
    height: 100vh;
    @supports (height: 100dvh) {
      height: 100dvh;
    }

    width: 100%;
    overflow: scroll;
  }
`;
