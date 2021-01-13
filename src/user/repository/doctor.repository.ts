import { Doctor } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {}
