import findAccomodation from './findAccomodationService';

const selectAccomodationService = (id) => findAccomodation().get(id);

export default selectAccomodationService;
