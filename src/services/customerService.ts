import CustomerRepository from '../repositories/CustomerRepository';
import bookingService from './bookingService';
import extTControlService from './extTControlService';
import packageService from './packageService';

const customer = new CustomerRepository();

const customerService = () => {
  const get = (id) => customer.get(id);
  const getAll = (page, limit) => customer.getAll(page, limit);
  const create = (data) => customer.create(data);
  const update = (id, data) => customer.update(id, data);
  const remove = (id) => customer.remove(id);

  const bookPackage = async (id, pk, data) => {
    const c = await get(id);
    if (!c) {
      return false;
    }
    const p = await packageService().get(pk);
    if (!p) {
      return false;
    }
    if (await extTControlService().validate(data)) {
      return bookingService().create(data, c, p);
    }
    return false;
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    bookPackage,
  };
};

export default customerService;
