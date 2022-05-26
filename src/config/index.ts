import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

declare const process: {
  env: {
    [key: string]: string;
  };
};

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '3001',
  externalApi: 'http://localhost:4000/api',
};

export default config;
