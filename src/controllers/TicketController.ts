import ticketService from '../services/ticketService';

const TicketController = () => {
  // const create = async (req, res) => {
  //   try {
  //     const ticket = await ticketService().create(req.body);
  //     if (!ticket) {
  //       return res.status(400).json({ msg: 'Bad Request: Model not found' });
  //     }
  //     return res.status(200).json({ ticket });
  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json({ msg: 'Internal server error' });
  //   }
  // };

  const getAll = async (req, res) => {
    try {
      const tickets = await ticketService().getAll(0, 10);
      if (!tickets) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ tickets });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const ticket = await ticketService().get(req.params.id);
      if (!ticket) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ ticket });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const ticket = await ticketService().update(req.params.id, req.body);
      if (!ticket) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ ticket });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await ticketService().remove(req.params.id);
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
    //create,
    destroy,
  };
};

export default TicketController;
