import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Student } from 'src/student/student.model';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'bank_accounts' })
export class BankAccount extends Model<BankAccount> {
  @PrimaryKey
  @Default(uuidv4)
  @Column(DataType.UUID)
  bankAccountId!: string;

  /* ================= RELATION ================= */
  @ForeignKey(() => Student)
  @Column({ type: DataType.UUID, allowNull: false })
  studentId!: string;

  @BelongsTo(() => Student)
  student?: Student;

  /* ================= BANK INFO ================= */
  @Column({ type: DataType.STRING, allowNull: false })
  bankName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  accountHolderName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  accountNumber!: string;

  @Column(DataType.STRING)
  ifscCode?: string;

  @Column(DataType.STRING)
  branchName?: string;

  @Column(DataType.STRING)
  accountType?: string; // Savings / Current

  /* ================= STATUS ================= */
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isPrimary!: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive!: boolean;
}
