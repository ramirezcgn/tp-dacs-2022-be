import Repository from './Repository';
import Booking from '../models/Booking';
import User from '../models/User';

export default class BookingRepository implements Repository {
  get(id) {
    return Booking.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Booking.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Booking.create(
      {
        ...data,
        user,
      },
      {
        association: Booking.User,
      },
    );
  }

  update(id, data) {
    return Booking.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Booking.destroy({
      where: {
        id,
      },
    });
  }
}
