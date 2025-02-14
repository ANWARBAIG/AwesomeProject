import React, { createContext, useState } from 'react';
const defaultContextValue = {
  tagPosts: [],
  setTagPosts: () => {}, 
};

export const TagPostsContext = createContext(defaultContextValue);

const TagPostProvider = ({ children }) => {
  const [tagPosts, setTagPosts] = useState([]);

  return (
    <TagPostsContext.Provider value={{ tagPosts, setTagPosts }}>{children}</TagPostsContext.Provider>
  );
};

export default TagPostProvider;
