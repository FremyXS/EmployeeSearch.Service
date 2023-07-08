import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/user.entity';
import { UserSearchRequest } from './request/user-search.request';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(userSearchRequest: UserSearchRequest) {
    const user = await this.userRepository.findOneBy({
      email: userSearchRequest.email,
    });
    if (user) {
      return Promise.resolve(user);
    }

    throw new NotFoundException(
      `User with email ${userSearchRequest.email} not found`,
    );
  }
}
