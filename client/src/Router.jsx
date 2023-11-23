import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Archive from './pages/Archive';
import Gate from './pages/Gate';
import Root from './pages/Root';
import Yours from './pages/Yours';
import Magazine from './pages/Magazine';
import Magazine1 from './pages/Magazine1';
import Magazine2 from './pages/Magazine2';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/gate" element={<Gate />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/yours" element={<Yours />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/magazine/1" element={<Magazine1 />} />
        <Route path="/magazine/2" element={<Magazine2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
