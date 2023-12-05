// BitcoinRates.js
import React, { useState, useEffect } from 'react';

const BitcoinRates = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '0B887709-E9FE-4645-A0BE-F15ADD56ECD5'; // Your API key
  const currency = 'USD'; // Default currency, can be toggled

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://rest.coinapi.io/v1/exchangerate/BTC/${currency}?apikey=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          setBitcoinPrice(data.rate); // Assuming the rate field contains the Bitcoin rate
          setLoading(false);
          setError(null);
        } else {
          throw new Error('Failed to fetch Bitcoin rate');
        }
      } catch (error) {
        console.error('Error fetching Bitcoin rate:', error);
        setLoading(false);
        setError('Failed to fetch Bitcoin rate');
        setBitcoinPrice(null);
      }
    };

    fetchBitcoinPrice();
  }, [currency, apiKey]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h3>Bitcoin Exchange Rate</h3>
      <p>Current Bitcoin rate in {currency}: {bitcoinPrice}</p>
    </div>
  );
};

export default BitcoinRates;

