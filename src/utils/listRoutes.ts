export default (app) => {
  const routes: any = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push(middleware.route);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          routes.push(handler.route);
        }
      });
    }
  });

  console.log('---------- Available Routes -----------');
  routes.forEach(({ path: p, methods }) => {
    console.log(`Route: ${p} - Methods: ${methods}`);
  });
  console.log('---------- Available Routes -----------');
};
