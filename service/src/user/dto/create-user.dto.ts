import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsUUID, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'Password (min 6 chars)' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'john94', description: 'User name' })
  @IsNotEmpty()
  userName: string;

  @ApiProperty({ example: '4888490030', description: 'User phone number' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '+971', description: 'Country code of user' })
  @IsNotEmpty()
  phoneCode: string;

  @ApiProperty({
    example: 'en',
    description: 'Preferred language of the user',
    required: false,
  })
  language?: string;

  @ApiProperty({
    example: 'US',
    description: 'Country of the user',
    required: false,
  })
  country?: string;

  @ApiProperty({ example: '1990-01-01', required: false })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiProperty({
    example: 'd9e73c33-b735-4049-a226-e7aa1761f59c',
    required: true,
  })
  @IsNotEmpty()
  @IsUUID()
  roleId!: string;
}
