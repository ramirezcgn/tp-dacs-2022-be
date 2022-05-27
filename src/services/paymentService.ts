import PaymentRepository from '../repositories/PaymentRepository';

const payment = new PaymentRepository();

const paymentService = () => {
  const get = (id) => payment.get(id);
  const getAll = (page, limit) => payment.getAll(page, limit);
  const create = (data) => payment.create(data);
  const update = (id, data) => payment.update(id, data);
  const remove = (id) => payment.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default paymentService;
