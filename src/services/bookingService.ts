import BookingRepository from '../repositories/BookingRepository';

const booking = new BookingRepository();

const bookingService = () => {
  const get = (id) => booking.get(id);
  const getAll = (page, limit) => booking.getAll(page, limit);
  const create = (data) => booking.create(data);
  const update = (id, data) => booking.update(id, data);
  const remove = (id) => booking.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default bookingService;
