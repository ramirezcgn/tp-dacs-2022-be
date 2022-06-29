import { Op } from 'sequelize';
import crypto from 'crypto';
import dayjs from 'dayjs';
import Repository from './Repository';
import PasswordReset from '../models/PasswordReset';

export default class PasswordResetRepository implements Repository {
  get(email) {
    return PasswordReset.findOne({
      where: {
        email,
      },
    });
  }

  getAll() {
    return PasswordReset.findAll();
  }

  async create(email) {
    await this.remove(email);
    return PasswordReset.create({
      email,
      token: Array.from(crypto.randomBytes(128)).map((buf) =>
        buf.toString(16).padStart(2, '0'),
      ),
    });
  }

  update() {
    return PasswordReset.destroy({
      where: {
        created_at: {
          [Op.lt]: dayjs().subtract(2, 'days').toDate(),
        },
      },
    });
  }

  remove(email) {
    return PasswordReset.destroy({
      where: {
        email,
      },
    });
  }
}
