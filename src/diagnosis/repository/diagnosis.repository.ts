import { Diagnosis } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Diagnosis)
export class DiagnosisRepository extends Repository<Diagnosis> {}
