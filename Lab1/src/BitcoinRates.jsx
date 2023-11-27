import React, { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const apiKey = '0B887709-E9FE-4645-A0BE-F15ADD56ECD5'; // Your CoinAPI key

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://rest.coinapi.io/v1/exchangerate/BTC/${currency}?apikey=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          setBitcoinPrice(data.rate);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();
  }, [currency, apiKey]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null && (
        <p>
          Current Bitcoin price in {currency}: {bitcoinPrice}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
