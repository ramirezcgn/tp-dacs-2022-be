import PasswordResetRepository from '../repositories/PasswordResetRepository';

const passwordReset = new PasswordResetRepository();

class PasswordResetService {
  get = (email) => passwordReset.get(email);
  getAll = () => passwordReset.getAll();
  create = (email) => passwordReset.create(email);
  update = () => passwordReset.update();
  remove = (email) => passwordReset.remove(email);
}

export default new PasswordResetService();
