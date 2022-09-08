import CustomerRepository from '../repositories/CustomerRepository';
import bookingService from './bookingService';
import extTControlService from './extTControlService';
import packageService from './packageService';
import emailService from './emailService';

const customer = new CustomerRepository();

class CustomerService {
  get(id) {
    return customer.get(id);
  }

  getAll(page, limit) {
    return customer.getAll(page, limit);
  }

  create(data) {
    return customer.create(data);
  }

  update(id, data) {
    return customer.update(id, data);
  }

  remove(id) {
    return customer.remove(id);
  }

  async bookPackage(id, pk, data) {
    const c = await this.get(id);
    if (!c) {
      return false;
    }
    const p = await packageService.get(pk);
    if (!p) {
      return false;
    }
    if (await extTControlService.validate(c, p)) {
      return bookingService.create(data, c, p);
    }
    return false;
  }

  async sendAdvertising() {
    const customers = await customer.getAll(0, 100);
    const result = customers.map(({ email }) =>
      emailService.batchSend(
        'info@superblog.com',
        email,
        'We miss you!',
        'Please comeback!',
      ),
    );
    return Promise.all(result);
  }
}

export default new CustomerService();
