export const calculateValueTo = (
  valueFrom: number,
  rateFrom: number,
  rateTo: number
): number => {
  return parseFloat(((valueFrom / rateFrom) * rateTo).toFixed(4));
};
