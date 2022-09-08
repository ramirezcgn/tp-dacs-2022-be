import PassengerRepository from '../repositories/PassengerRepository';

const passenger = new PassengerRepository();

class PassengerService {
  get(id) {
    return passenger.get(id);
  }

  getAll(page, limit) {
    return passenger.getAll(page, limit);
  }

  create(data) {
    return passenger.create(data);
  }

  update(id, data) {
    return passenger.update(id, data);
  }

  remove(id) {
    return passenger.remove(id);
  }
}

export default new PassengerService();
