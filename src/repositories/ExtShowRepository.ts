import axios from 'axios';
import ExternalRepository from './ExternalRepository';
import config from '../config';

const { externalApi } = config;
const apiName = 'show';

export default class ExtShowRepository implements ExternalRepository {
  async get(id) {
    const data = await axios.get(`${externalApi}/${apiName}/${id}`);
    return data.data;
  }

  async getAll() {
    const data = await axios.get(`${externalApi}/${apiName}/`);
    return data.data;
  }

  async select(id, places) {
    const data = await axios.post(`${externalApi}/${apiName}/${id}`, {
      places,
    });
    return data.data;
  }
}
