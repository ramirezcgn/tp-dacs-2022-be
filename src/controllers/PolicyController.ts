import policyService from '../services/policyService';

const PolicyController = () => {
  const create = async (req, res) => {
    try {
      const policy = await policyService().create(req.body);
      if (!policy) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ policy });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const policys = await policyService().getAll(0, 10);
      if (!policys) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ policys });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const policy = await policyService().get(req.params.id);
      if (!policy) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ policy });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const policy = await policyService().update(req.params.id, req.body);
      if (!policy) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ policy });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await policyService().remove(req.params.id);
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

export default PolicyController;
