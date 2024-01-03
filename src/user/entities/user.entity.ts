import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'secondSchema', name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
