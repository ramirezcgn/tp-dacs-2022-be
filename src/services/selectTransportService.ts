import findTransport from './findTransportService';

const selectTransportService = (id) => findTransport().get(id);

export default selectTransportService;
