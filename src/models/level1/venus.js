/* eslint-disable new-cap, no-use-before-define */

import express from 'express';
import request from 'request';
import Promise from 'bluebird';
import fs from 'fs';
import path from 'path';
import logger from '../../utils/logging';
const router = module.exports = express.Router();

logger.log('info', '[ROUTER] - venus route');

router.get('/orbit', (req, res) => {
  logger.log('debug', '[VENUS] - get /venus/orbit');
  const url = 'https://api.twitch.tv/kraken/games/top';
  pReq(url)
  .then(data => data.top.map(g => g.game.name))
  .then(games => pWrite(games.join('\n')))
  .then(() => {
    res.json({ payload: 'done' });
  });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

function pWrite(list) {
  return new Promise((resolve, reject) => {
    const filename = path.join(__dirname, '../../../temp/games.txt');
    fs.writeFile(filename, list, err => {
      if (err) {
        reject(err);
      } else {
        resolve(null);
      }
    });
  });
}

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

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

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
