import {
  IsEmail,
  IsOptional,
  MinLength,
  IsBoolean,
  IsDateString,
  IsInt,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateStudentDto {
  /* ================= IDENTITY ================= */
  @ApiPropertyOptional()
  @IsOptional()
  admissionNo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  fullName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  phoneCode?: string;

  @ApiPropertyOptional({
    example: '123456',
    description: 'Password (min 6 chars)',
  })
  @IsOptional()
  @MinLength(6)
  password?: string;

  /* ================= PERSONAL INFO ================= */
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiPropertyOptional()
  @IsOptional()
  gender?: string;

  @ApiPropertyOptional()
  @IsOptional()
  nationality?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bloodGroup?: string;

  /* ================= ACADEMIC INFO ================= */
  @ApiPropertyOptional()
  @IsOptional()
  course?: string;

  @ApiPropertyOptional()
  @IsOptional()
  department?: string;

  @ApiPropertyOptional()
  @IsOptional()
  batch?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  semester?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  admissionDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expectedGraduationDate?: string;

  /* ================= GUARDIAN INFO ================= */
  @ApiPropertyOptional()
  @IsOptional()
  guardianName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  guardianRelation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  guardianPhone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  guardianEmail?: string;

  /* ================= ADDRESS ================= */
  @ApiPropertyOptional()
  @IsOptional()
  addressLine1?: string;

  @ApiPropertyOptional()
  @IsOptional()
  addressLine2?: string;

  @ApiPropertyOptional()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  state?: string;

  @ApiPropertyOptional()
  @IsOptional()
  postalCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  country?: string;

  /* ================= STATUS ================= */
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  admissionStatus?: string; // Applied | Enrolled | Suspended | Graduated
}
