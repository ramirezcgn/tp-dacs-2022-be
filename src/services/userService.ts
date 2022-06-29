import UserRepository from '../repositories/UserRepository';

const user = new UserRepository();

class UserService {
  get = (id) => user.get(id);
  getByName = (name) => user.getByName(name);
  getByEmail = (email) => user.getByEmail(email);
  getAll = (page, limit) => user.getAll(page, limit);
  create = (data) => user.create(data);
  update = (id, data) => user.update(id, data);
  remove = (id) => user.remove(id);
}

export default new UserService();
