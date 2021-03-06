import packageService from '../services/packageService';

const PackageController = () => {
  const create = async (req, res) => {
    try {
      const _package = await packageService().create(req.body);
      if (!_package) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ package: _package });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const packages = await packageService().getAll(0, 10);
      if (!packages) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ packages });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const _package = await packageService().get(req.params.id);
      if (!_package) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ package: _package });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const _package = await packageService().update(req.params.id, req.body);
      if (!_package) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ pacakge: _package });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await packageService().remove(req.params.id);
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

  const assignTransport = async (req, res) => {
    try {
      const _package = await packageService().assignTransport(
        req.params.id,
        req.body,
      );
      if (!_package) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ _package });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const assignTicket = async (req, res) => {
    try {
      const _package = await packageService().assignTicket(
        req.params.id,
        req.body,
      );
      if (!_package) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ _package });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const assignAccommodation = async (req, res) => {
    try {
      const _package = await packageService().assignAccommodation(
        req.params.id,
        req.body,
      );
      if (!_package) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ _package });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  return {
    getAll,
    get,
    update,
    create,
    destroy,
    assignTransport,
    assignTicket,
    assignAccommodation,
  };
};

export default PackageController;
