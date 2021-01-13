import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Diagnosis } from '.';

@Entity()
export class Prescription {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  diagnosis: Diagnosis;

  @CreateDateColumn()
  createdAt: Date;
}
