import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Menu } from './menu.model';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu)
    private readonly menuModel: typeof Menu,
  ) {}

  async create(dto: CreateMenuDto) {
    await this.menuModel.create(dto as Menu);
    return {
      status: 'success',
      message: 'Menu created successfully',
    };
  }

  async findAll() {
    return this.menuModel.findAll({
      where: { isActive: true },
      include: [{ model: Menu, as: 'children' }],
      order: [
        ['order', 'ASC'],
        [{ model: Menu, as: 'children' }, 'order', 'ASC'],
      ],
    });
  }

  async findOne(id: number) {
    const menu = await this.menuModel.findByPk(id, {
      include: ['children'],
    });

    if (!menu) throw new NotFoundException('Menu not found');
    return menu;
  }

  async update(id: number, dto: UpdateMenuDto) {
    const menu = await this.findOne(id);
    await menu.update(dto);
    return { status: 'success', message: 'Menu updated successfully' };
  }

  async remove(id: number) {
    const menu = await this.findOne(id);
    await menu.destroy();
    return { status: 'success', message: 'Menu deleted' };
  }
}
