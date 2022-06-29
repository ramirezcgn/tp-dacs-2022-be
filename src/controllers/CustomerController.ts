import customerService from '../services/customerService';

const CustomerController = () => {
  const create = async (req, res) => {
    try {
      const customer = await customerService().create(req.body);
      if (!customer) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ customer });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const customers = await customerService().getAll(0, 10);
      if (!customers) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ customers });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const customer = await customerService().get(req.params.id);
      if (!customer) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ customer });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const customer = await customerService().update(req.params.id, req.body);
      if (!customer) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ customer });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await customerService().remove(req.params.id);
      if (!model) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ message: 'Successfully destroyed model' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const bookPackage = async (req, res) => {
    try {
      const booking = await customerService().bookPackage(
        req.params.id,
        req.params.pk,
        req.body,
      );
      if (!booking) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ booking });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const sendAdvertising = async (req, res) => {
    try {
      await customerService().sendAdvertising();
      return res.status(200).json({ message: 'Successfully email sent' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  return {
    getAll,
    get,
    update,
    create,
    destroy,
    bookPackage,
    sendAdvertising,
  };
};

export default CustomerController;
