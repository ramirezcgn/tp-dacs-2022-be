const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /post/': 'PostController.getAll',
  'GET /post/:id': 'PostController.get',
  'POST /post/': 'PostController.create',
  'PUT /post/:id': 'PostController.update',
  'DELETE /post/:id': 'PostController.destroy',
  'POST /notifyUsers/': 'PostController.notifyUsers',
};

export default publicRoutes;
