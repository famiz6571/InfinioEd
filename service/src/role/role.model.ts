import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { RoleMenu } from './role-menu.model';
import { Menu } from '../menu/menu.model';
import { User } from '../user/user.model';

@Table({ tableName: 'roles', timestamps: true })
export class Role extends Model<Role> {
  @PrimaryKey
  @Default(uuidv4)
  @Column({ type: DataType.UUID })
  roleId: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  roleName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Menu, () => RoleMenu)
  menus?: Menu[];

  @HasMany(() => User)
  users?: User[];
}
