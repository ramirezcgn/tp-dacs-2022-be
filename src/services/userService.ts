import UserRepository from '../repositories/UserRepository';

const user = new UserRepository();

const userService = () => {
  const get = (id) => user.get(id);
  const getAll = (page, limit) => user.getAll(page, limit);
  const create = (data) => user.create(data);
  const update = (id, data) => user.update(id, data);
  const remove = (id) => user.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default userService;
