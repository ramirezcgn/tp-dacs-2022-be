import axios from 'axios';
import request from '../utils/request';
import config from '../config';

const { turismoControlApi } = config;

export default class ExtTControlRepository {
  async validate(customer, _package) {
    const { aprobada } = await request.withRetry(
      () =>
        axios.post(
          `${turismoControlApi}/operacion`,
          {
            cuit: customer.dni,
            fecha_incio: _package.date,
            fecha_fin: _package.days,
            precio: _package.price,
          },
          {
            headers: {
              'content-type': 'application/json',
              accept: 'application/json',
            },
          },
        ),
      10,
      (res) => {
        const { status, data } = res;
        return status === 201 && data.aprobada;
      },
    );
    return aprobada || false;
  }
}
