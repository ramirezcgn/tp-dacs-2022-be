import PolicyRepository from '../repositories/PolicyRepository';

const policy = new PolicyRepository();

class PolicyService {
  get(id) {
    return policy.get(id);
  }

  getAll(page, limit) {
    return policy.getAll(page, limit);
  }

  create(data) {
    return policy.create(data);
  }

  update(id, data) {
    return policy.update(id, data);
  }

  remove(id) {
    return policy.remove(id);
  }
}

export default new PolicyService();
