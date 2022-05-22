import Repository from './Repository';
import Passenger from '../models/Passenger';
import User from '../models/User';

export default class PassengerRepository implements Repository {
  get(id) {
    return Passenger.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Passenger.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return Passenger.create(
      {
        ...data,
        user,
      },
      {
        association: Passenger.User,
      },
    );
  }

  update(id, data) {
    return Passenger.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Passenger.destroy({
      where: {
        id,
      },
    });
  }
}
