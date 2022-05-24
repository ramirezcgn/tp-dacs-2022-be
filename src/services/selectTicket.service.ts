import findTicket from './findTicket.service';

const selectTicket = (id) => findTicket().get(id);

export default selectTicket;
