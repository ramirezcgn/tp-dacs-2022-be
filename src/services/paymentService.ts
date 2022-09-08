import PaymentRepository from '../repositories/PaymentRepository';

const payment = new PaymentRepository();

class PaymentService {
  get(id) {
    return payment.get(id);
  }

  getAll(page, limit) {
    return payment.getAll(page, limit);
  }

  create(data) {
    return payment.create(data);
  }

  update(id, data) {
    return payment.update(id, data);
  }

  remove(id) {
    return payment.remove(id);
  }
}

export default new PaymentService();
