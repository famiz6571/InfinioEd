import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { Role } from '../role/role.model';
import { Menu } from '../menu/menu.model';
import { HashService } from '../common/hash/hash.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([User, Role, Menu]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): JwtModuleOptions => ({
        secret: configService.get<string>('JWT_SECRET') || 'defaultSecret',
        signOptions: {
          // convert string like "1h" to seconds using a helper
          expiresIn: parseExpires(
            configService.get<string>('JWT_EXPIRES_IN') || '1h',
          ),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, HashService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

// Helper function
function parseExpires(expiresIn: string): number {
  const match = expiresIn.match(/^(\d+)([smh])$/);
  if (!match) return 3600; // default 1 hour in seconds
  const value = parseInt(match[1], 10);
  switch (match[2]) {
    case 's':
      return value;
    case 'm':
      return value * 60;
    case 'h':
      return value * 3600;
    default:
      return 3600;
  }
}
