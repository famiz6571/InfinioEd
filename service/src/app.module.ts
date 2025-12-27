import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.model';
import { Menu } from './menu/menu.model';
import { RoleMenu } from './role/role-menu.model';
import { StatsModule } from './stats/stats.module';
import { StudentModule } from './student/student.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { Student } from './student/student.model';
import { BankAccount } from './bank-account/bank-account.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') || '5432'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        models: [User, Role, Menu, RoleMenu,Student,BankAccount],
        autoLoadModels: true,
        synchronize: true,
        dialectOptions: {
          ssl: config.get<string>('DB_SSL') === 'true',
        },
      }),
      inject: [ConfigService],
    }),

    UserModule,
    AuthModule,
    MenuModule,
    RoleModule,
    StatsModule,
    StudentModule,
    BankAccountModule,
  ],
})
export class AppModule {}
