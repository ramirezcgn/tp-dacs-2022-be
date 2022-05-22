import Repository from './Repository';
import PaymentPlan from '../models/PaymentPlan';
import User from '../models/User';

export default class PaymentPlanRepository implements Repository {
  get(id) {
    return PaymentPlan.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return PaymentPlan.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return PaymentPlan.create(
      {
        ...data,
        user,
      },
      {
        association: PaymentPlan.User,
      },
    );
  }

  update(id, data) {
    return PaymentPlan.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return PaymentPlan.destroy({
      where: {
        id,
      },
    });
  }
}
