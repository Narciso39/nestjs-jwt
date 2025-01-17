import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  // @Column({ name: 'created_at' })
  // createdAt: string;

  // @Column({ name: 'update_at' })
  // updatedAt: string;
  
  // @Column({ name: 'delete_at' })
  // deleteAt: string;
}
