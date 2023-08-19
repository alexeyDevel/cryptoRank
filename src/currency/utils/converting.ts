import { BigDecimal, RoundingMode } from 'bigdecimal';

export function convertCurrency(
  count: string,
  amountFrom: string,
  amountTo: string,
): number {
  const down = RoundingMode.DOWN();
  try {
    const amountDecBD = new BigDecimal(count);
    const amountFromBD = new BigDecimal(amountFrom);
    const amountToBD = new BigDecimal(amountTo);
    const conversionRate = amountFromBD.divide(amountToBD, 20, down);
    const convertedAmount = amountDecBD.multiply(conversionRate);
    return Number(convertedAmount);
  } catch (error) {
    console.log(error);
    throw new Error('Error occurred during conversion');
    return NaN;
  }
}
