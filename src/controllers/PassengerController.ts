import passengerService from '../services/passengerService';

const PassengerController = () => {
  const create = async (req, res) => {
    try {
      const passenger = await passengerService().create(req.body);
      if (!passenger) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ passenger });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const passengers = await passengerService().getAll(0, 10);
      if (!passengers) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ passengers });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const passenger = await passengerService().get(req.params.id);
      if (!passenger) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ passenger });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const passenger = await passengerService().update(
        req.params.id,
        req.body,
      );
      if (!passenger) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ passenger });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await passengerService().remove(req.params.id);
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

export default PassengerController;
