// Home.js
import React from 'react';
import BitcoinRates from './BitcoinRates'; // Import BitcoinRates component

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {/* Other content */}
      <BitcoinRates /> {/* Use BitcoinRates component within the Home page */}
    </div>
  );
};

export default Home;


