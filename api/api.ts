/**
 * third party libraries
 */
import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import mapRoutes from './libs/express-routes-mapper';
import cors from 'cors';

/**
 * server configuration
 */
import config from './config';
import dbService from './services/db.service';
import auth from './policies/auth.policy';

declare const process: {
  env: {
    [key: string]: string;
  },
  exit: Function,
};

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
const server = new http.Server(app);
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');
const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// secure your private routes with jwt authentication middleware
app.all('/private/*', (req, res, next) => auth(req, res, next));

// fill routes for express application
app.use('/public', mappedOpenRoutes);
app.use('/private', mappedAuthRoutes);

server.listen(config.port, () => {
  if (environment !== 'production'
    && environment !== 'development'
    && environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  return DB;
});
