import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BankAccount } from './bank-account.model';
import { Student } from '../student/student.model';

@Module({
  imports: [SequelizeModule.forFeature([BankAccount, Student])],
  controllers: [BankAccountController],
  providers: [BankAccountService],
})
export class BankAccountModule {}
