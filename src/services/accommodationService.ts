import AccommodationRepository from '../repositories/AccommodationRepository';

const accommodation = new AccommodationRepository();

const accommodationService = () => {
  const get = (id) => accommodation.get(id);
  const getAll = (page, limit) => accommodation.getAll(page, limit);
  const create = (data, _package) => accommodation.create(data, _package);
  const update = (id, data) => accommodation.update(id, data);
  const remove = (id) => accommodation.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove,
  };
};

export default accommodationService;
