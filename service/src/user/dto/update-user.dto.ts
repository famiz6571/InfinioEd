import {
  IsEmail,
  IsOptional,
  MinLength,
  IsBoolean,
  IsDateString,
  IsUUID,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'john@example.com',
    description: 'Email address of the user',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    example: '123456',
    description: 'Password (min 6 chars)',
  })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional({ example: 'john94', description: 'User name' })
  @IsOptional()
  userName?: string;

  @ApiPropertyOptional({
    example: '4888490030',
    description: 'User phone number',
  })
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ example: '+971', description: 'Country code of user' })
  @IsOptional()
  phoneCode?: string;

  @ApiPropertyOptional({
    example: 'en',
    description: 'Preferred language of the user',
  })
  @IsOptional()
  language?: string;

  @ApiPropertyOptional({
    example: 'US',
    description: 'Country of the user',
  })
  @IsOptional()
  country?: string;

  @ApiPropertyOptional({ example: true, description: 'Is the user active?' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: '1990-01-01' })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiPropertyOptional({ example: 'd9e73c33-b735-4049-a226-e7aa1761f59c' })
  @IsOptional()
  @IsUUID()
  roleId?: string;
}
