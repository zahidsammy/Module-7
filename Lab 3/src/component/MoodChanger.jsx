import React, { useContext } from 'react';
import { BitcoinRates } from '../BitcoinRates'; // Update the path accordingly
import {EmojiContext} from '../EmojiContext';

const MoodChanger = () => {
  const { isHappy } = useContext(EmojiContext);

  return (
    <div>
      <span role="img" aria-label="emoji">
        {isHappy ? '😊' : '😢'}
      </span>
      <button onClick={() => { /* Implement your toggle mood logic */ }}>Change Mood</button>
      {/* Display Bitcoin rate */}
      <BitcoinRates />
    </div>
  );
};

export default MoodChanger;


