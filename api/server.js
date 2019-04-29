const express = require('express');

const smurfs = require('../smurfs/smurfsModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'up' });
  });
  
  server.get('/smurfs', async (req, res) => {
    const rows = await smurfs.getAll();
  
    res.status(200).json(rows);
  });
  
module.exports = server;
