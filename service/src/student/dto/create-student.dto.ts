import {
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsDateString,
  IsInt,
  IsBoolean,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  /* ================= IDENTITY ================= */
  @ApiProperty()
  @IsNotEmpty()
  admissionNo!: string;

  @ApiProperty()
  @IsNotEmpty()
  fullName!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  phoneCode?: string;

  @ApiProperty({ example: '123456', description: 'Password (min 6 chars)' })
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  /* ================= PERSONAL INFO ================= */
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gender?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nationality?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  bloodGroup?: string;

  /* ================= ACADEMIC INFO ================= */
  @ApiProperty()
  @IsNotEmpty()
  course!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  department?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  batch?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  semester?: number;

  @ApiProperty()
  @IsDateString()
  admissionDate!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  expectedGraduationDate?: string;

  /* ================= GUARDIAN INFO ================= */
  @ApiProperty({ required: false })
  @IsOptional()
  guardianName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  guardianRelation?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  guardianPhone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  guardianEmail?: string;

  /* ================= ADDRESS ================= */
  @ApiProperty({ required: false })
  @IsOptional()
  addressLine1?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  addressLine2?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  city?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  state?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  postalCode?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  country?: string;

  /* ================= STATUS ================= */
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  admissionStatus?: string; // Applied | Enrolled | Suspended | Graduated
}
