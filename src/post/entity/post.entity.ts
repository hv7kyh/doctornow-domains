import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  title: string;

  @Column({ type: 'text', length: 500, nullable: false })
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
