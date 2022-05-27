import Repository from './Repository';
import Customer from '../models/Customer';
import User from '../models/User';

export default class CustomerRepository implements Repository {
  get(id) {
    return Customer.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Customer.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Customer.create(
      {
        ...data,
        user,
      },
      {
        association: Customer.User,
      },
    );
  }

  update(id, data) {
    return Customer.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Customer.destroy({
      where: {
        id,
      },
    });
  }
}
