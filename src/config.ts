import { Diagnosis, Prescription } from './diagnosis/entity';
import { User, Doctor } from './user/entity';

export const ormConfig = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1q2w3e4r',
  database: 'mydb',
  entities: [User, Doctor, Diagnosis, Prescription],
  synchronize: true,
};
