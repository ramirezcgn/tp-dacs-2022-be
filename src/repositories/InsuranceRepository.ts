import Repository from './Repository';
import Insurance from '../models/Insurance';
import User from '../models/User';

export default class InsuranceRepository implements Repository {
  get(id) {
    return Insurance.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Insurance.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Insurance.create({
      ...data,
      UserId: user.id,
    });
  }

  update(id, data) {
    return Insurance.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Insurance.destroy({
      where: {
        id,
      },
    });
  }
}
