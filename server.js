const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs').promises
const path = require('path')
const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

const dataPath = path.join(__dirname, 'data.json')

let clickCounter = 0
const randomNo = Math.floor(Math.random() * 3)

server.get('/game', (req, res) => {
  const contents = fs.readFile(dataPath, 'utf-8')
  const data = JSON.parse(contents)
  const fishObject = data.theFish
  const fish = fishObject[randomNo]
  const fishImage = fish.image
  fishImage.onclick = clickCounter++
  const viewData = {
    image: fishImage,
  }
  res.render('game', viewData)
})

server.get('/game/details', (req, res) => {
  const contents = fs.readFile(dataPath, 'utf-8')
  const data = JSON.parse(contents)
  const fishObject = data.theFish
  const fish = fishObject[randomNo]
  const viewData = {
    image: fish.image,
    name: fish.name,
    home: fish.home,
  }
  if (clickCounter === 10) {
    res.render('details', viewData)
  }
})
module.exports = server
