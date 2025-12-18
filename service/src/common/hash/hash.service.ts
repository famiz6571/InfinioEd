import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HashService {
  private readonly saltRounds = 10;

  constructor(private configService: ConfigService) {}

  async hash(value: string): Promise<string> {
    const pepper = this.configService.get<string>('HASH_PEPPER') || '';
    return bcrypt.hash(value + pepper, this.saltRounds);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const pepper = this.configService.get<string>('HASH_PEPPER') || '';
    return bcrypt.compare(value + pepper, hash);
  }
}
