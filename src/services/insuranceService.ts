import InsuranceRepository from '../repositories/InsuranceRepository';

const insurance = new InsuranceRepository();

const insuranceService = () => {
  const get = (id) => insurance.get(id);
  const getAll = (page, limit) => insurance.getAll(page, limit);
  const create = (data) => insurance.create(data);
  const update = (id, data) => insurance.update(id, data);
  const remove = (id) => insurance.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default insuranceService;
