import PackageRepository from '../repositories/PackageRepository';
import accommodationService from './accommodation.service';
import ticketService from './ticket.service';
import transportService from './transport.service';

const _package = new PackageRepository();

const packageService = () => {
  const get = (id) => _package.get(id);
  const getAll = (page, limit) => _package.getAll(page, limit);
  const create = (data) => _package.create(data);
  const update = (id, data) => _package.update(id, data);
  const remove = (id) => _package.remove(id);

  const assignTicket = (id, data) => {
    const p = _package.get(id);
    return ticketService().create(data, p);
  };

  const assignAccommodation = (id, data) => {
    const a = _package.get(id);
    return accommodationService().create(data, a);
  };

  const assignTransport = (id, data) => {
    const t = _package.get(id);
    return transportService().create(data, t);
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    assignAccommodation,
    assignTicket,
    assignTransport,
  };
};

export default packageService;
