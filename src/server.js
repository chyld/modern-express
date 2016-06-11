// logger.log -> error, warn, info, verbose, debug, silly

// todo:
// test - unit, route, e2e with spies, stubs and mocks
// test - use separate test db, clean, before each, etc.
// test - travis, jenkins, ci
// auth
// caching, scaling, perf testing

import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import logger from './utils/logging';

logger.log('info', '[WINSTON] - log level: %s', process.env.LEVEL);

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/games', require('./games'));
app.use('/venus', require('./models/level1/venus'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.log('info', '[EXPRESS] - listening port: %d', port);
});

module.exports = app;
