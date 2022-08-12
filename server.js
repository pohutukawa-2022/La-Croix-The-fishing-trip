const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs').promises;
const path = require('path');
const routes = require('./routes');

const server = express();

// Server configuration
server.use(express.static('public'));
server.use(express.urlencoded({ extended: false }));

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }));
server.set('view engine', 'hbs');

// Your routes/router(s) should go here

module.exports = server;

server.get('/', (req, res) => {
  res.render('home');
});

server.get('/location', (req, res) => {
  res.render('location');
});

server.get('/location/:location', (req, res) => {
  const location = req.params.locate; // TO BE USED IN STRETCH FOR POSITION CHANGE
  res.render('game');
});

server.get('/location/:location/:fishID', async (req, res) => {
  const location = req.params.locate; // TO BE USED IN STRETCH FOR POSITION CHANGE
  const dataPath = path.join(__dirname, 'data.json');
  const fishID = req.params.fishID;

  try {
    let data = await fs.readFile(dataPath, 'utf-8');
    data = JSON.parse(data);
    const selectedFish = data.theFish.find(
      (fish) => fish.id === Number(fishID)
    );
    res.render('details', selectedFish);
  } catch (error) {
    console.error('Where is the fish', error);
  }
});
