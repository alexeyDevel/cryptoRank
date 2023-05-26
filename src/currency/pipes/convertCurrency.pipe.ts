import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isNumberString, length } from 'class-validator';
import { ConvertCurrencyDto } from '../dto/convert-currency.dto';

@Injectable()
export class ConvertCurrencyPipe implements PipeTransform<any, any> {
  transform(value: any, metadata: ArgumentMetadata): ConvertCurrencyDto {
    const { from, to, amount } = value;

    // Проверка значений и присвоение значений по умолчанию
    const convertedValue = {
      from: from,
      to: to || 'tether',
      amount: amount || '1',
    };

    // Проверка значений
    if (!length(convertedValue.from, 2, 20)) {
      throw new BadRequestException('from must be between 2 and 20 characters');
    }
    if (!length(convertedValue.to, 2, 20)) {
      throw new BadRequestException('to must be between 2 and 20 characters');
    }
    if (!isNumberString(convertedValue.amount)) {
      throw new BadRequestException('amount must be a number string');
    }

    return convertedValue;
  }
}
