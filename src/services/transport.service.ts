import TransportRepository from '../repositories/TransportRepository';

const transport = new TransportRepository();

const transportService = () => {
  const get = (id) => transport.get(id);
  const getAll = (page, limit) => transport.getAll(page, limit);
  const create = (data) => transport.create(data);
  const update = (id, data) => transport.update(id, data);
  const remove = (id) => transport.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default transportService;
