/* eslint-disable new-cap */

import express from 'express';
import request from 'request';
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  res.json({ payload: 'play!' });
});

router.get('/twitch', (req, res) => {
  const url = 'https://api.twitch.tv/kraken/games/top';
  request({ url, json: true }, (err, resp, body) => {
    res.json(body);
  });
});
