import Repository from './Repository';
import Transport from '../models/Transport';
import User from '../models/User';

export default class TransportRepository implements Repository {
  get(id) {
    return Transport.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Transport.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return Transport.create(
      {
        ...data,
        user,
      },
      {
        association: Transport.User,
      },
    );
  }

  update(id, data) {
    return Transport.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Transport.destroy({
      where: {
        id,
      },
    });
  }
}
