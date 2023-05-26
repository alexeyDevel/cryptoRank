import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';
import { ConvertCurrencyPipe } from './pipes/convertCurrency.pipe';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('convert')
  async create(
    @Query(ConvertCurrencyPipe) convertCurrencyDto: ConvertCurrencyDto,
  ) {
    try {
      return this.currencyService.getPrice(
        convertCurrencyDto.from,
        convertCurrencyDto.to,
        convertCurrencyDto.amount,
      );
    } catch (er) {
      return {};
    }
  }
}
