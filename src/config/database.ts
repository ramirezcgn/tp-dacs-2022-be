import { Sequelize, Dialect } from 'sequelize';
import path from 'path';
import connection from './connection.json';

declare const process: {
  env: {
    [key: string]: string;
  };
  cwd: Function;
};

let database;

switch (process.env.NODE_ENV) {
  case 'production':
    database = new Sequelize(
      process.env.DB_NAME || connection.production.database,
      process.env.DB_USER || connection.production.username,
      process.env.DB_PASS || connection.production.password,
      {
        host: process.env.DB_HOST || connection.production.host,
        dialect: connection.production.dialect as Dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
    break;
  case 'testing':
    database = new Sequelize(
      connection.testing.database,
      connection.testing.username,
      connection.testing.password,
      {
        host: connection.testing.host,
        dialect: connection.testing.dialect as Dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
    break;
  default:
    database = new Sequelize(
      connection.development.database,
      connection.development.username,
      connection.development.password,
      {
        host: connection.development.host,
        dialect: connection.development.dialect as Dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        storage: path.join(process.cwd(), 'db', 'database.sqlite'),
      },
    );
}

export default database;
