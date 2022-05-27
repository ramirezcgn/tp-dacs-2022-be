import ExtTControlRepository from '../repositories/ExtTControlRepository';

const control = new ExtTControlRepository();

const extTControlService = () => {
  const validate = (data) => control.validate(data);

  return {
    validate,
  };
};

export default extTControlService;
