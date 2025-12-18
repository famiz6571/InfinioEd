import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { HashService } from '../common/hash/hash.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import type { Response } from 'express';
import { Role } from '../role/role.model';
import { Menu } from '../menu/menu.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly hashService: HashService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService, // Use NestJS JwtService
  ) {}

  async login(email: string, password: string, res: Response) {
    // Find user including role and role menus
    const userInstance = await this.userModel.findOne({
      where: { email },
      include: [
        {
          model: Role,
          include: [Menu],
        },
      ],
    });

    if (!userInstance)
      throw new UnauthorizedException('Invalid email or password');

    const user = userInstance.toJSON();

    // Validate password
    const isValid = await this.hashService.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid email or password');

    // JWT secret
    const secret = this.configService.get<string>('JWT_SECRET');
    if (!secret) throw new Error('JWT_SECRET not defined');

    // ExpiresIn from config
    const expiresInConfig =
      this.configService.get<string>('JWT_EXPIRES_IN') || '1h';
    const expiresIn: '60s' | '1h' | '1d' | '7d' | '30d' =
      expiresInConfig as any; // cast to allowed type

    const payload = { userId: user.userId, email: user.email, name: user.name };
    const token = this.jwtService.sign(payload, { secret, expiresIn });

    // Set signed cookie
    const cookieSecret = this.configService.get<string>('COOKIE_SECRET');
    if (!cookieSecret) throw new Error('COOKIE_SECRET not defined');

    res.cookie('jwt', token, {
      httpOnly: true,
      signed: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
      maxAge: this.parseExpiresInToMs(expiresIn), // convert expiresIn to ms
    });

    // Attach role menus
    const menus = user.role?.menus || [];

    return {
      status: 'success',
      message: 'Logged in successfully',
      user: {
        userId: user.userId,
        email: user.email,
        name: user.name,
        role: {
          roleId: user.roleId,
          roleName: user.role?.roleName,
          menus: menus.map((m) => ({
            menuId: m.menuId,
            name: m.name,
            path: m.path,
            icon: m.icon,
            parentId: m.parentId,
            order: m.order,
          })),
        },
      },
    };
  }

  logout(res: Response) {
    res.clearCookie('jwt');
    return { status: 'success', message: 'Logged out successfully' };
  }

  private parseExpiresInToMs(expiresIn: string): number {
    const match = expiresIn.match(/^(\d+)([smhd])$/);
    if (!match) return 3600 * 1000; // default 1 hour
    const value = parseInt(match[1], 10);
    const unit = match[2];
    switch (unit) {
      case 's':
        return value * 1000;
      case 'm':
        return value * 60 * 1000;
      case 'h':
        return value * 60 * 60 * 1000;
      case 'd':
        return value * 24 * 60 * 60 * 1000;
      default:
        return 3600 * 1000;
    }
  }
}
