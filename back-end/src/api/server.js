const express = require('express');
const cors = require('cors');

const app = express();

const projectsRouter = require('../database/routes/projects')

app.use(express.json());

app.use(cors());

app.use('/projects', projectsRouter)

app.use('/', express.static(__dirname + '/build'));

app.get('/portfolio', (req, res) => {
  return res.sendFile(__dirname + '/build/index.html');
});


module.exports = app;