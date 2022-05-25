import Repository from './Repository';
import Accommodation from '../models/Accommodation';
import User from '../models/User';

export default class AccommodationRepository implements Repository {
  get(id) {
    return Accommodation.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Accommodation.findAll({ include: User });
  }

  create(data, _package) {
    return Accommodation.create(
      {
        ...data,
        package: _package,
      },
      {
        association: Accommodation.Package,
      },
    );
  }

  update(id, data) {
    return Accommodation.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Accommodation.destroy({
      where: {
        id,
      },
    });
  }
}
