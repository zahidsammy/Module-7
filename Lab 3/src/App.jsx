import React from 'react';
import { EmojiProvider } from './EmojiContext'; // Update the path accordingly
import MoodChanger from './component/MoodChanger'; // Update the path accordingly
import BitcoinRates from './BitcoinRates'; // Update the path accordingly

function App() {
  return (
    <EmojiProvider>
      <div>
        <div className="Header">
          <h1>Bitcoin Exchange Rates</h1>
        </div>
        <MoodChanger />
        <BitcoinRates />
      </div>
    </EmojiProvider>
  );
}

export default App;

