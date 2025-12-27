import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BankAccount } from './bank-account.model';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { Student } from '../student/student.model';
import { WhereOptions } from 'sequelize';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectModel(BankAccount)
    private bankAccountModel: typeof BankAccount,
  ) {}

  async create(dto: CreateBankAccountDto) {
    // Ensure only one primary account per student
    if (dto.isPrimary) {
      await this.bankAccountModel.update(
        { isPrimary: false },
        { where: { studentId: dto.studentId } },
      );
    }

    await this.bankAccountModel.create(dto as BankAccount);

    return {
      status: 'success',
      message: 'Bank account created successfully',
    };
  }
  async findOne(where: WhereOptions<BankAccount>) {
    const bankAccount = await this.bankAccountModel.findOne({ where });
    if (!bankAccount) throw new NotFoundException('Bank account not found');
    return bankAccount;
  }
  async findAllWithStudent() {
    return this.bankAccountModel.findAll({
      include: [
        {
          model: Student,
          attributes: ['studentId', 'fullName', 'email', 'phone'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
  }

  findByStudent(studentId: string) {
    return this.bankAccountModel.findAll({
      where: { studentId },
      order: [['createdAt', 'DESC']],
    });
  }

  async update(bankAccountId: string, dto: UpdateBankAccountDto) {
    const bankAccount = await this.bankAccountModel.findByPk(bankAccountId);

    if (!bankAccount) {
      throw new NotFoundException('Bank account not found');
    }

    // Ensure studentId exists before updating primary
    if (dto.isPrimary === true && bankAccount.studentId) {
      await this.bankAccountModel.update(
        { isPrimary: false },
        { where: { studentId: bankAccount.studentId } },
      );
    }

    await bankAccount.update(dto);

    return {
      status: 'success',
      message: 'Bank account updated successfully',
    };
  }

  async deactivate(bankAccountId: string) {
    const bankAccount = await this.bankAccountModel.findByPk(bankAccountId);
    if (!bankAccount) throw new NotFoundException('Bank account not found');

    await bankAccount.update({ isActive: false });

    return {
      status: 'success',
      message: 'Bank account deactivated',
    };
  }
}
