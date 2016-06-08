// logger.log -> error, warn, info, verbose, debug, silly

import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import winston from 'winston';

const transport = new winston.transports.Console({ level: process.env.LEVEL, colorize: true });
const logger = new (winston.Logger)({
  transports: [transport],
});

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  logger.log('info', '[LISTENING] - port: %d', process.env.PORT);
});

app.get('/hello', (req, res) => {
  res.send({ payload: 'world' });
});
