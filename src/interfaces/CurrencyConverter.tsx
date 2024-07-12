import { ICurrency } from "./Currency";

export interface ICurrencyConverter {
  currencyFrom: ICurrency;
  valueFrom: number;
  currencyTo: ICurrency;
  valueTo: number;
}