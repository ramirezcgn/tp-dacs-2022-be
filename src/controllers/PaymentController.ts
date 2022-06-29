import paymentService from '../services/paymentService';

const PaymentController = () => {
  const create = async (req, res) => {
    try {
      const payment = await paymentService().create(req.body);
      if (!payment) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ payment });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const payments = await paymentService().getAll(0, 10);
      if (!payments) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ payments });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const payment = await paymentService().get(req.params.id);
      if (!payment) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ payment });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const payment = await paymentService().update(req.params.id, req.body);
      if (!payment) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ payment });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await paymentService().remove(req.params.id);
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

  return {
    getAll,
    get,
    update,
    create,
    destroy,
  };
};

export default PaymentController;
