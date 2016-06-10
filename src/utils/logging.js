/* eslint-disable max-len */

import winston from 'winston';
import path from 'path';

const transport1 = new winston.transports.Console({ level: process.env.LEVEL,
                                                    colorize: true });
const transport2 = new winston.transports.File({ level: process.env.LEVEL,
                                                 filename: path.join(__dirname, '../../logs/app.log') });

module.exports = new (winston.Logger)({
  transports: [transport1, transport2],
});
