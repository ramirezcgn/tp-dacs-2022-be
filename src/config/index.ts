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

let turismoControlHost = 'turismo_control';
if (process.env.TURISMO_CONTROL_HOST) {
  turismoControlHost = process.env.TURISMO_CONTROL_HOST;
}

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '3001',
  externalApi: `http://${externalHost}:4000/api`,
  redisServer: `redis://${redisHost}:6379`,
  turismoControlApi: `http://${turismoControlHost}:5000`,
};

export default config;
