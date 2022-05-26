import Repository from './Repository';
import Accommodation from '../models/Accommodation';

export default class AccommodationRepository implements Repository {
  get(id) {
    return Accommodation.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Accommodation.findAll();
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
