var compression = require('compression');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var winston = require('winston');

var transport = new winston.transports.Console({ level: process.env.LEVEL, colorize: true });
var logger = new (winston.Logger)({
  transports: [transport]
});

logger.log('error', 'alpha');
logger.log('warn', 'beta');
logger.log('info', 'gamma');
logger.log('verbose', 'delta');
logger.log('debug', 'epsilion');
logger.log('silly', 'zeta');

var app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, function(){
  console.log('[LISTENING] - port:', process.env.PORT);
});

app.get('/hello', function(req, res){
  res.send({payload: 'world'});
});
