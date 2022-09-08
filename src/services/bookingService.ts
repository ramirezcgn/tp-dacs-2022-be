import BookingRepository from '../repositories/BookingRepository';
import passengerService from './passengerService';

const booking = new BookingRepository();

class BookingService {
  get(id) {
    return booking.get(id);
  }

  getAll(page, limit) {
    return booking.getAll(page, limit);
  }

  create(data, _customer, _package) {
    return booking.create(data, _customer, _package);
  }

  update(id, data) {
    return booking.update(id, data);
  }

  remove(id) {
    return booking.remove(id);
  }

  async createPassenger(id, data) {
    const p = await passengerService.create(data);
    return booking.assignPassenger(id, p);
  }

  async assignPassenger(id, pd) {
    const p = await passengerService.get(pd);
    if (!p) {
      return false;
    }
    return booking.assignPassenger(id, p);
  }
}

export default new BookingService();
