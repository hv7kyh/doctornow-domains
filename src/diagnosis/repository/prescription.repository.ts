import { Prescription } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Prescription)
export class PrescriptionRepository extends Repository<Prescription> {}
