import BookingRepository from '../repositories/BookingRepository';
import passengerService from './passengerService';

const booking = new BookingRepository();

const bookingService = () => {
  const get = (id) => booking.get(id);
  const getAll = (page, limit) => booking.getAll(page, limit);
  const create = (data, _customer, _package) =>
    booking.create(data, _customer, _package);
  const update = (id, data) => booking.update(id, data);
  const remove = (id) => booking.remove(id);

  const createPassenger = async (id, data) => {
    const b = await get(id);
    if (!b) {
      return false;
    }
    const p = passengerService().create(data);
    return b + p;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const assignPassenger = async (id, pd) => {
    const b = await get(id);
    if (!b) {
      return false;
    }
    // eslint-disable-next-line no-undef
    return passengerService().create(id);
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    createPassenger,
    assignPassenger,
  };
};

export default bookingService;
