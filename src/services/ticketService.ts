import TicketRepository from '../repositories/TicketRepository';

const ticket = new TicketRepository();

class TicketService {
  get(id) {
    return ticket.get(id);
  }

  getAll(page, limit) {
    return ticket.getAll(page, limit);
  }

  create(data, _package) {
    return ticket.create(data, _package);
  }

  update(id, data) {
    return ticket.update(id, data);
  }

  remove(id) {
    return ticket.remove(id);
  }
}

export default new TicketService();
