import { User } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public myFindOne(id: number) {
    console.log('아이디로 파인드');
    return super.findOne(id);
  }
}
