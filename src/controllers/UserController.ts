import userService from '../services/userService';

export default class UserController {
  async create(req, res) {
    try {
      const accommodation = await userService.create(req.body);
      if (!accommodation) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ accommodation });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getAll(_req, res) {
    try {
      const accommodations = await userService.getAll(0, 10);
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
  }

  async get(req, res) {
    try {
      const accommodation = await userService.get(req.params.id);
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
  }

  async update(req, res) {
    try {
      const accommodation = await userService.update(req.params.id, req.body);
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
  }

  async destroy(req, res) {
    try {
      const model = await userService.remove(req.params.id);
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
  }
}
