"use client";

import React, { useState, useEffect } from 'react';

// Define the structure of the API response
interface ExchangeRatesResponse {
  rates: { [key: string]: number };
  base: string;
  timestamp: number;
}

export default function Exchange() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState<any>([]);
  const [error, setError] = useState('');

  const OPEN_EXCHANGE_RATES_APP_ID = process.env.NEXT_PUBLIC_OPEN_EXCHANGE_RATES_APP_ID;

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}?app_id=${OPEN_EXCHANGE_RATES_APP_ID}`);
        const data = await response.json();
        if (data.rates) {
          setCurrencies(Object.keys(data.rates) as string[]);
        } else {
          setError('Failed to fetch currencies.');
        }
      } catch (err) {
        setError('Error fetching currencies.');
        console.error(err);
      }
    };
    fetchCurrencies();
  }, [fromCurrency, OPEN_EXCHANGE_RATES_APP_ID]);

  const getExchangeRate = React.useCallback(async () => {
    if (fromCurrency && toCurrency && OPEN_EXCHANGE_RATES_APP_ID) {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}?app_id=${OPEN_EXCHANGE_RATES_APP_ID}`);
        const data = await response.json();
        if (data.rates && data.rates[toCurrency]) {
          setExchangeRate(data.rates[toCurrency]);
          setConvertedAmount(amount * data.rates[toCurrency]);
          setError('');
        } else {
          setError('Failed to fetch exchange rate.');
          setExchangeRate(null);
          setConvertedAmount(null);
        }
      } catch (err) {
        setError('Error fetching exchange rate.');
        console.error(err);
        setExchangeRate(null);
        setConvertedAmount(null);
      }
    }
  }, [fromCurrency, toCurrency, amount, OPEN_EXCHANGE_RATES_APP_ID]);

  const handleConvert = () => {
    getExchangeRate();
  };

  useEffect(() => {
    // Initial fetch or when currencies change
    getExchangeRate();
  }, [fromCurrency, toCurrency, OPEN_EXCHANGE_RATES_APP_ID, getExchangeRate]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Currency Exchange</h2>
      {error && <p style={styles.errorText}>{error}</p>}
      <div style={styles.formGroup}>
        <label htmlFor="amount" style={styles.label}>Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          style={styles.input}
          min="0"
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="fromCurrency" style={styles.label}>From:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={styles.select}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="toCurrency" style={styles.label}>To:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={styles.select}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConvert} style={styles.button}>Convert</button>

      {convertedAmount !== null && exchangeRate !== null && (
        <div style={styles.result}>
          <p>{amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}</p>
          <p>Exchange Rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '1.1rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: '#fff',
  },
  button: {
    padding: '12px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    width: '100%',
    maxWidth: '400px',
  },
  result: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#e6f7ff',
    border: '1px solid #91d5ff',
    borderRadius: '8px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  errorText: {
    color: 'red',
    marginBottom: '20px',
  },
};