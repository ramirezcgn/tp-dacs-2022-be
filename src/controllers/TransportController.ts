import transportService from '../services/transportService';

const TransportController = () => {
  // const create = async (req, res) => {
  //   try {
  //     const transport = await transportService().create(req.body);
  //     if (!transport) {
  //       return res.status(400).json({ message: 'Bad Request: Model not found' });
  //     }
  //     return res.status(201).json({ transport });
  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }
  // };

  const getAll = async (req, res) => {
    try {
      const transports = await transportService().getAll(0, 10);
      if (!transports) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ transports });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const transport = await transportService().get(req.params.id);
      if (!transport) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ transport });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const transport = await transportService().update(
        req.params.id,
        req.body,
      );
      if (!transport) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ transport });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await transportService().remove(req.params.id);
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
    //create,
    destroy,
  };
};

export default TransportController;
