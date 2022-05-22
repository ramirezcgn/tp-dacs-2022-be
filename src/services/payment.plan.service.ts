import PaymentPlanRepository from '../repositories/PaymentPlanRepository';

const paymentPlan = new PaymentPlanRepository();

const paymentPlanService = () => {
  const get = (id) => paymentPlan.get(id);
  const getAll = (page, limit) => paymentPlan.getAll(page, limit);
  const create = (data) => paymentPlan.create(data);
  const update = (id, data) => paymentPlan.update(id, data);
  const remove = (id) => paymentPlan.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default paymentPlanService;
