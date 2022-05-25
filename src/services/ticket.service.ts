import TicketRepository from '../repositories/TicketRepository';
//import emailService from './email.service';

const ticket = new TicketRepository();

const ticketService = () => {
  const get = (id) => ticket.get(id);
  const getAll = (page, limit) => ticket.getAll(page, limit);
  const create = (data, _package) => ticket.create(data, _package);
  const update = (id, data) => ticket.update(id, data);
  const remove = (id) => ticket.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default ticketService;
