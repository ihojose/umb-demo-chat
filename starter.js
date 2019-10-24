require('dotenv').config();

require('babel-register')({
    presets: ['env']
});

module.exports = require('./server');
