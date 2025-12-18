import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('roles')
@UseGuards(JwtAuthGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':roleId')
  findOne(@Param('roleId') roleId: string) {
    return this.roleService.findOne(roleId);
  }

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Patch(':roleId')
  update(@Param('roleId') roleId: string, @Body() dto: UpdateRoleDto) {
    return this.roleService.update(roleId, dto);
  }
}
