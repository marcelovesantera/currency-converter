import React from "react";
import { Box, TextField, Grid, MenuItem } from "@mui/material";
import { ICurrencyConverter } from "../interfaces/CurrencyConverter";
import { ICurrency } from "../interfaces/Currency";
import { calculateValueTo } from "../utils/currencyConverterUtils";

interface IProps {
  currencyData: ICurrencyConverter;
  setCurrencyData: (currency: ICurrencyConverter) => void;
  exchangeRates: { [key: string]: ICurrency };
}

const CurrencyConverter = ({ currencyData, setCurrencyData, exchangeRates }: IProps) => {
  const onHandleChangeValueFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFrom = parseFloat(e.target.value);

    if (!isNaN(valueFrom)) {
      const rateFrom = currencyData.currencyFrom.rate;
      const rateTo = currencyData.currencyTo.rate;
      const valueTo = calculateValueTo(valueFrom, rateFrom, rateTo);

      setCurrencyData({ ...currencyData, valueFrom, valueTo });
    } else {
      setCurrencyData({ ...currencyData, valueFrom: 0, valueTo: 0 });
    }
  };

  const onHandleChangeCurrencyFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCurrencyFrom = exchangeRates[e.target.value];

    const rateFrom = newCurrencyFrom.rate;
    const rateTo = currencyData.currencyTo.rate;
    const valueTo = calculateValueTo(currencyData.valueFrom, rateFrom, rateTo);

    setCurrencyData({ ...currencyData, currencyFrom: newCurrencyFrom, valueTo });
  };

  const onHandleChangeCurrencyTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCurrencyTo = exchangeRates[e.target.value];

    const rateFrom = currencyData.currencyFrom.rate;
    const rateTo = newCurrencyTo.rate;
    const valueTo = calculateValueTo(currencyData.valueFrom, rateFrom, rateTo);

    setCurrencyData({ ...currencyData, currencyTo: newCurrencyTo, valueTo });
  };

  return (
    <Box component="form" sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            id="outlined-select-from-currency"
            select
            label="De"
            value={currencyData.currencyFrom.value}
            onChange={onHandleChangeCurrencyFrom}
            variant="outlined"
            sx={{ mb: 2 }}
          >
            {Object.keys(exchangeRates).map((key) => (
              <MenuItem key={exchangeRates[key].id} value={exchangeRates[key].value}>
                {exchangeRates[key].value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-value-from"
            label="Valor"
            type="number"
            value={currencyData.valueFrom}
            onChange={onHandleChangeValueFrom}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-select-to-currency"
            select
            label="Para"
            value={currencyData.currencyTo.value}
            onChange={onHandleChangeCurrencyTo}
            variant="outlined"
            sx={{ mb: 2 }}
          >
            {Object.keys(exchangeRates).map((key) => (
              <MenuItem key={exchangeRates[key].id} value={exchangeRates[key].value}>
                {exchangeRates[key].value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-value-to"
            label="Valor Convertido"
            type="number"
            value={currencyData.valueTo}
            variant='filled'
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrencyConverter;
