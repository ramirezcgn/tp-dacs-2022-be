import ExtTControlRepository from '../repositories/ExtTControlRepository';

const control = new ExtTControlRepository();

const extTControlService = () => {
  const validate = (customer, _package) => control.validate(customer, _package);

  return {
    validate,
  };
};

export default extTControlService;
