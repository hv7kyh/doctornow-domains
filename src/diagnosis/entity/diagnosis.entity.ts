import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Doctor, User } from '../../user/entity';

@Entity()
export class Diagnosis {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  user: User;

  @JoinColumn()
  doctor: Doctor;

  @Column({ type: 'varchar', length: 10 })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  public set setStatus(v: string) {
    this.status = v;
  }
}
