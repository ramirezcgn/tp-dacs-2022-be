import ExtStayRepository from '../repositories/ExtStayRepository';

const stay = new ExtStayRepository();

class ExtAccommodationService {
  get(id) {
    return stay.get(id);
  }

  getAll() {
    return stay.getAll();
  }

  select(id, places) {
    return stay.select(id, places);
  }
}

export default new ExtAccommodationService();
