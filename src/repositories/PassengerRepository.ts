import Repository from './Repository';
import Passenger from '../models/Passenger';
import User from '../models/User';

export default class PassengerRepository implements Repository {
  get(id) {
    return Passenger.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Passenger.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Passenger.create({
      ...data,
      UserId: user.id,
    });
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
