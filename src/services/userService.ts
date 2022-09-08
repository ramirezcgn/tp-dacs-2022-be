import UserRepository from '../repositories/UserRepository';

const user = new UserRepository();

class UserService {
  get(id) {
    return user.get(id);
  }

  getByName(name) {
    return user.getByName(name);
  }

  getByEmail(email) {
    return user.getByEmail(email);
  }

  getAll(page, limit) {
    return user.getAll(page, limit);
  }

  create(data) {
    return user.create(data);
  }

  update(id, data) {
    return user.update(id, data);
  }

  remove(id) {
    return user.remove(id);
  }
}

export default new UserService();
