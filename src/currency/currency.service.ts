import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { convertCurrency } from './utils/converting';
import { IConversionResult } from './interfaces/IConversionResult';

@Injectable()
export class CurrencyService {
  async getPrice(
    keys: string,
    currency: string,
    amount: string,
  ): Promise<IConversionResult> {
    const responseFrom = await axios.get(
      `https://api.cryptorank.io/v0/coins/prices?keys=${keys}`,
    );
    const responseTo = await axios.get(
      `https://api.cryptorank.io/v0/coins/prices?keys=${currency}`,
    );
    const coinFrom = responseFrom?.data.data[0]?.price?.toString();
    const coinTo = responseTo?.data.data[0]?.price?.toString();

    if (!coinFrom || !coinTo) {
      throw new Error('Failed to retrieve coin prices');
    }

    const convertResult: number = convertCurrency(amount, coinFrom, coinTo);

    if (isNaN(convertResult)) {
      throw new Error('Conversion result is not a valid number');
    }
    return {
      amount: Number(amount),
      from: keys,
      to: currency,
      result: convertResult,
    };
  }
}
