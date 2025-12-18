import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Menu } from 'src/menu/menu.model';

@Table({ tableName: 'role_menus', timestamps: false })
export class RoleMenu extends Model<RoleMenu> {
  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID })
  roleId: string;

  @ForeignKey(() => Menu)
  @Column({ type: DataType.UUID })
  menuId: string;
}
