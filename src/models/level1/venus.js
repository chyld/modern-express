/* eslint-disable new-cap, no-use-before-define */

import express from 'express';
import request from 'request';
import Promise from 'bluebird';
import logger from '../../utils/logging';
const router = module.exports = express.Router();

logger.log('info', '[ROUTER] - venus route');

router.get('/orbit', (req, res) => {
  logger.log('debug', '[VENUS] - get /venus/orbit');
  const url = 'https://api.twitch.tv/kraken/games/top';
  pReq(url)
  .then(data => {
    res.json(data);
  });
});

function pReq(url) {
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}
