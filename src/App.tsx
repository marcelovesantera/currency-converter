import React, { useState } from 'react';
import exchangeRatesData from './database/currencyRates.json';
import { ICurrency } from './interfaces/Currency';
import { ICurrencyConverter } from './interfaces/CurrencyConverter';
import CurrencyConverter from './components/CurrencyConverter';

const exchangeRates: { [key: string]: ICurrency } = exchangeRatesData;

function App() {
  const initialCurrencyConverterState: ICurrencyConverter = {
    currencyFrom: exchangeRates['BRL'],
    valueFrom: exchangeRates['BRL'].rate,
    currencyTo: exchangeRates['USD'],
    valueTo: exchangeRates['USD'].rate,
  };

  const [currencyData, setCurrencyData] = useState<ICurrencyConverter>(initialCurrencyConverterState);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Currency Converter</h1>
      <CurrencyConverter
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
        exchangeRates={exchangeRates}
      />
    </div>
  );
}

export default App;
