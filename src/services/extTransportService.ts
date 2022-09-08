import ExtTranspRepository from '../repositories/ExtTranspRepository';

const transp = new ExtTranspRepository();

class ExtTransportService {
  get(id) {
    return transp.get(id);
  }

  getAll() {
    return transp.getAll();
  }

  select(id, places) {
    return transp.select(id, places);
  }
}

export default new ExtTransportService();
