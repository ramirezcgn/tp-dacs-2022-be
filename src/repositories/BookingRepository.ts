import Repository from './Repository';
import Booking from '../models/Booking';

export default class BookingRepository implements Repository {
  get(id) {
    return Booking.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Booking.findAll();
  }

  create(data, _customer, _package) {
    return Booking.create({
      ...data,
      PackageId: _package.id,
      CustomerId: _customer.id,
    });
  }

  async assignPassenger(id, passenger) {
    const booking = await this.get(id);
    if (!booking) {
      return false;
    }
    return booking.addPassenger(passenger);
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
