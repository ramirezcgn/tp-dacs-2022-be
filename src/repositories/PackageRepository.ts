import Repository from './Repository';
import Package from '../models/Package';
import User from '../models/User';

export default class PackageRepository implements Repository {
  get(id) {
    return Package.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Package.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Package.create({
      ...data,
      UserId: user.id,
    });
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
