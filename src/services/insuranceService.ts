import InsuranceRepository from '../repositories/InsuranceRepository';

const insurance = new InsuranceRepository();

class InsuranceService {
  get(id) {
    return insurance.get(id);
  }

  getAll(page, limit) {
    return insurance.getAll(page, limit);
  }

  create(data) {
    return insurance.create(data);
  }

  update(id, data) {
    return insurance.update(id, data);
  }

  remove(id) {
    return insurance.remove(id);
  }
};

export default new InsuranceService();
