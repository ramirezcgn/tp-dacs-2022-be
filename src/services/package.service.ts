import PackageRepository from '../repositories/PackageRepository';

const _package = new PackageRepository();

const packageService = () => {
  const get = (id) => _package.get(id);
  const getAll = (page, limit) => _package.getAll(page, limit);
  const create = (data) => _package.create(data);
  const update = (id, data) => _package.update(id, data);
  const remove = (id) => _package.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default packageService;
