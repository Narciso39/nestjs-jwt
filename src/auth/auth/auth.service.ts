import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/app/users/entities/user.entity';
import { UsersService } from 'src/app/users/users.service';
import { compareSync } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(userName: string, password: string) {
    let user: UserEntity;
    try {
      user = await this.userService.exists({ userName });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
