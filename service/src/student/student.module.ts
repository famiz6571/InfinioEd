import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BankAccount } from '../bank-account/bank-account.model';
import { Student } from './student.model';
import { HashService } from '../common/hash/hash.service';

@Module({
  imports: [SequelizeModule.forFeature([BankAccount, Student])],
  controllers: [StudentController],
  providers: [StudentService, HashService],
})
export class StudentModule {}
