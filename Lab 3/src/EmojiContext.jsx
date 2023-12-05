// EmojiContext.js
import React, { createContext, useState } from 'react';

const EmojiContext = createContext();

const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevState) => !prevState);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export { EmojiContext, EmojiProvider };
