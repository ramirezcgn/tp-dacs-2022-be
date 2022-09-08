import PaymentPlanRepository from '../repositories/PaymentPlanRepository';

const paymentPlan = new PaymentPlanRepository();

class PaymentPlanService {
  get(id) {
    return paymentPlan.get(id);
  }

  getAll(page, limit) {
    return paymentPlan.getAll(page, limit);
  }

  create(data) {
    return paymentPlan.create(data);
  }

  update(id, data) {
    return paymentPlan.update(id, data);
  }

  remove(id) {
    return paymentPlan.remove(id);
  }
}

export default new PaymentPlanService();
