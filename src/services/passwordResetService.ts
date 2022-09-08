import PasswordResetRepository from '../repositories/PasswordResetRepository';

const passwordReset = new PasswordResetRepository();

class PasswordResetService {
  get(email) {
    return passwordReset.get(email);
  }

  getAll() {
    return passwordReset.getAll();
  }

  create(email) {
    return passwordReset.create(email);
  }

  update() {
    return passwordReset.update();
  }

  remove(email) {
    return passwordReset.remove(email);
  }
}

export default new PasswordResetService();
