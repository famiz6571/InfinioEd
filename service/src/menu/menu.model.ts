import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'menus', timestamps: true })
export class Menu extends Model<Menu> {
  @PrimaryKey
  @Default(uuidv4)
  @Column({ type: DataType.UUID })
  menuId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  path?: string;

  @Column({ type: DataType.STRING, allowNull: false })
  icon: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  order?: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @ForeignKey(() => Menu)
  @Column({ type: DataType.UUID, allowNull: true })
  parentId?: string;

  @BelongsTo(() => Menu, { foreignKey: 'parentId' })
  parent?: Menu;

  @HasMany(() => Menu, { foreignKey: 'parentId' })
  children?: Menu[];
}
