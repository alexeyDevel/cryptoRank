import { IsNotEmpty, IsNumber, IsNumberString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class ConvertCurrencyDto {
  @IsNotEmpty()
  @Length(2, 20)
  from: string;
  to: string;
  amount: string;
}
