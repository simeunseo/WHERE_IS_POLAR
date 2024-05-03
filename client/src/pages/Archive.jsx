import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ItemList from '../components/archive/ItemList';
import PostDreamBtn from '../components/common/PostDreamBtn';
import Responsive from '../components/common/Responsive/Responsive';
import { useState } from 'react';
const Archive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header isModalOpen={isModalOpen} />
      <ItemList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Responsive only="tablet">
        <PostDreamBtn />
      </Responsive>
      <Footer />
    </>
  );
};

export default Archive;
