import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { HashService } from '../common/hash/hash.service';
import { WhereOptions } from 'sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly hashService: HashService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashService.hash(createUserDto.password);
    const dto = {
      ...createUserDto,
      password: hashedPassword,
    };
    await this.userModel.create(dto as User);
    return {
      status: 'success',
      message: 'User created successfully',
    };
  }

  findAll() {
    return this.userModel.findAll({
      order: [['createdAt', 'DESC']],
    });
  }

  async findOne(where: WhereOptions<User>) {
    const user = await this.userModel.findOne({ where });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number | string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findOne({ where: { userId: id } });
    if (!user) throw new NotFoundException('User not found');

    if (updateUserDto.password) {
      updateUserDto.password = await this.hashService.hash(
        updateUserDto.password,
      );
    }

    await user.update(updateUserDto as Partial<User>);
    return { status: 'success', message: 'User updated successfully' };
  }
}
