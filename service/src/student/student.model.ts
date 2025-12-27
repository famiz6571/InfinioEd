import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  HasMany,
} from 'sequelize-typescript';
import { BankAccount } from '../bank-account/bank-account.model';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'students' })
export class Student extends Model<Student> {
  @PrimaryKey
  @Default(uuidv4)
  @Column(DataType.UUID)
  studentId!: string;

  /* ================= IDENTITY ================= */
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  admissionNo!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  fullName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email!: string;

  @Column(DataType.STRING)
  phone?: string;

  @Column(DataType.STRING)
  phoneCode?: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  /* ================= PERSONAL INFO ================= */
  @Column(DataType.DATEONLY)
  dateOfBirth?: string;

  @Column(DataType.STRING)
  gender?: string;

  @Column(DataType.STRING)
  nationality?: string;

  @Column(DataType.STRING)
  bloodGroup?: string;

  /* ================= ACADEMIC INFO ================= */
  @Column(DataType.STRING)
  course!: string;

  @Column(DataType.STRING)
  department?: string;

  @Column(DataType.STRING)
  batch?: string; // 2023–2027

  @Column(DataType.INTEGER)
  semester?: number;

  @Column(DataType.DATEONLY)
  admissionDate!: string;

  @Column(DataType.DATEONLY)
  expectedGraduationDate?: string;

  /* ================= GUARDIAN INFO ================= */
  @Column(DataType.STRING)
  guardianName?: string;

  @Column(DataType.STRING)
  guardianRelation?: string;

  @Column(DataType.STRING)
  guardianPhone?: string;

  @Column(DataType.STRING)
  guardianEmail?: string;

  /* ================= ADDRESS ================= */
  @Column(DataType.STRING)
  addressLine1?: string;

  @Column(DataType.STRING)
  addressLine2?: string;

  @Column(DataType.STRING)
  city?: string;

  @Column(DataType.STRING)
  state?: string;

  @Column(DataType.STRING)
  postalCode?: string;

  @Column(DataType.STRING)
  country?: string;

  /* ================= STATUS ================= */
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive!: boolean;

  @Column(DataType.STRING)
  admissionStatus?: string; // Applied | Enrolled | Suspended | Graduated

  @HasMany(() => BankAccount)
  bankAccounts?: BankAccount[];
}
