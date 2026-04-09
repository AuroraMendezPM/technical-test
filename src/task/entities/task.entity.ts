import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'boolean', default: false })
  completed!: boolean;

  @ManyToOne(() => User, (user) => user.tasks, { eager: true })
  user!: User;
}
