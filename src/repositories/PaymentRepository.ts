import Repository from './Repository';
import Payment from '../models/Payment';
import User from '../models/User';

export default class PaymentRepository implements Repository {
  get(id) {
    return Payment.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Payment.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Payment.create(
      {
        ...data,
        user,
      },
      {
        association: Payment.User,
      },
    );
  }

  update(id, data) {
    return Payment.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Payment.destroy({
      where: {
        id,
      },
    });
  }
}
