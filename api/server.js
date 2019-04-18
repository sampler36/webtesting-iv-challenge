const express = require('express');

const smurfs = require('../smurfs/smurfsModel');

const server = express();

server.use(express.json());


module.exports = server;
