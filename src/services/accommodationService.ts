import AccommodationRepository from '../repositories/AccommodationRepository';

const accommodation = new AccommodationRepository();

class AccommodationService {
  get(id) {
    return accommodation.get(id);
  }

  getAll(page, limit) {
    return accommodation.getAll(page, limit);
  }

  create(data, _package) {
    return accommodation.create(data, _package);
  }

  update(id, data) {
    return accommodation.update(id, data);
  }

  remove(id) {
    return accommodation.remove(id);
  }
}

export default new AccommodationService();
