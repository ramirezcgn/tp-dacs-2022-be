import findTransport from './findTransport.service';

const selectTransport = (id) => findTransport().get(id);

export default selectTransport;
