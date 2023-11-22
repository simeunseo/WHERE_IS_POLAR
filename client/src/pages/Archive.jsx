import Constellation from '../assets/svg/constellation.svg?react';
import Header from '../components/common/Header';
import ItemList from '../components/archive/ItemList';
import styled from 'styled-components';
import { useState } from 'react';
const Archive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header isModalOpen={isModalOpen} />
      <ItemList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* <StyledConstellation /> */}
    </>
  );
};

export default Archive;

const StyledConstellation = styled(Constellation)`
  position: fixed;
  top: 0;
  z-index: -1;

  width: 100%;
  height: 100%;
`;
