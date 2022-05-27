import TransportRepository from '../repositories/TransportRepository';
import extTransportService from './extTransportService';

const transport = new TransportRepository();

const transportService = () => {
  const get = (id) => transport.get(id);
  const getAll = (page, limit) => transport.getAll(page, limit);
  const create = (data, _package) => transport.create(data, _package);
  const update = (id, data) => transport.update(id, data);
  const remove = (id) => transport.remove(id);

  const listTransport = async () => {
    const result = extTransportService().getAll();
    console.log({ result });
    return result;
  };

  const assignTransport = async (data, _package) => {
    const { externalId, places } = data;
    const response = await extTransportService().select(externalId, places);
    if (response) {
      return create(data, _package);
    }
    return false;
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    listTransport,
    assignTransport,
  };
};

export default transportService;
