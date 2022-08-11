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

module.exports = server

server.use('/route-name-here', routes)
