import { Controller, Get, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSearchRequest } from './request/user-search.request';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/all')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    return await this.usersService.findOne({ email, number: undefined });
  }
}
