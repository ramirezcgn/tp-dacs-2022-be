import Transp from '../externals/models/transp';

const findTransportService = () => {
  const get = (id) => Transp.findByPk(id);
  const getAll = () => Transp.findAll();

  return {
    get,
    getAll,
  };
};

export default findTransportService;
