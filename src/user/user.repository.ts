import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  /**
   * Find a user by their ID. Returns null if no user is found with the given ID.
   * @param id - The ID of the user to find.
   * @returns A Promise that resolves to the User if found, or null if not found.
   */
  async findById(id: number): Promise<User | null> {
    return this.findOneBy({ id });
  }

  /**
   * Find a user by their name. Returns null if no user is found with the given name.
   * @param name - The name of the user to find.
   * @returns A Promise that resolves to the User if found, or null if not found.
   */
  async findByName(name: string): Promise<User | null> {
    return this.findOneBy({ name });
  }

  /**
   * Find all users in the database.
   * @returns A Promise that resolves to an array of User entities.
   */
  async findAll(): Promise<User[]> {
    return this.find();
  }

  /**
   * Create a new user with the given name if a user with that name does not already exist. If a user with the given name already exists, returns the existing user.
   * @param name - The name of the user to create.
   * @returns A Promise that resolves to the newly created User, or the existing User if a user with the given name already exists.
   */
  async createIfNotExists(name: string): Promise<User> {
    let user = await this.findByName(name);
    if (!user) {
      user = this.create({ name });
      await this.save(user);
    }
    return user;
  }
}
