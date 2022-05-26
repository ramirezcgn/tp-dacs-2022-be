import axios from 'axios';
import ExternalRepository from './ExternalRepository';
import config from '../config';

const { externalApi } = config;
const apiName = 'transp';

export default class ExtTranspRepository implements ExternalRepository {
  async get(id) {
    const data = await axios.get(`${externalApi}/${apiName}/${id}`);
    console.log(data);
    return data.data;
  }

  async getAll() {
    const data = await axios.get(`${externalApi}/${apiName}/`);
    console.log(data);
    return data.data;
  }

  async select(id, places) {
    const data = await axios.post(`${externalApi}/${apiName}/${id}`, {
      places,
    });
    return data.data;
  }
}
