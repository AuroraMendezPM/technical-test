import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Create a new user with the given name if a user with that name does not already exist. If a user with the given name already exists, returns the existing user.
   * @param createUserDto - The data transfer object containing the name of the user to create.
   * @returns A Promise that resolves to the newly created User, or the existing User if a user with the given name already exists.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = await this.userRepository.createIfNotExists(
      createUserDto.name,
    );
    return user;
  }

  /**
   * Find all users in the database.
   * @returns A Promise that resolves to an array of User entities.
   */
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
