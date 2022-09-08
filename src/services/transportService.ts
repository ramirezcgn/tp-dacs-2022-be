import TransportRepository from '../repositories/TransportRepository';
import extTransportService from './extTransportService';

const transport = new TransportRepository();

class TransportService {
  get(id) {
    return transport.get(id);
  }

  getAll(page, limit) {
    return transport.getAll(page, limit);
  }

  create(data, _package) {
    return transport.create(data, _package);
  }

  update(id, data) {
    return transport.update(id, data);
  }

  remove(id) {
    return transport.remove(id);
  }

  async listTransport() {
    return extTransportService.getAll();
  }

  async assignTransport(data, _package) {
    const { externalId, places } = data;
    const response = await extTransportService.select(externalId, places);
    if (response) {
      return this.create(data, _package);
    }
    return false;
  }
}

export default new TransportService();
