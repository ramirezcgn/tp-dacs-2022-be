import ExtStayRepository from '../repositories/ExtStayRepository';

const stay = new ExtStayRepository();

const extAccommodationService = () => {
  const get = (id) => stay.get(id);
  const getAll = () => stay.getAll();
  const select = (id, places) => stay.select(id, places);

  return {
    get,
    getAll,
    select,
  };
};

export default extAccommodationService;
