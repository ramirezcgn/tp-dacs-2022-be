import request from '../utils/request';
import config from '../config';

const { turismoControlApi } = config;

export default class ExtTControlRepository {
  async validate(data) {
    const { aprobada } = await request.post(
      `${turismoControlApi}/operacion`,
      data,
    );
    return aprobada;
  }
}
