import ExtTranspRepository from '../repositories/ExtTranspRepository';

const transp = new ExtTranspRepository();

const extTransportService = () => {
  const get = (id) => transp.get(id);
  const getAll = () => transp.getAll();
  const select = (id, places) => transp.select(id, places);

  return {
    get,
    getAll,
    select,
  };
};

export default extTransportService;
