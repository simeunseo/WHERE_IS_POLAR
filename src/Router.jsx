import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Archive from './pages/Archive';
import Gate from './pages/Gate';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gate />} />
        <Route path="/main" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
