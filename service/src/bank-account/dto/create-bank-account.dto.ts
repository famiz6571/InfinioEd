import { IsNotEmpty, IsUUID, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBankAccountDto {
  @ApiProperty()
  @IsUUID()
  studentId!: string;

  @ApiProperty()
  @IsNotEmpty()
  bankName!: string;

  @ApiProperty()
  @IsNotEmpty()
  accountHolderName!: string;

  @ApiProperty()
  @IsNotEmpty()
  accountNumber!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ifscCode?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  branchName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  accountType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
