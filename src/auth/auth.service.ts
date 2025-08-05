import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly jwtSecret = process.env.JWT_SECRET || 'secret';

  constructor(private usersService: UsersService) {}

  async register(email: string, password: string) {
    const user = await this.usersService.create(email, password);
    return { id: user.id, email: user.email };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = jwt.sign({ sub: user.id, email: user.email }, this.jwtSecret, {
      expiresIn: '1h',
    });
    return { access_token: token };
  }

  verify(token: string) {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch {
      throw new UnauthorizedException();
    }
  }
}
