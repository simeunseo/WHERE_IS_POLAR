import { createContext, useState } from 'react';

const RecentPost = createContext();

export const RecentPostProvider = ({ children }) => {
  const [recentPost, setRecentPost] = useState(null);
  return <RecentPost.Provider value={{ recentPost, setRecentPost }}>{children}</RecentPost.Provider>;
};

export default RecentPost;
