import findAccomodation from './findAccommodation.service';

const selectAccomodation = (id) => findAccomodation().get(id);

export default selectAccomodation;
