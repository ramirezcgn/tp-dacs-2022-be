import AccommodationRepository from '../repositories/AccommodationRepository';
import buscarReserva2 from './findAccommodation.service';
import realizarReservaHotel from './selectAccommodation.service';

const accommodation = new AccommodationRepository();

const accommodationService = () => {
  const get = (id) => accommodation.get(id);
  const getAll = (page, limit) => accommodation.getAll(page, limit);
  const create = (data) => accommodation.create(data);
  const update = (id, data) => accommodation.update(id, data);
  const remove = (id) => accommodation.remove(id);

  const buscarReserva = async () => {
    const result = buscarReserva2();
    console.log({ result });
    return result;
  };

  const reservaHotel = async () => {
    const result = realizarReservaHotel(123);
    console.log({ result });
    return result;
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    buscarReserva,
    reservaHotel,
  };
};

export default accommodationService;
