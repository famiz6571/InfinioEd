import { IsOptional, IsBoolean, IsUUID } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBankAccountDto {
  @ApiPropertyOptional()
  @IsOptional()
  bankName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  accountHolderName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  accountNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  ifscCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  branchName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  accountType?: string;

  @ApiPropertyOptional({ description: 'Set as primary account' })
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
  
  @ApiPropertyOptional({
    description: 'Student ID associated with this account',
  })
  @IsOptional()
  @IsUUID()
  studentId?: string;
}
