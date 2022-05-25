import Repository from './Repository';
import Transport from '../models/Transport';

export default class TransportRepository implements Repository {
  get(id) {
    return Transport.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Transport.findAll();
  }

  create(data, _package) {
    return Transport.create(
      {
        ...data,
        package: _package,
      },
      {
        association: Transport.Package,
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
