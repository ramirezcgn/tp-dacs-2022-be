import PackageRepository from '../repositories/PackageRepository';
import accommodationService from './accommodationService';
import ticketService from './ticketService';
import transportService from './transportService';

const _package = new PackageRepository();

const packageService = () => {
  const get = (id) => _package.get(id);
  const getAll = (page, limit) => _package.getAll(page, limit);
  const create = (data) => _package.create(data);
  const update = (id, data) => _package.update(id, data);
  const remove = (id) => _package.remove(id);

  const assignTicket = async (id, data) => {
    const p = await _package.get(id);
    return ticketService().create(data, p);
  };

  const assignAccommodation = async (id, data) => {
    const a = await _package.get(id);
    return accommodationService().create(data, a);
  };

  const assignTransport = async (id, data) => {
    const t = await _package.get(id);
    return transportService().assignTransport(data, t);
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
