export { Doctor, User } from './user/entity';
export { Admin } from './admin/entity';
export { Diagnosis, Prescription } from './diagnosis/entity';
export { Post } from './post/entity';

export { DoctorRepository, UserRepository } from './user/repository';
export { AdminRepository } from './admin/repository';
export {
  DiagnosisRepository,
  PrescriptionRepository,
} from './diagnosis/repository';
export { PostRepository } from './post/repository';
