import PackageRepository from '../repositories/PackageRepository';
import accommodationService from './accommodationService';
import ticketService from './ticketService';
import transportService from './transportService';

const _package = new PackageRepository();

class PackageService {
  get(id) {
    return _package.get(id);
  }

  getAll(page, limit) {
    return _package.getAll(page, limit);
  }

  create(data) {
    return _package.create(data);
  }

  update(id, data) {
    return _package.update(id, data);
  }

  remove(id) {
    return _package.remove(id);
  }

  async assignTicket(id, data) {
    const p = await _package.get(id);
    return ticketService.create(data, p);
  }

  async assignAccommodation(id, data) {
    const a = await _package.get(id);
    return accommodationService.create(data, a);
  }

  async assignTransport(id, data) {
    const t = await _package.get(id);
    return transportService.assignTransport(data, t);
  }
}

export default new PackageService();
