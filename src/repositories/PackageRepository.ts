import Repository from './Repository';
import Package from '../models/Package';
import User from '../models/User';

export default class PackageRepository implements Repository {
  get(id) {
    return Package.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Package.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return Package.create(
      {
        ...data,
        user,
      },
      {
        association: Package.User,
      },
    );
  }

  update(id, data) {
    return Package.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Package.destroy({
      where: {
        id,
      },
    });
  }
}
