import Repository from './Repository';
import Ticket from '../models/Ticket';

export default class TicketRepository implements Repository {
  get(id) {
    return Ticket.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Ticket.findAll();
  }

  create(data, _package) {
    return Ticket.create(
      {
        ...data,
        package: _package,
      },
      {
        association: Ticket.package,
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
