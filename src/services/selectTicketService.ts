import findTicket from './findTicketService';

const selectTicketService = (id) => findTicket().get(id);

export default selectTicketService;
