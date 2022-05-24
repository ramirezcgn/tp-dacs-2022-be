import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import mapRoutes from './libs/express-routes-mapper';

import config from './config';
import database from './config/database';
import auth from './policies/auth.policy';

export const beforeAction = async () => {
  const testapp = express();
  const controllersPath = path.join('src', 'controllers');
  const mappedOpenRoutes = await mapRoutes(
    config.publicRoutes,
    controllersPath,
  );
  const mappedAuthRoutes = await mapRoutes(
    config.privateRoutes,
    controllersPath,
  );

  testapp.use(bodyParser.urlencoded({ extended: false }));
  testapp.use(bodyParser.json());

  testapp.all('/private/*', (req, res, next) => auth(req, res, next));
  testapp.use('/public', mappedOpenRoutes);
  testapp.use('/private', mappedAuthRoutes);
  await database.authenticate();
  await database.drop();
  await database.sync().then(() => {
    console.log('Connection to the database has been established successfully');
  });

  return testapp;
};

export const afterAction = async () => {
  await database.close();
};
