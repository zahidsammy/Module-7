import React, { useState, useEffect, useReducer } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const initialState = {
  loading: true,
  bitcoinPrice: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        bitcoinPrice: action.payload,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        bitcoinPrice: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const useBitcoinPrice = (currency) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://rest.coinapi.io/v1/exchangerate/BTC/${currency}?apikey=0B887709-E9FE-4645-A0BE-F15ADD56ECD5`
        );
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: data.rate });
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', error: error.message });
      }
    };

    fetchBitcoinPrice();
  }, [currency]);

  return state;
};

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { loading, bitcoinPrice, error } = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={handleChange}>
          {options}
        </select>
      </label>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {bitcoinPrice !== null && !loading && !error && (
        <p>
          Current Bitcoin price in {currency}: {bitcoinPrice}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
