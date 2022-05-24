import Show from '../externals/models/show';

const findTicket = () => {
  const get = (id) => Show.findByPk(id);
  const getAll = () => Show.findAll();

  return {
    get,
    getAll,
  };
};

export default findTicket;
