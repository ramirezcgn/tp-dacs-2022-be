import CustomerRepository from '../repositories/CustomerRepository';

const customer = new CustomerRepository();

const customerService = () => {
  const get = (id) => customer.get(id);
  const getAll = (page, limit) => customer.getAll(page, limit);
  const create = (data) => customer.create(data);
  const update = (id, data) => customer.update(id, data);
  const remove = (id) => customer.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default customerService;
