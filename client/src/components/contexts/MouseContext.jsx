import { createContext, useState } from 'react';

const MouseContext = createContext();

export const MouseContextProvider = ({ children }) => {
  const [xy, setXY] = useState({ x: -1000, y: -1000 });
  return <MouseContext.Provider value={{ xy, setXY }}>{children}</MouseContext.Provider>;
};

export default MouseContext;
