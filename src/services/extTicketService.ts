import ExtShowRepository from '../repositories/ExtShowRepository';

const show = new ExtShowRepository();

class ExtTicketService {
  get(id) {
    return show.get(id);
  }

  getAll() {
    return show.getAll();
  }

  select(id, places) {
    return show.select(id, places);
  }
}

export default new ExtTicketService();
