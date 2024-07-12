import { calculateValueTo } from './currencyConverterUtils';

describe('currencyConverterUtils', () => {
  it('Calcular valor convertido', () => {
    const valueFrom = 100;
    const rateFrom = 5.25;
    const rateTo = 1.0;

    const expectedValueTo = parseFloat(((valueFrom / rateFrom) * rateTo).toFixed(4));
    const valueTo = calculateValueTo(valueFrom, rateFrom, rateTo);

    expect(valueTo).toBe(expectedValueTo);
  });

  it('Tratar valores se inserido zero', () => {
    const valueFrom = 0;
    const rateFrom = 5.25;
    const rateTo = 1.0;

    const expectedValueTo = parseFloat(((valueFrom / rateFrom) * rateTo).toFixed(4));
    const valueTo = calculateValueTo(valueFrom, rateFrom, rateTo);

    expect(valueTo).toBe(expectedValueTo);
  });

  it('Calcular valores com taxas diferentes de USD', () => {
    const valueFrom = 10;
    const rateFrom = 6.48;
    const rateTo = 0.73;

    const expectedValueTo = parseFloat(((valueFrom / rateFrom) * rateTo).toFixed(4));
    const valueTo = calculateValueTo(valueFrom, rateFrom, rateTo);

    expect(valueTo).toBe(expectedValueTo);
  });
});
