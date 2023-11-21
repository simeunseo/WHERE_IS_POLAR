import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Archive from './pages/Archive';
import Gate from './pages/Gate';
import Home from './pages/Root';
import Root from './pages/Root';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/gate" element={<Gate />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
