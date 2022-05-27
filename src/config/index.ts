import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

declare const process: {
  env: {
    [key: string]: string;
  };
};

let externalHost = 'localhost';
if (process.env.EXTERNAL_HOST) {
  externalHost = process.env.EXTERNAL_HOST;
}

let redisHost = 'localhost';
if (process.env.REDIS_HOST) {
  redisHost = process.env.REDIS_HOST;
}

const turismoControlHost = 'turismo-control';

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '3001',
  externalApi: `http://${externalHost}:4000/api`,
  redisServer: `redis://${redisHost}:6379`,
  turismoControlApi: `http://${turismoControlHost}:8080`,
};

export default config;
