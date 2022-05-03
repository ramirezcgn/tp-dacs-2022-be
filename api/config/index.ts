import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

declare const process: {
  env: {
    [key: string]: string;
  },
};

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '2017',
};

export default config;
