import ExtShowRepository from '../repositories/ExtShowRepository';

const show = new ExtShowRepository();

const extTicketService = () => {
  const get = (id) => show.get(id);
  const getAll = () => show.getAll();
  const select = (id, places) => show.select(id, places);

  return {
    get,
    getAll,
    select,
  };
};

export default extTicketService;
