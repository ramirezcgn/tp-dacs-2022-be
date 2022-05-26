import userService from '../services/userService';

const UserController = () => {
  const create = async (req, res) => {
    try {
      const accommodation = await userService().create(req.body);
      if (!accommodation) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ accommodation });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const accommodations = await userService().getAll(0, 10);
      if (!accommodations) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ accommodations });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const accommodation = await userService().get(req.params.id);
      if (!accommodation) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const accommodation = await userService().update(req.params.id, req.body);
      if (!accommodation) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ accommodation });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await userService().remove(req.params.id);
      if (!model) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ msg: 'Successfully destroyed model' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
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

export default UserController;
