var config = require('./wdio.conf.js').config;

config.baseUrl = 'http://localhost:8080';

exports.config = config;