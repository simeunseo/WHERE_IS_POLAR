import Constellation from '../assets/svg/constellation.svg?react';
import Header from '../components/common/Header';
import ItemList from '../components/archive/ItemList';
import styled from 'styled-components';
const Archive = () => {
  return (
    <>
      <Header />
      <ItemList />
      <StyledConstellation />
    </>
  );
};

export default Archive;

const StyledConstellation = styled(Constellation)`
  position: fixed;
  top: 0;
  z-index: -1;
`;
