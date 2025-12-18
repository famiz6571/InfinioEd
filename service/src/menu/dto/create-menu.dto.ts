import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty({
    example: 'Dashboard',
    description: 'Menu display name',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: '/users',
    description: 'Route path (null for parent menus)',
  })
  @IsOptional()
  @IsString()
  path?: string;

  @ApiProperty({
    example: 'mdi:view-dashboard',
    description: 'Iconify icon name',
  })
  @IsString()
  icon: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Menu display order',
  })
  @IsOptional()
  @IsNumber()
  order?: number;

  @ApiPropertyOptional({
    example: true,
    description: 'Is menu active?',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    example: '7c1c5c4a-9a2e-4e8d-a5f1-91d6a2e3b321',
    description: 'Parent menu UUID (for submenus)',
  })
  @IsOptional()
  @IsUUID()
  parentId?: string;
}
