import Repository from './Repository';
import Ticket from '../models/Ticket';
import User from '../models/User';

export default class TicketRepository implements Repository {
  get(id) {
    return Ticket.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Ticket.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return Ticket.create(
      {
        ...data,
        user,
      },
      {
        association: Ticket.User,
      },
    );
  }

  update(id, data) {
    return Ticket.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Ticket.destroy({
      where: {
        id,
      },
    });
  }
}
