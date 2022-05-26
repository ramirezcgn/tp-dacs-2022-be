const publicRoutes = {
  // Auth
  'POST /user': 'AuthController.register',
  'POST /register': 'AuthController.register',
  'POST /login': 'AuthController.login',
  'POST /validate': 'AuthController.validate',
  // Accomodation
  'GET /accommodation/': 'AccommodationController.getAll',
  'GET /accommodation/:id': 'AccommodationController.get',
  //'POST /accommodation/': 'AccommodationController.create',
  'PUT /accommodation/:id': 'AccommodationController.update',
  'DELETE /accommodation/:id': 'AccommodationController.destroy',
  // Booking
  'GET /booking/': 'BookingController.getAll',
  'GET /booking/:id': 'BookingController.get',
  'POST /booking/': 'BookingController.create',
  'PUT /booking/:id': 'BookingController.update',
  'DELETE /booking/:id': 'BookingController.destroy',
  // Customer
  'GET /customer/': 'CustomerController.getAll',
  'GET /customer/:id': 'CustomerController.get',
  'POST /customer/': 'CustomerController.create',
  'PUT /customer/:id': 'CustomerController.update',
  'DELETE /customer/:id': 'CustomerController.destroy',
  // Insurance
  'GET /insurance/': 'InsuranceController.getAll',
  'GET /insurance/:id': 'InsuranceController.get',
  'POST /insurance/': 'InsuranceController.create',
  'PUT /insurance/:id': 'InsuranceController.update',
  'DELETE /insurance/:id': 'InsuranceController.destroy',
  // Package
  'GET /package/': 'PackageController.getAll',
  'GET /package/:id': 'PackageController.get',
  'POST /package/': 'PackageController.create',
  'PUT /package/:id': 'PackageController.update',
  'DELETE /package/:id': 'PackageController.destroy',
  'POST /package/:id/assignTransport': 'PackageController.assignTransport',
  'POST /package/:id/assignAccommodation':
    'PackageController.assignAccommodation',
  'POST /package/:id/assignTicket': 'PackageController.assignTicket',
  'POST /package/testEmailService/': 'PackageController.testEmailService',
  // Passenger
  'GET /passenger/': 'PassengerController.getAll',
  'GET /passenger/:id': 'PassengerController.get',
  'POST /passenger/': 'PassengerController.create',
  'PUT /passenger/:id': 'PassengerController.update',
  'DELETE /passenger/:id': 'PassengerController.destroy',
  // Payment
  'GET /payment/': 'PaymentController.getAll',
  'GET /payment/:id': 'PaymentController.get',
  'POST /payment/': 'PaymentController.create',
  'PUT /payment/:id': 'PaymentController.update',
  'DELETE /payment/:id': 'PaymentController.destroy',
  // PaymentPlan
  'GET /paymentplan/': 'PaymentPlanController.getAll',
  'GET /paymentplan/:id': 'PaymentPlanController.get',
  'POST /paymentplan/': 'PaymentPlanController.create',
  'PUT /paymentplan/:id': 'PaymentPlanController.update',
  'DELETE /paymentplan/:id': 'PaymentPlanController.destroy',
  // Policy
  'GET /policy/': 'PolicyController.getAll',
  'GET /policy/:id': 'PolicyController.get',
  'POST /policy/': 'PolicyController.create',
  'PUT /policy/:id': 'PolicyController.update',
  'DELETE /policy/:id': 'PolicyController.destroy',
  // Ticket
  'GET /ticket/': 'TicketController.getAll',
  'GET /ticket/:id': 'TicketController.get',
  //'POST /ticket/': 'TicketController.create',
  'PUT /ticket/:id': 'TicketController.update',
  'DELETE /ticket/:id': 'TicketController.destroy',
  // Transport
  'GET /transport/': 'TransportController.getAll',
  'GET /transport/:id': 'TransportController.get',
  //'POST /transport/': 'TransportController.create',
  'PUT /transport/:id': 'TransportController.update',
  'DELETE /transport/:id': 'TransportController.destroy',
  // User
  'GET /user/': 'UserController.getAll',
  'GET /user/:id': 'UserController.get',
  'POST /user/': 'UserController.create',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.destroy',
};

export default publicRoutes;
