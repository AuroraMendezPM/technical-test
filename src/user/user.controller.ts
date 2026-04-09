import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
    description:
      'Creates a new user with the given name if a user with that name does not already exist. If a user with the given name already exists, returns the existing user.',
  })
  @ApiBody({
    description:
      'The data transfer object containing the name of the user to create.',
    type: CreateUserDto,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieves a list of all users.',
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
