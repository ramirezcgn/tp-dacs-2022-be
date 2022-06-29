import accommodationService from '../services/accommodationService';

const AccommodationController = () => {
  // const create = async (req, res) => {
  //   try {
  //     const accommodation = await accommodationService().create(req.body);
  //     if (!accommodation) {
  //       return res.status(400).json({ message: 'Bad Request: Model not found' });
  //     }
  //     return res.status(201).json({ accommodation });
  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }
  // };

  const getAll = async (req, res) => {
    try {
      const accommodations = await accommodationService().getAll(0, 10);
      if (!accommodations) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ accommodations });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const accommodation = await accommodationService().get(req.params.id);
      if (!accommodation) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const accommodation = await accommodationService().update(
        req.params.id,
        req.body,
      );
      if (!accommodation) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await accommodationService().remove(req.params.id);
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

  const buscarReserva = async (req, res) => {
    try {
      const result = await accommodationService();
      if (!result) {
        return res.status(400).json({ message: 'Bad Request: Email not sent' });
      }
      return res.status(200).json({ message: 'Successfully email sent' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  return {
    getAll,
    buscarReserva,
    get,
    update,
    //create,
    destroy,
  };
};

export default AccommodationController;
