import PolicyRepository from '../repositories/PolicyRepository';

const policy = new PolicyRepository();

const policyService = () => {
  const get = (id) => policy.get(id);
  const getAll = (page, limit) => policy.getAll(page, limit);
  const create = (data) => policy.create(data);
  const update = (id, data) => policy.update(id, data);
  const remove = (id) => policy.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default policyService;
