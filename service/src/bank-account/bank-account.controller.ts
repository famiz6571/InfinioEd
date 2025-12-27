import {
  Controller,
  Post,
  Patch,
  Get,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@UseGuards(JwtAuthGuard)
@Controller('bank-accounts')
export class BankAccountController {
  constructor(private readonly bankService: BankAccountService) {}

  @Post()
  create(@Body() dto: CreateBankAccountDto) {
    return this.bankService.create(dto);
  }
  @Get()
  findAllWithStudent() {
    return this.bankService.findAllWithStudent();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankService.findOne({ $bankAccountId$: id });
  }

  @Get('student/:studentId')
  findByStudent(@Param('studentId') studentId: string) {
    return this.bankService.findByStudent(studentId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBankAccountDto) {
    return this.bankService.update(id, dto);
  }

  @Patch(':id/deactivate')
  deactivate(@Param('id') id: string) {
    return this.bankService.deactivate(id);
  }
}
