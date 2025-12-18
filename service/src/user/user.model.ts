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
import { Role } from '../role/role.model';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  // Auto-increment identity column
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  declare id: number;

  // UUID primary key
  @PrimaryKey
  @Default(uuidv4)
  @Column({ type: DataType.UUID })
  userId!: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email!: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  userName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phoneCode!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive!: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  language?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  country?: string;

  @Column({ type: DataType.DATEONLY, allowNull: true })
  dateOfBirth?: string;

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, allowNull: false })
  roleId!: string;

  @BelongsTo(() => Role)
  role?: Role;
}
