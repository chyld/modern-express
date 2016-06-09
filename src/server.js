// logger.log -> error, warn, info, verbose, debug, silly

// todo:
// test - unit, route, e2e
// test - travis, jenkins, ci
// async, promises, await
// mocking - http, db, file i/o
// auth

import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import winston from 'winston';

const transport = new winston.transports.Console({ level: process.env.LEVEL, colorize: true });
const logger = new (winston.Logger)({
  transports: [transport],
});

logger.log('info', '[WINSTON] - log level: %s', process.env.LEVEL);

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/games', require('./games'));

app.listen(process.env.PORT, () => {
  logger.log('info', '[EXPRESS] - listening port: %d', process.env.PORT);
});
