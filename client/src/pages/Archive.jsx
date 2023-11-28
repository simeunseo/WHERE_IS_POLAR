import Header from '../components/common/Header';
import ItemList from '../components/archive/ItemList';
import Footer from '../components/common/Footer';
import { useState } from 'react';
const Archive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header isModalOpen={isModalOpen} />
      <ItemList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
    </>
  );
};

export default Archive;
