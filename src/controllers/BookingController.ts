import bookingService from '../services/bookingService';

export default class BookingController {
  async create(req, res) {
    try {
      const booking = await bookingService.create(req.body, null, null);
      if (!booking) {
        return res.status(400).json({ message: 'Bad Request: Model not found' });
      }
      return res.status(201).json({ booking });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getAll(_req, res) {
    try {
      const bookings = await bookingService.getAll(0, 10);
      if (!bookings) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ bookings });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async get(req, res) {
    try {
      const booking = await bookingService.get(req.params.id);
      if (!booking) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ booking });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async update(req, res) {
    try {
      const booking = await bookingService.update(req.params.id, req.body);
      if (!booking) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ booking });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async destroy(req, res) {
    try {
      const model = await bookingService.remove(req.params.id);
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

  async createPassenger(req, res) {
    try {
      const passenger = await bookingService.createPassenger(
        req.params.id,
        req.body,
      );
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
  }

  async assignPassenger(req, res) {
    try {
      const passenger = await bookingService.assignPassenger(
        req.params.id,
        req.params.pd,
      );
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
  }
}
