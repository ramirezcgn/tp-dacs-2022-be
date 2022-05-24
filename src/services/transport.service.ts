import TransportRepository from '../repositories/TransportRepository';
import buscarVuelos2 from './findTransport.service';
import reservarVuelos2 from './selectTransport.service';

const transport = new TransportRepository();

const transportService = () => {
  const get = (id) => transport.get(id);
  const getAll = (page, limit) => transport.getAll(page, limit);
  const create = (data) => transport.create(data);
  const update = (id, data) => transport.update(id, data);
  const remove = (id) => transport.remove(id);

  const buscarVuelos = async () => {
    const result = buscarVuelos2();
    console.log({ result });
    return result;
  };

  const reservarVuelos = async () => {
    const result = reservarVuelos2(123);
    console.log({ result });
    return result;
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    buscarVuelos,
    reservarVuelos,
  };
};

export default transportService;
