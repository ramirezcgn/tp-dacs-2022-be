import ExtTControlRepository from '../repositories/ExtTControlRepository';

const control = new ExtTControlRepository();

class ExtTControlService {
  validate(customer, _package) {
    return control.validate(customer, _package);
  }
}

export default new ExtTControlService();
