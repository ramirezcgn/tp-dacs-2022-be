import PassengerRepository from '../repositories/PassengerRepository';

const passenger = new PassengerRepository();

const passengerService = () => {
  const get = (id) => passenger.get(id);
  const getAll = (page, limit) => passenger.getAll(page, limit);
  const create = (data) => passenger.create(data);
  const update = (id, data) => passenger.update(id, data);
  const remove = (id) => passenger.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default passengerService;
