import Stay from '../externals/models/stay';

const findAccomodation = () => {
  const get = (id) => Stay.findByPk(id);
  const getAll = () => Stay.findAll();

  return {
    get,
    getAll,
  };
};

export default findAccomodation;
