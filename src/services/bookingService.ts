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
    const p = await passengerService().create(data);
    return booking.assignPassenger(id, p);
  };

  const assignPassenger = async (id, pd) => {
    const p = await passengerService().get(pd);
    if (!p) {
      return false;
    }
    return booking.assignPassenger(id, p);
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
